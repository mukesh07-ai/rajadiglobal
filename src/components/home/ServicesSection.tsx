"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer, sectionRevealProps } from "@/lib/animations";
import { AnimatedCard } from "../ui/animated-card";
import { Code2, Database, Network } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const services = [
    {
        title: "Custom Software Development",
        desc: "From monolithic legacy migrations to cloud-native microservices. We build the infrastructure that scales to millions of concurrent requests seamlessly.",
        icon: Code2
    },
    {
        title: "AI & Data Analytics",
        desc: "Deploy neural networks and predictive models over your data silos. Transform historical metrics into actionable foresight.",
        icon: Database
    },
    {
        title: "Industry Specific Platforms",
        desc: "Turnkey, domain-optimized platforms. We've mapped out the foundational logic for AgriTech, DairyTech, and PropTech.",
        icon: Network
    }
];

export function ServicesSection() {
    return (
        <section className="py-24 bg-slate-900 border-y border-white/5 relative z-10" id="services">
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
                        Our Expertise
                    </motion.div>
                    <motion.h2
                        variants={fadeUpVariant}
                        className="text-4xl md:text-5xl font-khand font-bold text-white mb-6"
                    >
                        Digital <span className="text-blue-500">Services</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUpVariant}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Architecting high-performance enterprise engines.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, i) => (
                        <AnimatedCard key={service.title} delay={i * 0.1} className="p-8 bg-slate-950 border border-white/5 group">
                            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 shadow-lg border border-white/10 group-hover:bg-blue-600 transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-khand font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                        </AnimatedCard>
                    ))}
                </div>

                <motion.div
                    {...sectionRevealProps}
                    variants={fadeUpVariant}
                    className="text-center"
                >
                    <Link href="/services">
                        <Button variant="outline" className="px-8 border-white/10 hover:bg-white hover:text-black transition-colors rounded-full font-bold uppercase tracking-wide">
                            View All Services
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
