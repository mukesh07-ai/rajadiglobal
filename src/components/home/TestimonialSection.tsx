"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariant, staggerContainer, sectionRevealProps } from "@/lib/animations";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "An AI pipeline that completely eradicated spoilage and altered our profit margins.",
        initials: "DK",
        name: "David K.",
        role: "CTO, DairyTech International",
        color: "blue"
    },
    {
        quote: "The satellite mapping integration was revolutionary. Analytics are seamless and actionable.",
        initials: "SR",
        name: "Sarah R.",
        role: "VP of Data, AgriHoldings",
        color: "teal"
    },
    {
        quote: "Blockchain supply chain ledger provided 100% transparency. Unmatched engineering rigor.",
        initials: "MT",
        name: "Michael T.",
        role: "Supply Chain Director, FreshFoods Co.",
        color: "indigo"
    },
    {
        quote: "Predictive weather models saved our yields during drought. True visionaries.",
        initials: "EV",
        name: "Elena V.",
        role: "Lead Agronomist, EcoFarms",
        color: "emerald"
    },
    {
        quote: "Valuation algorithms outperformed legacy systems by 40%. Outstanding work.",
        initials: "JH",
        name: "James H.",
        role: "Managing Partner, Apex Real Estate",
        color: "purple"
    },
    {
        quote: "Transformed resource planning with custom cloud software. Absolutely top tier.",
        initials: "AW",
        name: "Alisha W.",
        role: "COO, Nexus Enterprises",
        color: "rose"
    }
];

export function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24 bg-slate-950 border-t border-white/5 relative z-10 overflow-hidden">
            {/* Background embellishments */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen -z-10"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Context & Navigation */}
                    <motion.div
                        variants={staggerContainer}
                        {...sectionRevealProps}
                        className="flex flex-col items-start text-left relative z-20"
                    >
                        <motion.div
                            variants={fadeUpVariant}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Trusted Worldwide
                        </motion.div>

                        <motion.div variants={fadeUpVariant}>
                            <Quote className="w-16 h-16 text-blue-500/20 mb-8" />
                        </motion.div>

                        <motion.h2
                            variants={fadeUpVariant}
                            className="text-4xl md:text-5xl lg:text-6xl font-khand font-bold text-white mb-6"
                        >
                            Client <span className="text-blue-500">Success</span> Stories
                        </motion.h2>

                        <motion.p
                            variants={fadeUpVariant}
                            className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed"
                        >
                            Hear from leaders who trust our enterprise solutions.
                        </motion.p>

                        {/* Custom Navigation */}
                        <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mt-12">
                            <button
                                onClick={handlePrev}
                                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all text-white backdrop-blur-sm group"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all text-white backdrop-blur-sm group"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: 3D Stack Slider */}
                    <div className="relative h-[450px] md:h-[500px] flex justify-center perspective-[1200px] mt-10 lg:mt-0 z-10">
                        <AnimatePresence mode="popLayout">
                            {testimonials.map((t, index) => {
                                let offset = -1;
                                if (index === currentIndex) offset = 0;
                                else if (index === (currentIndex + 1) % testimonials.length) offset = 1;
                                else if (index === (currentIndex + 2) % testimonials.length) offset = 2;

                                if (offset === -1) return null;

                                return (
                                    <motion.div
                                        key={t.name}
                                        layout
                                        initial={{
                                            opacity: 0,
                                            y: 80,
                                            scale: 0.8,
                                        }}
                                        animate={{
                                            opacity: 1 - (offset * 0.4),
                                            y: offset * 35,
                                            scale: 1 - (offset * 0.08),
                                            zIndex: 30 - offset,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -80,
                                            scale: 1.05,
                                            filter: "blur(10px)",
                                            transition: { duration: 0.4 }
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 25,
                                            mass: 1
                                        }}
                                        className="absolute top-4 lg:top-10 w-full max-w-lg rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl p-8 md:p-10 shadow-2xl"
                                        style={{ transformOrigin: "top center" }}
                                    >
                                        <div className="flex gap-1 mb-8">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <Star key={star} className={`w-5 h-5 fill-${t.color}-500/50 text-${t.color}-500/50`} />
                                            ))}
                                        </div>

                                        <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-10 font-light min-h-[140px]">
                                            "{t.quote}"
                                        </p>

                                        <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                                            <div className={`relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border border-${t.color}-500/30 overflow-hidden shrink-0`}>
                                                <div className={`absolute inset-0 bg-gradient-to-br from-${t.color}-500/20 to-transparent`}></div>
                                                <span className={`relative z-10 font-bold text-${t.color}-300 text-sm tracking-wider`}>
                                                    {t.initials}
                                                </span>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="font-semibold text-slate-100 text-base">{t.name}</div>
                                                <div className="text-sm text-slate-500">{t.role}</div>
                                            </div>
                                        </div>

                                        {/* Subtle inner glowing line */}
                                        <div className="absolute inset-[1px] rounded-3xl border border-white/5 pointer-events-none"></div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
