"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { type SystemStateId } from "./mock-data";

// ─── State config for particle behavior ─────────────────────

const STATE_CONFIGS: Record<
    SystemStateId,
    { color: [number, number, number]; spread: number; opacity: number; rotSpeed: number; wobble: number }
> = {
    active: {
        color: [42 / 255, 161 / 255, 122 / 255], // brighter emerald
        spread: 0,
        opacity: 0.9,
        rotSpeed: 0.08,
        wobble: 0,
    },
    degraded: {
        color: [245 / 255, 158 / 255, 11 / 255], // brighter amber
        spread: 0.12,
        opacity: 0.7,
        rotSpeed: 0.05,
        wobble: 0.15,
    },
    noInference: {
        color: [163 / 255, 163 / 255, 163 / 255], // lighter gray
        spread: 0.6,
        opacity: 0.18,
        rotSpeed: 0.01,
        wobble: 0,
    },
    recovery: {
        color: [96 / 255, 165 / 255, 250 / 255], // brighter blue
        spread: 0,
        opacity: 0.8,
        rotSpeed: 0.04,
        wobble: 0,
    },
};

// ─── Generate brain-shaped positions ────────────────────────

function generateBrainPositions(count: number): Float32Array {
    const positions = new Float32Array(count * 3);
    const leftCenter = [-0.35, 0, 0];
    const rightCenter = [0.35, 0, 0];

    for (let i = 0; i < count; i++) {
        const isLeft = i < count / 2;
        const center = isLeft ? leftCenter : rightCenter;

        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = Math.cbrt(Math.random()); // uniform volume distribution

        const rx = 0.5;
        const ry = 0.38;
        const rz = 0.42;

        const jitter = 0.06;
        positions[i * 3] = center[0] + rx * r * Math.sin(phi) * Math.cos(theta) + (Math.random() - 0.5) * jitter;
        positions[i * 3 + 1] = center[1] + ry * r * Math.sin(phi) * Math.sin(theta) + (Math.random() - 0.5) * jitter;
        positions[i * 3 + 2] = center[2] + rz * r * Math.cos(phi) + (Math.random() - 0.5) * jitter;
    }

    return positions;
}

// ─── Inner scene component ──────────────────────────────────

function BrainParticles({ state }: { state: SystemStateId }) {
    const pointsRef = useRef<THREE.Points>(null);
    const materialRef = useRef<THREE.PointsMaterial>(null);
    const basePositions = useMemo(() => generateBrainPositions(600), []);
    const currentColor = useRef(new THREE.Color(...STATE_CONFIGS.active.color));
    const currentSpread = useRef(0);
    const currentOpacity = useRef(0.85);
    const time = useRef(0);

    // Store target config
    const target = STATE_CONFIGS[state];
    const targetColor = useMemo(() => new THREE.Color(...target.color), [target.color]);

    useFrame((_, delta) => {
        if (!pointsRef.current || !materialRef.current) return;

        time.current += delta;
        const lerpSpeed = delta * 2.5;

        // Lerp color
        currentColor.current.lerp(targetColor, lerpSpeed);
        materialRef.current.color.copy(currentColor.current);

        // Lerp opacity
        currentOpacity.current = THREE.MathUtils.lerp(currentOpacity.current, target.opacity, lerpSpeed);
        materialRef.current.opacity = currentOpacity.current;

        // Lerp spread and update positions
        currentSpread.current = THREE.MathUtils.lerp(currentSpread.current, target.spread, lerpSpeed);
        const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < posArray.length; i += 3) {
            const bx = basePositions[i];
            const by = basePositions[i + 1];
            const bz = basePositions[i + 2];

            // Apply spread
            const spreadX = bx * (1 + currentSpread.current);
            const spreadY = by * (1 + currentSpread.current);
            const spreadZ = bz * (1 + currentSpread.current);

            // Wobble (degraded state)
            const wobbleAmt = target.wobble;
            const idx = i / 3;
            const wobbleX = wobbleAmt * Math.sin(time.current * 3 + idx * 0.5) * 0.03;
            const wobbleY = wobbleAmt * Math.cos(time.current * 2.5 + idx * 0.7) * 0.03;

            posArray[i] = THREE.MathUtils.lerp(posArray[i], spreadX + wobbleX, lerpSpeed);
            posArray[i + 1] = THREE.MathUtils.lerp(posArray[i + 1], spreadY + wobbleY, lerpSpeed);
            posArray[i + 2] = THREE.MathUtils.lerp(posArray[i + 2], spreadZ, lerpSpeed);
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Rotation
        pointsRef.current.rotation.y += delta * target.rotSpeed;

        // Pulse scale for recovery
        if (state === "recovery") {
            const pulse = 1 + Math.sin(time.current * 2) * 0.03;
            pointsRef.current.scale.setScalar(pulse);
        } else {
            pointsRef.current.scale.setScalar(
                THREE.MathUtils.lerp(pointsRef.current.scale.x, 1, lerpSpeed)
            );
        }
    });

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute(
            "position",
            new THREE.BufferAttribute(new Float32Array(basePositions), 3)
        );
        return geo;
    }, [basePositions]);

    return (
        <points ref={pointsRef} geometry={geometry}>
            <pointsMaterial
                ref={materialRef}
                size={0.055}
                color={currentColor.current}
                transparent
                opacity={currentOpacity.current}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

// ─── Canvas wrapper ─────────────────────────────────────────

interface ParticleBrainProps {
    state: SystemStateId;
    className?: string;
    style?: React.CSSProperties;
}

export function ParticleBrain({ state, className, style }: ParticleBrainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Check for reduced motion
    const prefersReducedMotion = useRef(false);
    useEffect(() => {
        prefersReducedMotion.current = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
    }, []);

    return (
        <div className={className} style={style}>
            <Canvas
                ref={canvasRef}
                camera={{ position: [0, 0, 2.8], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 1.5]}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.5} />
                <BrainParticles state={state} />
            </Canvas>
        </div>
    );
}
