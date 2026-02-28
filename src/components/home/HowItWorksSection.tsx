"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer, sectionRevealProps } from "@/lib/animations";
import { Lightbulb, Code2, Rocket, LineChart } from "lucide-react";

const steps = [
    {
        title: "Discovery",
        desc: "Analyze bottlenecks and architect an AI-driven roadmap.",
        icon: Lightbulb,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        title: "Architecture",
        desc: "Design secure, cloud-native microservices tailored to your needs.",
        icon: Code2,
        color: "text-teal-400",
        bg: "bg-teal-500/10",
        border: "border-teal-500/20"
    },
    {
        title: "Development",
        desc: "Rapid deployment cycles utilizing cutting-edge frameworks.",
        icon: Rocket,
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20"
    },
    {
        title: "Scale",
        desc: "Continuous integration and monitoring for peak performance.",
        icon: LineChart,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    }
];

export function HowItWorksSection() {
    return (
        <section id="process" className="py-24 bg-slate-900 border-y border-white/5 relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    variants={staggerContainer}
                    {...sectionRevealProps}
                    className="text-center mb-16 md:mb-24"
                >
                    <motion.div
                        variants={fadeUpVariant}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Our Process
                    </motion.div>

                    <motion.h2
                        variants={fadeUpVariant}
                        className="text-4xl md:text-5xl font-khand font-bold text-white mb-4"
                    >
                        How It <span className="text-blue-500">Works</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUpVariant}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        A transparent, engineering-first approach to complex challenges.
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500/0 via-slate-700 to-teal-500/0 z-0"></div>

                    <motion.div
                        variants={staggerContainer}
                        {...sectionRevealProps}
                        className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10"
                    >
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                variants={fadeUpVariant}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Step Number Indicator */}
                                <div className="absolute -top-4 -right-2 text-[100px] font-bebas-neue text-white/[0.03] select-none font-bold leading-none pointer-events-none group-hover:text-white/[0.06] transition-colors duration-500">
                                    0{i + 1}
                                </div>

                                {/* Icon Circle */}
                                <div className={`relative flex items-center justify-center w-24 h-24 rounded-full border ${step.bg} ${step.border} mb-8 shadow-xl backdrop-blur-md group-hover:scale-110 transition-transform duration-500`}>
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <step.icon className={`w-10 h-10 ${step.color} relative z-10`} />

                                    {/* Pulse effect rings */}
                                    <div className="absolute inset-0 rounded-full border border-white/10 scale-[1.15] opacity-50 group-hover:scale-[1.3] group-hover:opacity-0 transition-all duration-700"></div>
                                </div>

                                <h3 className="text-2xl font-khand font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
