"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeUpVariant, staggerContainer, sectionRevealProps } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What makes Rajadi Global different from other agencies?",
        answer: "We architect custom solutions with deep domain expertise, military-grade security, and AI logic."
    },
    {
        question: "How long does a typical enterprise deployment take?",
        answer: "MVPs are typically delivered within 8-12 weeks, followed by continuous agile iterations."
    },
    {
        question: "Do you provide post-deployment support?",
        answer: "Yes. We offer 24/7 proactive monitoring and dedicated support for 99.9% uptime."
    },
    {
        question: "Is your custom software scalable for global operations?",
        answer: "Yes. Our cloud-agnostic, microservices architecture ensures global scalability and high availability."
    },
    {
        question: "Can you integrate your solutions with our legacy systems?",
        answer: "Yes. We build robust middleware to securely bridge your legacy infrastructure with modern cloud applications."
    }
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-slate-900 border-y border-white/5 relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    variants={staggerContainer}
                    {...sectionRevealProps}
                    className="text-center mb-16"
                >
                    <motion.div
                        variants={fadeUpVariant}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Knowledge Base
                    </motion.div>

                    <motion.h2
                        variants={fadeUpVariant}
                        className="text-4xl md:text-5xl font-khand font-bold text-white mb-4"
                    >
                        Frequently Asked <span className="text-blue-500">Questions</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUpVariant}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Clear answers to common queries regarding our capabilities.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    {...sectionRevealProps}
                    className="space-y-4"
                >
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUpVariant}
                            className="bg-slate-950 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
                        >
                            <button
                                onClick={() => toggleFaq(i)}
                                className="w-full text-left px-6 py-5 md:p-8 flex items-center justify-between gap-6 focus:outline-none group"
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-slate-200 group-hover:text-white transition-colors">
                                    {faq.question}
                                </h3>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${openIndex === i ? 'bg-blue-500 border-blue-500 text-white rotate-180' : 'bg-white/5 border-white/10 text-slate-400 group-hover:bg-white/10'}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8 text-slate-400 leading-relaxed font-light border-t border-white/5 mt-2">
                                            <div className="pt-4">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
