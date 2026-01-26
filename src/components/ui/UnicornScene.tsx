"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface UnicornSceneProps {
    projectId: string;
    width?: string;
    height?: string;
    altText?: string;
}

declare global {
    interface Window {
        UnicornStudio?: {
            init: () => void;
            destroy: (id: string) => void;
            isInitialized: boolean;
        };
    }
}

export function UnicornScene({
    projectId,
    width = "100%",
    height = "100%",
    altText = "Interactive 3D Visual"
}: UnicornSceneProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    // Function to handle initialization once script is loaded
    const handleInit = () => {
        if (window.UnicornStudio) {
            window.UnicornStudio.init();
            setTimeout(() => setIsLoaded(true), 200);
        }
    };

    return (
        <div
            className="relative w-full h-full min-h-[400px]"
            style={{ width, height }}
        >
            {/* Unicorn Studio Script v2.0.3 */}
            <Script
                src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.3/dist/unicornStudio.umd.js"
                strategy="lazyOnload"
                onLoad={handleInit}
            />

            {/* Loading State Overlay */}
            <div
                className={`absolute inset-0 bg-obsidian-950 flex items-center justify-center transition-opacity duration-700 z-10 pointer-events-none ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
            >
                <div className="w-8 h-8 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin" />
            </div>

            {/* Target Div */}
            <div
                data-us-project={projectId}
                style={{ width: '100%', height: '100%' }}
                className="w-full h-full"
            />
        </div>
    );
}
