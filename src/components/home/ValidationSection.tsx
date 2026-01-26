import { Quote } from "lucide-react";

const testimonials = [
    {
        quote:
            "Finally, a system that tells me when it doesn't know something. That honesty changes everything about how I trust the data.",
        author: "Performance Director",
        org: "Elite Sports Program",
    },
    {
        quote:
            "The edge-first approach means my athletes' raw biometrics stay private. That's not just a feature — it's a requirement.",
        author: "Head of Sports Science",
        org: "Professional Team",
    },
    {
        quote:
            "I can clearly see what's inferred, what's measured, and what's uncertain. No other system gives me that transparency.",
        author: "Senior Researcher",
        org: "Sports Medicine Institute",
    },
];

export function ValidationSection() {
    return (
        <section className="section">
            <div className="container-xl">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="mb-4">Built for the Highest Standards</h2>
                    <p className="text-gray-400 text-lg">
                        Designed in collaboration with sports scientists, coaches, and athletes
                        who demand transparency and reliability.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card p-6 flex flex-col">
                            <Quote className="h-8 w-8 text-accent/30 mb-4" />
                            <blockquote className="text-gray-300 leading-relaxed flex-1 mb-6">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="border-t border-graphite-700 pt-4">
                                <p className="font-medium text-white text-sm">{testimonial.author}</p>
                                <p className="text-gray-500 text-sm">{testimonial.org}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Research alignment */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-graphite-800 border border-graphite-700">
                        <div className="flex -space-x-2">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-graphite-600 border-2 border-graphite-800"
                                />
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm">
                            Aligned with peer-reviewed research in wearable computing and sports science
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
