"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const typingWords = [
    "AI Full-Stack Development",
    "DairyTech Innovation",
    "AgriTech Platforms",
    "PropTech Solutions"
];

export function HeroSection() {
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % typingWords.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 lg:pt-32 pb-12 overflow-hidden bg-slate-950 -mt-20">
            {/* Extremely funky and premium fluid background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 -left-1/4 w-[700px] h-[700px] bg-fuchsia-600/30 rounded-full blur-[140px] mix-blend-screen pointer-events-none"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-cyan-600/20 rounded-full blur-[160px] mix-blend-screen pointer-events-none"
                />
                <motion.div
                    animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
                />
                {/* Dotted mesh overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_80%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center w-full mt-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Premium Glowing Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] mb-8 overflow-hidden relative group cursor-default"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                        <Sparkles className="w-4 h-4 text-fuchsia-400 animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-[0.2em] uppercase relative z-10">Next-Gen Enterprise Tech</span>
                    </motion.div>

                    {/* Headline with Animated Gradient text */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bebas-neue tracking-wider text-white mb-6 uppercase leading-[1.05]"
                    >
                        Empowering Businesses with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-indigo-400 bg-[length:200%_auto] animate-gradient">
                            Scalable Solutions
                        </span>
                    </motion.h1>

                    <div className="h-10 md:h-12 flex justify-center items-center mb-8 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentWord}
                                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="text-xl md:text-3xl font-khand font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400"
                            >
                                {typingWords[currentWord]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed text-balance"
                    >
                        We build the intelligent, enterprise-grade foundations for the world&apos;s most critical supply chains and platforms.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
                    >
                        {/* High-impact primary CTA */}
                        <Link href="/contact" className="w-full sm:w-auto block">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="w-full h-14 px-8 text-base md:text-lg font-bold tracking-widest uppercase transition-all duration-300 bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 border-none shadow-[0_0_30px_rgba(192,38,211,0.3)] hover:shadow-[0_0_50px_rgba(192,38,211,0.6)] text-white relative overflow-hidden group rounded-xl">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Talk to Us
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                                </Button>
                            </motion.div>
                        </Link>

                        {/* Premium Glassmorphism secondary CTA */}
                        <Link href="/services" className="w-full sm:w-auto block">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" size="lg" className="w-full h-14 px-8 text-base md:text-lg font-bold tracking-widest uppercase transition-all duration-300 bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-md rounded-xl group text-white">
                                    Explore Solutions
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx global>{`
                @keyframes gradient-move {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    animation: gradient-move 6s ease infinite;
                }
            `}</style>
        </section>
    );
}
