import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

const robotoCondensed = Roboto_Condensed({
    subsets: ["latin"],
    variable: "--font-roboto-condensed",
    display: "swap",
});

export const metadata: Metadata = {
    title: "OneSync - Data Scientist Command Center",
    description: "Edge-first intelligence. Conditional inference. Privacy by design.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} ${robotoCondensed.variable} font-sans antialiased bg-obsidian-950 text-gray-300 overflow-x-hidden`}
            >
                {/* Global Noise Overlay */}
                <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('/noise.svg')]" />

                <Header />
                <main className="min-h-screen pt-24">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
