"use client";

import { motion, useInView, animate } from "framer-motion";
import { fadeUpVariant, staggerContainer, sectionRevealProps } from "@/lib/animations";
import { useEffect, useRef } from "react";
import { Building2, Globe2, Activity, Headset } from "lucide-react";

interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
    delay?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

function Counter({ from = 0, to, duration = 2, delay = 0, suffix = "", prefix = "", decimals = 0 }: CounterProps) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView && nodeRef.current) {
            const controls = animate(from, to, {
                duration,
                delay,
                ease: "easeOut",
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = prefix + value.toFixed(decimals) + suffix;
                    }
                }
            });
            return () => controls.stop();
        }
    }, [inView, from, to, duration, delay, suffix, prefix, decimals]);

    return <span ref={nodeRef}>{prefix}{from.toFixed(decimals)}{suffix}</span>;
}

const metrics = [
    {
        icon: Building2,
        end: 150,
        suffix: "+",
        label: "Enterprise Projects",
        desc: "Delivered at scale globally",
        colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/20",
        glowClass: "bg-blue-500/20"
    },
    {
        icon: Globe2,
        end: 15,
        suffix: "+",
        label: "Industry Leaders",
        desc: "Trust our core infrastructure",
        colorClass: "text-teal-400 bg-teal-500/10 border-teal-500/20",
        glowClass: "bg-teal-500/20"
    },
    {
        icon: Activity,
        end: 99.9,
        decimals: 1,
        suffix: "%",
        label: "SLA Uptime",
        desc: "Mission-critical reliability",
        colorClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
        glowClass: "bg-indigo-500/20"
    },
    {
        icon: Headset,
        end: 24,
        suffix: "/7",
        label: "Global Support",
        desc: "Always-on engineering team",
        colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        glowClass: "bg-emerald-500/20"
    }
];

export function MetricsSection() {
    return (
        <section id="metrics" className="py-24 relative z-10 overflow-hidden bg-slate-950 border-t border-white/5">
            {/* Background effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

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
                        Scale & Reliability
                    </motion.div>

                    <motion.h2
                        variants={fadeUpVariant}
                        className="text-4xl md:text-5xl font-khand font-bold text-white mb-4"
                    >
                        Numbers That <span className="text-blue-500">Speak Volumes</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUpVariant}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Proven scalability across enterprise ecosystems.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    {...sectionRevealProps}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {metrics.map((m, i) => {
                        const Icon = m.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={fadeUpVariant}
                                className="relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 group overflow-hidden"
                            >
                                {/* Glow effect on hover */}
                                <div className={`absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 ${m.glowClass} rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-8 group-hover:scale-110 transition-transform duration-500 border ${m.colorClass}`}>
                                    <Icon className="w-6 h-6" />
                                </div>

                                <div className="text-5xl md:text-6xl font-bebas-neue tracking-wide text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                                    <Counter to={m.end} decimals={m.decimals} suffix={m.suffix} delay={i * 0.1 + 0.2} duration={2.5} />
                                </div>

                                <div className="text-lg text-slate-200 font-semibold tracking-wide mb-2 flex items-center gap-2">
                                    {m.label}
                                </div>
                                <div className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                                    {m.desc}
                                </div>

                                {/* Subtle inner outline */}
                                <div className="absolute inset-[1px] rounded-2xl border border-white/5 pointer-events-none"></div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
