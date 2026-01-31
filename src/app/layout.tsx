import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientMesh } from "@/components/backgrounds/GradientMesh";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

// Premium display font - for headings and hero text
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
});

// Premium body font - clean and modern
const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const spaceMono = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "OneSync - OneBand | Beyond Vital Signs. Into the Mind",
    description: "Make Calm Measurable. Make Clarity Trainable. A wearable designed to disappear until you need it.",
    keywords: ["wearable", "health tech", "mental wellness", "biometrics", "OneBand", "OneSync"],
    authors: [{ name: "OneSync" }],
    openGraph: {
        title: "OneSync - OneBand",
        description: "Beyond Vital Signs. Into the Mind.",
        type: "website",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: "#0a0a0a",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${outfit.variable} ${spaceGrotesk.variable} ${spaceMono.variable} font-sans antialiased bg-surface-950 text-text-secondary overflow-x-hidden`}
            >
                <SmoothScroll>
                    <GradientMesh />
                    <Header />
                    <main className="relative z-10 min-h-screen">{children}</main>
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
