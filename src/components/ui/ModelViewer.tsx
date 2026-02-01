"use client";

import { Suspense, useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Html, useProgress } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";

// Preload model in module scope for faster loading
// This will be called when the component module is imported

interface ModelProps {
  url: string;
  scale?: number;
}

function Model({ url, scale = 1 }: ModelProps) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  // Clone scene once and memoize to prevent re-renders causing issues
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    // Ensure proper material settings for visibility
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          // Handle both single and array materials
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          materials.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial) {
              mat.needsUpdate = true;
            }
          });
        }
      }
    });
    return clone;
  }, [scene]);

  // Subtle floating animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
    }
  });

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clonedScene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.geometry?.dispose();
          if (mesh.material) {
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((material) => {
              // Dispose all texture maps
              const textureKeys = ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'aoMap', 'emissiveMap'] as const;
              textureKeys.forEach((key) => {
                const texture = (material as THREE.MeshStandardMaterial)[key];
                if (texture) {
                  texture.dispose();
                }
              });
              material.dispose();
            });
          }
        }
      });
    };
  }, [clonedScene]);

  return (
    <Center>
      <primitive ref={modelRef} object={clonedScene} scale={scale} />
    </Center>
  );
}

// Loading progress indicator
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 border-2 border-emerald/20 border-t-emerald rounded-full animate-spin" />
        <span className="text-emerald text-sm font-light">{progress.toFixed(0)}%</span>
      </div>
    </Html>
  );
}

// WebGL context manager for cleanup
function ContextManager() {
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      console.warn("WebGL context lost - attempting recovery");
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored");
    };

    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", handleContextRestored);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, [gl]);

  return null;
}

// Fallback component when WebGL fails
function WebGLFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-surface-900/50 rounded-lg">
      <p className="text-text-muted text-sm">3D preview unavailable</p>
    </div>
  );
}

interface ModelViewerProps {
  modelUrl: string;
  className?: string;
  scale?: number;
  autoRotate?: boolean;
  showHint?: boolean;
  dramaticLighting?: boolean;
}

export function ModelViewer({
  modelUrl,
  className = "",
  scale = 1,
  autoRotate = false,
  showHint = true,
  dramaticLighting = false,
}: ModelViewerProps) {
  const [hasError, setHasError] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControlsImpl>(null);

  // Preload the model
  useEffect(() => {
    useGLTF.preload(modelUrl);
  }, [modelUrl]);

  // Handle interaction state for pausing auto-rotate
  const handleInteractionStart = useCallback(() => {
    setIsInteracting(true);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    setIsInteracting(false);
  }, []);

  // Auto-rotate should pause on hover or during interaction
  const shouldAutoRotate = autoRotate && !isHovering && !isInteracting;

  if (hasError) {
    return (
      <div className={`relative ${className}`}>
        <WebGLFallback />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ background: "transparent" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45, near: 0.1, far: 100 }}
        style={{ background: "transparent" }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "default",
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = dramaticLighting ? 1.4 : 1;
        }}
        onError={() => setHasError(true)}
        fallback={<WebGLFallback />}
      >
        <ContextManager />

        {dramaticLighting ? (
          <>
            {/* DRAMATIC RIM LIGHTING - Creates glowing silhouette on dark backgrounds */}

            {/* Low ambient to keep the model dark but not pitch black */}
            <ambientLight intensity={0.15} />

            {/* Key light - subtle front fill */}
            <directionalLight position={[0, 2, 4]} intensity={0.4} color="#ffffff" />

            {/* Dramatic emerald rim lights from behind */}
            <spotLight
              position={[-4, 0, -3]}
              angle={0.6}
              penumbra={1}
              intensity={2.5}
              color="#10b981"
              castShadow={false}
            />
            <spotLight
              position={[4, 0, -3]}
              angle={0.6}
              penumbra={1}
              intensity={2.5}
              color="#10b981"
              castShadow={false}
            />

            {/* Top rim light for edge definition */}
            <spotLight
              position={[0, 4, -2]}
              angle={0.5}
              penumbra={0.8}
              intensity={1.8}
              color="#34d399"
              castShadow={false}
            />

            {/* Bottom accent - subtle warm glow */}
            <pointLight position={[0, -3, 1]} intensity={0.4} color="#fbbf24" />

            {/* Side accent lights for extra definition */}
            <directionalLight position={[-5, 1, 0]} intensity={0.6} color="#10b981" />
            <directionalLight position={[5, 1, 0]} intensity={0.6} color="#10b981" />
          </>
        ) : (
          <>
            {/* Standard lighting setup */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <directionalLight position={[-5, 5, -5]} intensity={0.5} />
            <directionalLight position={[0, -5, 0]} intensity={0.2} />
            <pointLight position={[0, 0, 5]} intensity={0.3} />
          </>
        )}

        <Suspense fallback={<Loader />}>
          <Model url={modelUrl} scale={scale} />
        </Suspense>

        {/* Controls: drag to rotate, scroll to zoom */}
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={1.5}
          maxDistance={8}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          autoRotate={shouldAutoRotate}
          autoRotateSpeed={1.5}
          enableDamping={true}
          dampingFactor={0.05}
          makeDefault
          onStart={handleInteractionStart}
          onEnd={handleInteractionEnd}
        />
      </Canvas>

      {/* Instruction hint */}
      {showHint && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-light opacity-60 pointer-events-none select-none text-text-muted">
          {autoRotate ? 'Hover to pause • Drag to rotate' : 'Drag to rotate • Scroll to zoom'}
        </div>
      )}
    </div>
  );
}
