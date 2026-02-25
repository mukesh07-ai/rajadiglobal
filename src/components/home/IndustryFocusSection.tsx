"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer, sectionRevealProps } from "@/lib/animations";
import { AnimatedCard } from "../ui/animated-card";
import { LineChart, Tractor, Building2 } from "lucide-react";

const industries = [
    {
        title: "DairyTech",
        icon: LineChart,
        desc: "Digitalizing procurement, quality tracking, and supply chain logistics for the dairy industry.",
        color: "from-blue-600/20 to-indigo-600/5",
        iconColor: "text-blue-400"
    },
    {
        title: "AgriTech",
        icon: Tractor,
        desc: "Empowering farmers with AI-driven analytics, market connectivity, and precision farming tools.",
        color: "from-teal-600/20 to-emerald-600/5",
        iconColor: "text-teal-400"
    },
    {
        title: "PropTech",
        icon: Building2,
        desc: "Revolutionizing real estate with automated valuations, scalable platforms, and secure transactions.",
        color: "from-cyan-600/20 to-blue-600/5",
        iconColor: "text-cyan-400"
    }
];

export function IndustryFocusSection() {
    return (
        <section id="industries" className="py-24 bg-slate-900 border-y border-white/5 relative z-10">
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
                        Key Sectors
                    </motion.div>
                    <motion.h2
                        variants={fadeUpVariant}
                        className="text-4xl md:text-5xl font-khand font-bold text-white mb-6"
                    >
                        Industry <span className="text-blue-500">Focus</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUpVariant}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Delivering domain-specific intelligence across massive ecosystem domains.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {industries.map((industry, i) => (
                        <AnimatedCard key={industry.title} delay={i * 0.1} className={`p-8 bg-gradient-to-br ${industry.color} border border-white/5 group`}>
                            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                                <industry.icon className={`w-7 h-7 ${industry.iconColor}`} />
                            </div>
                            <h3 className="text-2xl font-khand font-bold text-white mb-4">{industry.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{industry.desc}</p>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
