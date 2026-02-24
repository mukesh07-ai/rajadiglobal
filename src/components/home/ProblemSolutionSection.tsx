"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer, sectionRevealProps } from "@/lib/animations";
import { ShieldAlert, Zap } from "lucide-react";

export function ProblemSolutionSection() {
    return (
        <section id="solutions" className="py-24 bg-slate-950 relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
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
                        Core Value Proposition
                    </motion.div>
                    <motion.h2
                        variants={fadeUpVariant}
                        className="text-4xl md:text-5xl font-khand font-bold text-white mb-4"
                    >
                        Solving <span className="text-blue-500">Enterprise Challenges</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUpVariant}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Transforming bottlenecks into scalable advantages.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    {...sectionRevealProps}
                    className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start"
                >
                    {/* Problem Side */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="p-10 md:p-14 rounded-3xl bg-red-950/20 border border-red-500/10 hover:border-red-500/30 hover:bg-red-950/30 transition-colors duration-500 relative group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500">
                            <ShieldAlert size={120} className="text-red-500" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-khand font-bold text-white mb-6">The Challenge</h3>
                            <ul className="space-y-4 text-slate-300 text-lg">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-4 shrink-0"></span>
                                    Fragmented supply chains causing massive agricultural waste.
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-4 shrink-0"></span>
                                    Manual, disconnected property transactions lacking liquidity and trust.
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-4 shrink-0"></span>
                                    Legacy enterprise software incapable of real-time AI scaling.
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Solution Side */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="p-10 md:p-14 rounded-3xl bg-teal-900/20 border border-teal-500/20 hover:border-teal-400/40 hover:bg-teal-900/40 transition-colors duration-500 relative group hover:-translate-y-2"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500">
                            <Zap size={120} className="text-teal-500" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-khand font-bold text-white mb-6">Our Solution</h3>
                            <ul className="space-y-4 text-slate-300 text-lg">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-4 shrink-0"></span>
                                    AI-driven predictive routing that eliminates procurement delays.
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-4 shrink-0"></span>
                                    Cryptographically secure, digitized property valuation platforms.
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-4 shrink-0"></span>
                                    Cloud-native microservices designed for elastic enterprise scale.
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
