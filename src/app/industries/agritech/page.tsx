"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Leaf, Map, CloudSun, Sprout } from "lucide-react";
import { CtaSection } from "@/components/home/CtaSection";

export default function AgriTechPage() {
    return (
        <>
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.1)_0%,_transparent_60%))] pointer-events-none"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-400 font-medium text-sm mb-8"
                    >
                        Rajadi Global Platform
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bebas-neue tracking-wide text-white mb-6 uppercase"
                    >
                        <span className="text-gradient">AgriTech</span> Innovation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed"
                    >
                        Precision farming driven by satellite imagery, soil sensors, and predictive AI. We connect rural crop producers to international markets through transparent, digitized supply chains.
                    </motion.p>
                </div>
            </section>

            {/* Solutions & Features */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-khand font-bold text-white mb-4">Core <span className="text-teal-500">Solutions</span></h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Advanced technological pipelines for a sustainable agricultural future.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Satellite Mapping", desc: "Multispectral analysis for crop health and biomass estimation across vast acreages.", icon: Map },
                            { title: "Climate Prediction", desc: "Hyper-local weather forecasting integrated directly into harvesting schedules.", icon: CloudSun },
                            { title: "Soil IoT Sensors", desc: "Monitor moisture and NPK levels to drastically reduce water and chemical fertilizer waste.", icon: Sprout },
                            { title: "Market Connectivity", desc: "Digital marketplaces cutting out middlemen, increasing direct profits for farmers.", icon: Leaf },
                        ].map((sol, i) => (
                            <AnimatedCard key={i} delay={i * 0.1} className="p-8 bg-slate-900 border border-white/5 group">
                                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
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
