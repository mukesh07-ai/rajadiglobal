"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer, sectionRevealProps } from "@/lib/animations";
import { ShieldCheck, Cpu, Globe2, Fingerprint, Zap, Layers } from "lucide-react";
import { AnimatedCard } from "../ui/animated-card";

const points = [
    {
        title: "Enterprise Security",
        desc: "Military-grade encryption securing your infrastructure.",
        icon: ShieldCheck,
        color: "blue"
    },
    {
        title: "AI-First Architecture",
        desc: "Core machine learning logic optimizing processes.",
        icon: Cpu,
        color: "teal"
    },
    {
        title: "Global Scalability",
        desc: "Cloud-agnostic deployment for high availability.",
        icon: Globe2,
        color: "indigo"
    },
    {
        title: "Custom Integrations",
        desc: "Tailored APIs and logic flows for your stack.",
        icon: Fingerprint,
        color: "purple"
    },
    {
        title: "High Performance",
        desc: "Fast execution driven by optimal caching and CDNs.",
        icon: Zap,
        color: "emerald"
    },
    {
        title: "Modular Deployment",
        desc: "Risk-free iterations via compartmentalized scaling.",
        icon: Layers,
        color: "rose"
    }
];

export function UniqueValueSection() {
    return (
        <section id="values" className="py-24 bg-slate-950 relative z-10 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
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
                        Key Differentiators
                    </motion.div>

                    <motion.h2
                        variants={fadeUpVariant}
                        className="text-4xl md:text-5xl font-khand font-bold text-white mb-4"
                    >
                        What Makes Us <span className="text-blue-500">Unique?</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUpVariant}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        We engineer advantages into the DNA of your platforms.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {points.map((point, i) => {
                        const Icon = point.icon;
                        return (
                            <AnimatedCard
                                key={point.title}
                                delay={i * 0.1}
                                className="p-8 bg-slate-900 border border-white/5 hover:border-white/10 group transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-${point.color}-500/10 border border-${point.color}-500/20 flex items-center justify-center mb-6 text-${point.color}-400 group-hover:scale-110 group-hover:bg-${point.color}-500 group-hover:text-white transition-all duration-300`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-khand font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors duration-300">
                                    {point.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base group-hover:text-slate-300 transition-colors duration-300">
                                    {point.desc}
                                </p>
                            </AnimatedCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
