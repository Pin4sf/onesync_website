import { Metadata } from "next";
import { DemoContent } from "./_components/DemoContent";

export const metadata: Metadata = {
    title: "Interactive System Demo | OneSync",
    description:
        "Experience OneSync's conditional inference system. See how our technology honestly reports signal quality and knows when to say 'I don't know' — unlike typical wearables.",
};

export default function DemoPage() {
    return <DemoContent />;
}
