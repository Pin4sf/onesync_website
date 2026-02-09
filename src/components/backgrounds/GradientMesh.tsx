"use client";

export function GradientMesh() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Pure black background */}
            <div className="absolute inset-0 bg-surface-950" />

            {/* Animated gradient orbs */}
            <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-emerald/[0.07] blur-[120px] animate-mesh-1" />
            <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-emerald-dark/[0.08] blur-[100px] animate-mesh-2" />
            <div className="absolute bottom-[20%] left-[30%] w-[350px] h-[350px] rounded-full bg-emerald-shimmer/[0.04] blur-[80px] animate-mesh-3" />

            {/* Noise texture overlay for premium depth */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: "182px",
                }}
                aria-hidden="true"
            />
        </div>
    );
}
