"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CtaSection } from "@/components/home/CtaSection";

export const projects = [
    {
        slug: "global-agri-supply-chain",
        title: "Global Supply Chain Automation",
        client: "Global Agri Holdings",
        industry: "AgriTech",
        imageGradient: "from-emerald-600/40 to-teal-900/80",
        metrics: [
            { label: "Efficiency", value: "+40%" },
            { label: "Processing Time", value: "-12 days" },
        ],
        summary: "Reengineered the procurement and supply chain systems using AI to optimize routing and predict international demand."
    },
    {
        slug: "dairy-quality-tracking",
        title: "End-to-End Quality Tracking",
        client: "DairyTech International",
        industry: "DairyTech",
        imageGradient: "from-blue-600/40 to-indigo-900/80",
        metrics: [
            { label: "Waste Reduction", value: "30%" },
            { label: "Traceability", value: "100%" },
        ],
        summary: "Implemented IoT sensors with a centralized cloud backend to ensure real-time temperature tracking for raw milk transportation."
    },
    {
        slug: "smart-property-valuation",
        title: "AI Property Valuation API",
        client: "Horizon Property Group",
        industry: "PropTech",
        imageGradient: "from-cyan-600/40 to-blue-900/80",
        metrics: [
            { label: "Accuracy", value: "98.5%" },
            { label: "Response", value: "< 200ms" },
        ],
        summary: "Built a machine learning model integrated via API to deliver instant, accurate property valuations based on thousands of variables."
    },
    {
        slug: "fintech-payment-gateway",
        title: "Custom B2B Payment Gateway",
        client: "FinServe Corp",
        industry: "Finance",
        imageGradient: "from-violet-600/40 to-fuchsia-900/80",
        metrics: [
            { label: "Tx Volume", value: "$2B+" },
            { label: "Uptime", value: "99.99%" },
        ],
        summary: "Architected a secure, compliant payment processing engine capable of handling high-frequency B2B transactions globally."
    }
];

export default function ProjectsPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bebas-neue tracking-wide text-white mb-6"
                    >
                        Case <span className="text-gradient">Studies</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto"
                    >
                        Explore how we’ve helped enterprise clients across the globe transform their operations with scalable AI software solutions.
                    </motion.p>
                </div>
            </section>

            <section className="py-12 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header Controls (Mockup) */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
                        <div className="flex gap-2">
                            <button className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">All Projects</button>
                            <button className="px-5 py-2 rounded-full glass border-white/5 text-slate-300 hover:text-white text-sm font-medium transition-colors">AgriTech</button>
                            <button className="px-5 py-2 rounded-full glass border-white/5 text-slate-300 hover:text-white text-sm font-medium transition-colors">DairyTech</button>
                            <button className="px-5 py-2 rounded-full glass border-white/5 text-slate-300 hover:text-white text-sm font-medium transition-colors hover:bg-white/5 hidden md:block">PropTech</button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, i) => (
                            <AnimatedCard key={i} delay={i * 0.1} className="group overflow-hidden rounded-2xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-colors flex flex-col h-full">
                                {/* Image Placeholder */}
                                <div className={`h-64 relative bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-end overflow-hidden`}>
                                    {/* Overlay aesthetic lines */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]"></div>
                                    <div className="relative z-10 flex justify-between items-end">
                                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                                            {project.industry}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative">
                                    <div className="text-sm font-space-grotesk text-teal-400 font-semibold mb-2">{project.client}</div>
                                    <h3 className="text-2xl font-khand font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <p className="text-slate-400 mb-8 flex-grow">{project.summary}</p>

                                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 mb-8">
                                        {project.metrics.map((metric, idx) => (
                                            <div key={idx}>
                                                <div className="text-2xl font-bebas-neue text-white tracking-wider">{metric.value}</div>
                                                <div className="text-xs text-slate-500 uppercase tracking-widest font-space-grotesk">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                                        Read Full Case Study
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
