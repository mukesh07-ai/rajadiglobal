"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Building2, Link2, Home, BarChart3 } from "lucide-react";
import { CtaSection } from "@/components/home/CtaSection";

export default function PropTechPage() {
    return (
        <>
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,164,0.1)_0%,_transparent_60%))] pointer-events-none"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 font-medium text-sm mb-8"
                    >
                        Rajadi Global Platform
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bebas-neue tracking-wide text-white mb-6 uppercase"
                    >
                        <span className="text-gradient">PropTech</span> Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed"
                    >
                        Accelerating real estate through AI-powered valuations, blockchain-verified property registries, and immersive virtual engagement.
                    </motion.p>
                </div>
            </section>

            {/* Solutions & Features */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-khand font-bold text-white mb-4">Core <span className="text-cyan-500">Solutions</span></h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Transforming physical assets into highly liquid digital ecosystems.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Smart Valuations", desc: "Machine learning algorithms that analyze thousands of data points to predict asset value within sub-second times.", icon: BarChart3 },
                            { title: "Digital Registries", desc: "Blockchain-backed immutable property records ensuring absolute fraud prevention.", icon: Link2 },
                            { title: "Property Management", desc: "Automated tenant, maintenance, and lease management SaaS tools for large aggregators.", icon: Building2 },
                            { title: "Virtual Portfolios", desc: "3D visualization and remote walkthrough infrastructure for global buyers.", icon: Home },
                        ].map((sol, i) => (
                            <AnimatedCard key={i} delay={i * 0.1} className="p-8 bg-slate-900 border border-white/5 group">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                    <sol.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-khand font-bold text-white mb-3">{sol.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{sol.desc}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
