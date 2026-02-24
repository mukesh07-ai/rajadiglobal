"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer, sectionRevealProps } from "@/lib/animations";

export function CtaSection() {
    return (
        <section id="cta" className="py-24 relative overflow-hidden bg-slate-900">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-teal-900/40 opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-gradient-to-r from-blue-600/30 to-teal-500/30 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
            </div>

            <motion.div
                variants={staggerContainer}
                {...sectionRevealProps}
                className="container mx-auto px-4 max-w-7xl relative z-10 text-center"
            >
                <motion.div
                    variants={fadeUpVariant}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Get Started
                </motion.div>
                <motion.h2
                    variants={fadeUpVariant}
                    className="text-4xl md:text-5xl font-khand font-bold text-white mb-4"
                >
                    Let’s Build the <span className="text-blue-500">Future</span> Together
                </motion.h2>
                <motion.p
                    variants={fadeUpVariant}
                    className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    Ready to scale your enterprise with AI-driven analytics, customized digital ecosystems, and next-generation architecture?
                </motion.p>
                <motion.div variants={fadeUpVariant}>
                    <Link href="/contact">
                        <Button variant="gradient" size="lg" className="w-full sm:w-auto h-14 px-10 rounded-full shadow-xl shadow-blue-500/20 group text-lg">
                            Book a Consultation
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
