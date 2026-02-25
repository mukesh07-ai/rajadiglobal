"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { CtaSection } from "@/components/home/CtaSection";
import { AppWindow, BrainCircuit, Database, Cloud, ShieldCheck, LineChart } from "lucide-react";

const servicesDetails = [
    {
        icon: AppWindow,
        title: "Custom Software Development",
        desc: "We build resilient, scalable software from the ground up, ensuring your architecture can handle global enterprise demands.",
        features: ["Microservices Architecture", "API-First Development", "Legacy System Modernization"],
    },
    {
        icon: BrainCircuit,
        title: "AI & Machine Learning",
        desc: "Deploy intelligent algorithms that automate decision-making, optimize supply chains, and predict market trends.",
        features: ["Predictive Analytics", "Natural Language Processing", "Automated Workflows"],
    },
    {
        icon: Database,
        title: "Data Engineering",
        desc: "Transform fragmented data into structured, actionable insights with robust data pipelines and central warehouses.",
        features: ["Real-time Data Processing", "Data Warehousing", "Business Intelligence Dashboards"],
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        desc: "Future-proof your operations with secure, auto-scaling cloud deployments across AWS, Google Cloud, or Azure.",
        features: ["Cloud Migration", "Serverless Computing", "DevOps & CI/CD"],
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        desc: "Protect your digital assets with enterprise-grade security protocols, encryption, and compliance monitoring.",
        features: ["Zero-Trust Architecture", "Vulnerability Assessments", "Regulatory Compliance"],
    },
    {
        icon: LineChart,
        title: "Digital Transformation Consulting",
        desc: "Strategic guidance to transition traditional business models into fully digitized, agile operations.",
        features: ["Technology Roadmap", "Process Optimization", "Change Management"],
    },
];

const timelineSteps = [
    { title: "Discovery", desc: "Understanding goals, challenges, and domain requirements." },
    { title: "Strategy", desc: "Architecting the solution and defining the tech stack." },
    { title: "Development", desc: "Agile sprints building robust, scalable features." },
    { title: "Deployment", desc: "Secure rollout with continuous integration testing." },
    { title: "Optimization", desc: "Post-launch AI-driven performance tuning." },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bebas-neue tracking-wide text-white mb-6"
                    >
                        Capabilities & <span className="text-gradient">Solutions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto"
                    >
                        We deliver end-to-end technology solutions that empower enterprises to innovate, scale, and lead in a digital-first world.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesDetails.map((service, i) => (
                            <AnimatedCard key={i} delay={i * 0.1} className="p-8 h-full flex flex-col bg-slate-900 border-slate-800">
                                <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-blue-600/20 text-blue-400">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-khand font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-slate-400 mb-6 flex-grow">{service.desc}</p>
                                <ul className="space-y-2 mt-auto">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm font-medium text-slate-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Animated Timeline */}
            <section className="py-24 relative bg-slate-950 border-y border-white/5 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-khand font-bold text-white mb-4">Our Development <span className="text-teal-400">Process</span></h2>
                        <p className="text-slate-400">A proven, agile methodology for delivering enterprise-grade platforms.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-slate-800">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-600 to-teal-400"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
                            {timelineSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: i * 0.2 + 0.5 }}
                                    className="relative flex flex-col items-center text-center group"
                                >
                                    <div className="w-24 h-24 rounded-full glass border-2 border-slate-800 group-hover:border-teal-500 flex items-center justify-center mb-6 relative z-10 transition-colors duration-300">
                                        <span className="text-3xl font-bebas-neue text-white">{i + 1}</span>
                                    </div>
                                    <h4 className="text-xl font-khand font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-sm text-slate-400 px-4">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
