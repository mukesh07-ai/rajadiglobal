"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CheckCircle2, ShieldCheck, TrendingUp, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CtaSection } from "@/components/home/CtaSection";

export default function DairyTechPage() {
    return (
        <>
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-slate-950 to-blue-900/10 mix-blend-screen pointer-events-none"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 font-medium text-sm mb-8"
                    >
                        Rajadi Global Platform
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bebas-neue tracking-wide text-white mb-6 uppercase"
                    >
                        <span className="text-gradient">DairyTech</span> Ecosystem
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed"
                    >
                        Digitizing the raw milk supply chain from farm gate to factory floor. We build predictive modeling, real-time quality tracking, and IoT integrations that eliminate waste and drive unprecedented operational resilience.
                    </motion.p>
                </div>
            </section>

            {/* Solutions & Features */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-khand font-bold text-white mb-4">Core <span className="text-blue-500">Solutions</span></h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">AI-powered modules built to tackle the hardest problems in dairy procurement and processing.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "IoT Quality Tracking", desc: "Real-time temperature and freshness sensors connected directly to transport vehicles.", icon: Cpu },
                            { title: "Predictive Yields", desc: "Machine learning algorithms forecasting localized milk production based on climate and historical data.", icon: TrendingUp },
                            { title: "Fair Pricing Engine", desc: "Automated, transparent grading and pricing mechanisms delivered instantly via edge devices.", icon: ShieldCheck },
                            { title: "Automated Routing", desc: "Dynamic logistical optimization to reduce transit times and ensure cold-chain integrity.", icon: CheckCircle2 },
                        ].map((sol, i) => (
                            <AnimatedCard key={i} delay={i * 0.1} className="p-8 bg-slate-900 border border-white/5 group">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <sol.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-khand font-bold text-white mb-3">{sol.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{sol.desc}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Overview */}
            <section className="py-24 bg-slate-900 border-y border-white/5 relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="glass p-10 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <h2 className="text-3xl md:text-4xl font-khand font-bold text-white mb-10 text-center">Metrics That Matter</h2>

                        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                            <div className="py-4">
                                <div className="text-5xl font-bebas-neue tracking-wide text-teal-400 mb-2">30%</div>
                                <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Spoilage Reduction</div>
                            </div>
                            <div className="py-4">
                                <div className="text-5xl font-bebas-neue tracking-wide text-blue-400 mb-2">&lt; 15m</div>
                                <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Grading Response</div>
                            </div>
                            <div className="py-4">
                                <div className="text-5xl font-bebas-neue tracking-wide text-indigo-400 mb-2">10k+</div>
                                <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Farmers Connected</div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link href="/projects/dairy-quality-tracking">
                                <Button variant="outline" className="border-white/10 hover:bg-white hover:text-black transition-colors rounded-full">
                                    Read Case Study
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
