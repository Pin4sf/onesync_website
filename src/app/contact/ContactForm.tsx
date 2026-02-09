"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactForm } from "./actions";
import { MagneticButton } from "@/components/ui/MagneticButton";

const subjects = [
    { value: "", label: "Select a topic" },
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Partnership", label: "Partnership" },
    { value: "Investment", label: "Investment" },
    { value: "Media & Press", label: "Media & Press" },
];

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMsg("");

        const formData = new FormData(e.currentTarget);
        const result = await submitContactForm(formData);

        if (result.success) {
            setStatus("success");
        } else {
            setErrorMsg(result.error || "Something went wrong.");
            setStatus("error");
        }
    };

    return (
        <AnimatePresence mode="wait">
            {status === "success" ? (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-16"
                >
                    <CheckCircle className="w-12 h-12 text-emerald mx-auto mb-4" />
                    <h3 className="text-xl text-text-dark font-light mb-2">Message Sent</h3>
                    <p className="text-text-dark-secondary font-light">
                        We&apos;ll get back to you within 2 business days.
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 text-sm text-emerald font-light hover:text-emerald-light transition-colors"
                    >
                        Send another message
                    </button>
                </motion.div>
            ) : (
                <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-xs text-text-dark-muted font-light uppercase tracking-wider mb-2">
                                Name <span className="text-emerald">*</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-text-dark font-light placeholder:text-text-dark-muted/50 focus:outline-none focus:border-emerald transition-colors"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs text-text-dark-muted font-light uppercase tracking-wider mb-2">
                                Email <span className="text-emerald">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-text-dark font-light placeholder:text-text-dark-muted/50 focus:outline-none focus:border-emerald transition-colors"
                                placeholder="you@company.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="company" className="block text-xs text-text-dark-muted font-light uppercase tracking-wider mb-2">
                                Company
                            </label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-text-dark font-light placeholder:text-text-dark-muted/50 focus:outline-none focus:border-emerald transition-colors"
                                placeholder="Optional"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-xs text-text-dark-muted font-light uppercase tracking-wider mb-2">
                                Subject <span className="text-emerald">*</span>
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                required
                                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-text-dark font-light focus:outline-none focus:border-emerald transition-colors appearance-none"
                            >
                                {subjects.map((s) => (
                                    <option key={s.value} value={s.value} disabled={!s.value}>
                                        {s.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-xs text-text-dark-muted font-light uppercase tracking-wider mb-2">
                            Message <span className="text-emerald">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-text-dark font-light placeholder:text-text-dark-muted/50 focus:outline-none focus:border-emerald transition-colors resize-none"
                            placeholder="Tell us about your interest in OneSync..."
                        />
                    </div>

                    {status === "error" && (
                        <div className="flex items-center gap-2 text-red-600 text-sm">
                            <AlertCircle className="w-4 h-4" aria-hidden="true" />
                            <span className="font-light">{errorMsg}</span>
                        </div>
                    )}

                    <MagneticButton>
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-target"
                        >
                            <Send className="w-4 h-4" aria-hidden="true" />
                            {status === "submitting" ? "Sending..." : "Send Message"}
                        </button>
                    </MagneticButton>
                </motion.form>
            )}
        </AnimatePresence>
    );
}
