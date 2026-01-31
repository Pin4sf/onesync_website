interface GlowOrbProps {
    color?: "emerald" | "emerald-shimmer" | "green" | "blue";
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

export function GlowOrb({ color = "emerald", size = "md", className = "" }: GlowOrbProps) {
    const colorMap = {
        emerald: "bg-emerald/20",
        "emerald-shimmer": "bg-emerald-shimmer/25",
        green: "bg-data-green/15",
        blue: "bg-data-blue/10",
    };

    const sizeMap = {
        sm: "w-32 h-32",
        md: "w-48 h-48",
        lg: "w-64 h-64",
        xl: "w-96 h-96",
    };

    return (
        <div
            className={`
                absolute rounded-full pointer-events-none
                ${colorMap[color]} ${sizeMap[size]} ${className}
            `}
            style={{ filter: "blur(80px)" }}
            aria-hidden="true"
        />
    );
}
