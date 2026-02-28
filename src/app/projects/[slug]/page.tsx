"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CtaSection } from "@/components/home/CtaSection";
import { fadeUpVariant, staggerContainer, sectionRevealProps } from "@/lib/animations";
// Using React to avoid unwrapping params directly which might cause Next.js 15 warnings
import React from 'react';

// Simplified for simulation. Ideally, fetch from CMS.
const projectData = {
    title: "Global Supply Chain Automation",
    client: "Global Agri Holdings",
    industry: "AgriTech",
    challenge: "Global Agri Holdings faced extreme delays and waste due to disconnected legacy systems, manual tracking, and lack of real-time visibility across international borders.",
    solution: "We engineered a centralized, AI-driven supply chain management platform capable of processing thousands of data points per second. Using predictive models, we automated routing and inventory forecasting.",
    approach: ["Architecture Design", "Machine Learning Integration", "IoT Sensor Connections", "Global Rollout"],
    results: [
        { label: "Efficiency Increase", value: "40%" },
        { label: "Processing Time Saved", value: "12 Days" },
        { label: "Waste Reduction", value: "22%" }
    ]
};

export default function ProjectDetail() {
    return (
        <>
            <section className="pt-32 pb-16 relative">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="container mx-auto px-4 max-w-4xl relative z-10"
                >
                    <motion.div variants={fadeUpVariant}>
                        <Link href="/projects" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors mb-12">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects
                        </Link>
                    </motion.div>

                    <motion.div variants={fadeUpVariant} className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                            {projectData.industry}
                        </span>
                        <span className="text-slate-500 text-sm font-space-grotesk">{projectData.client}</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUpVariant}
                        className="text-4xl md:text-6xl font-khand font-bold text-white leading-tight mb-12"
                    >
                        {projectData.title}
                    </motion.h1>

                    {/* Hero Image Mockup */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="w-full aspect-video rounded-3xl bg-gradient-to-br from-slate-800 to-emerald-900/40 border border-white/5 mb-20 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-16">
                        <motion.div
                            variants={fadeUpVariant}
                            className="md:col-span-2 space-y-16"
                        >
                            <div>
                                <h3 className="text-2xl font-khand font-bold text-white mb-6">The Challenge</h3>
                                <p className="text-slate-300 text-lg leading-relaxed">{projectData.challenge}</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-khand font-bold text-white mb-6">The Solution</h3>
                                <p className="text-slate-300 text-lg leading-relaxed">{projectData.solution}</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-khand font-bold text-white mb-6">Our Approach</h3>
                                <ul className="space-y-4">
                                    {projectData.approach.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 bg-slate-800/30 p-4 rounded-xl border border-white/5">
                                            <CheckCircle2 className="text-teal-400 w-5 h-5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUpVariant} className="md:col-span-1">
                            <div className="sticky top-32 glass border-white/10 rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
                                <h4 className="font-khand font-bold text-lg text-white mb-6">Key Results</h4>
                                <div className="space-y-6">
                                    {projectData.results.map((res, i) => (
                                        <div key={i} className="border-b border-white/5 pb-6 last:border-0 last:pb-0 group">
                                            <div className="text-4xl font-bebas-neue text-teal-400 tracking-wider mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">{res.value}</div>
                                            <div className="text-sm text-slate-400 uppercase tracking-widest font-space-grotesk">{res.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <CtaSection />
        </>
    );
}
