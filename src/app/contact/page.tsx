import { ContactForm } from "./ContactForm";

export const metadata = {
    title: "Contact | OneSync",
    description: "Get in touch with the OneSync team.",
};

export default function ContactPage() {
    return (
        <section className="py-32 md:py-40 bg-light-bg min-h-screen">
            <div className="section-container max-w-2xl">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                        <span className="text-xs font-light text-emerald uppercase tracking-wider">
                            Say Hello
                        </span>
                    </div>
                    <h1 className="font-display text-h1 md:text-display-lg text-text-dark font-light mb-4">
                        We&apos;d Love to Hear From You
                    </h1>
                    <p className="text-body-lg text-text-dark-secondary font-light">
                        Whether you&apos;re an investor, an early adopter, or just curious — drop us a line. We reply to everything.
                    </p>
                </div>

                <ContactForm />

                <div className="mt-16 pt-8 border-t border-neutral-200">
                    <p className="text-xs text-text-dark-muted font-light mb-4">Other ways to connect</p>
                    <div className="flex gap-6">
                        <a href="/investor" className="text-sm text-emerald font-light hover:text-emerald-light transition-colors">
                            Investor Relations
                        </a>
                        <a href="/team" className="text-sm text-emerald font-light hover:text-emerald-light transition-colors">
                            Meet the Team
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
