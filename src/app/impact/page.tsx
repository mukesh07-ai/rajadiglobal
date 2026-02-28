"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CtaSection } from "@/components/home/CtaSection";
import { Heart, Users2, Leaf, Globe2 } from "lucide-react";

const initiatives = [
    {
        title: "Rural Employment Generation",
        description: "By digitizing supply chains in AgriTech and DairyTech, we create new tech-enabled roles in rural areas, bridging the urban-rural economic divide.",
        icon: Users2,
        color: "from-blue-600 to-indigo-500",
    },
    {
        title: "Women Empowerment",
        description: "Our platforms facilitate direct market access for female agricultural producers, ensuring fair compensation and financial independence.",
        icon: Heart,
        color: "from-fuchsia-600 to-pink-500",
    },
    {
        title: "Sustainable Agriculture",
        description: "AI-driven yield predictions and IoT soil monitoring drastically reduce water usage and chemical waste in farming ecosystems.",
        icon: Leaf,
        color: "from-emerald-500 to-teal-400",
    },
    {
        title: "Inclusive Digital Access",
        description: "Designing low-bandwidth, mobile-first interfaces ensuring that technology reaches the most remote stakeholders without friction.",
        icon: Globe2,
        color: "from-cyan-500 to-blue-400",
    }
];

export default function ImpactPage() {
    return (
        <>
            <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950">
                {/* Cinematic gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-950 to-slate-950"></div>
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-teal-900/10 to-transparent mix-blend-screen opacity-60 pointer-events-none"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bebas-neue tracking-wide text-white mb-6 uppercase"
                    >
                        Technology For <span className="text-gradient">Good</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto font-light text-balance leading-relaxed"
                    >
                        At Rajadi Global, we believe true innovation isn’t just measured in scalability and revenue—it’s measured in the lives we uplift and the communities we empower through digital equity.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {initiatives.map((init, i) => (
                            <AnimatedCard key={i} delay={i * 0.15} className="group overflow-hidden rounded-3xl bg-slate-900/80 border border-white/5 relative">
                                {/* Visual Image Mockup Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${init.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                <div className="p-10 md:p-14 relative z-10 h-full flex flex-col justify-center">
                                    <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${init.color} shadow-lg`}>
                                        <init.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-khand font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{init.title}</h3>
                                    <p className="text-slate-300 text-lg leading-relaxed">{init.description}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-950 border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-khand font-bold text-white mb-8">
                        A Commitment to <span className="text-teal-400">ESG</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
                        Environmental, Social, and Governance (ESG) principles are baked into the core architecture of everything we build. We don&apos;t just write code; we architect better futures for the next generation of global citizens.
                    </p>
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-teal-500/30 bg-teal-500/10">
                        <Leaf className="w-10 h-10 text-teal-400" />
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
