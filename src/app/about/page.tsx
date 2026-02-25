"use client";

import { motion } from "framer-motion";
import { CtaSection } from "@/components/home/CtaSection";
import { CheckCircle2, Target, Eye, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.1)_0%,_transparent_50%))]"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bebas-neue tracking-wide text-white mb-6 uppercase"
                    >
                        Engineering <span className="text-gradient">Tomorrow</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed"
                    >
                        Rajadi Global is a collective of visionary engineers, data scientists, and industry domain experts building the intelligent, scalable foundations for the world&apos;s most critical supply chains and platforms.
                    </motion.p>
                </div>
            </section>

            {/* Vision & Mission Split */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 md:p-14 rounded-3xl bg-blue-900/10 border border-blue-500/20 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Eye size={120} className="text-blue-500" />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-4xl font-khand font-bold text-white mb-6">Our Vision</h2>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    To be the global architectural standard for enterprise software, where intelligent systems seamlessly connect rural farm gates to international commodities markets, and complex property transactions execute with cryptographic certainty.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 md:p-14 rounded-3xl bg-teal-900/10 border border-teal-500/20 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target size={120} className="text-teal-500" />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-4xl font-khand font-bold text-white mb-6">Our Mission</h2>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    To democratize access to enterprise-grade AI algorithms by engineering highly modular, mobile-first SaaS platforms that optimize operations, reduce latency, and enforce transparency across every layer of our clients&apos; businesses.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-900 border-y border-white/5 relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bebas-neue tracking-wide text-white mb-4">Core <span className="text-blue-500">Principles</span></h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">The engineering philosophy that dictates every line of code we write.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Zero-Trust Security", desc: "Security is not an afterthought. Every microservice is authenticated, every data packet encrypted.", icon: ShieldCheck },
                            { title: "Scalable by Default", desc: "We design cloud-native architectures capable of handling 100x traffic surges without manual intervention.", icon: CheckCircle2 },
                            { title: "Radical Transparency", desc: "No black-box algorithms. Our models are explainable, and our communication with clients is absolute.", icon: Eye }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 glass rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors"
                            >
                                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                                    <value.icon className="text-blue-400 w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-khand font-bold text-white mb-4">{value.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
