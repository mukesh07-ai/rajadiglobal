"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase, Zap, Building, Laptop } from "lucide-react";

const roles = [
    {
        title: "Senior AI Engineer",
        type: "Full-time",
        location: "Noida, India",
        department: "Engineering"
    },
    {
        title: "Full-Stack Developer (Next.js/Node)",
        type: "Full-time",
        location: "Remote / Noida",
        department: "Engineering"
    },
    {
        title: "DairyTech Product Manager",
        type: "Full-time",
        location: "Noida, India",
        department: "Product"
    },
    {
        title: "Cloud Solutions Architect",
        type: "Full-time",
        location: "Hybrid",
        department: "Infrastructure"
    }
];

export default function CareersPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <div className="absolute left-1/4 bottom-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bebas-neue tracking-wide text-white mb-6 uppercase"
                    >
                        Shape the <span className="text-gradient">Future</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto"
                    >
                        Join a collective of visionary engineers, designers, and strategists building the enterprise platforms of tomorrow.
                    </motion.p>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        <AnimatedCard delay={0.1} className="p-8 bg-slate-900 border border-white/5">
                            <Zap className="w-10 h-10 text-blue-500 mb-6" />
                            <h3 className="text-2xl font-khand font-bold text-white mb-4">Relentless Innovation</h3>
                            <p className="text-slate-400">We don&apos;t follow trends; we set them. Our R&D teams constantly experiment with state-of-the-art AI and distributed systems.</p>
                        </AnimatedCard>
                        <AnimatedCard delay={0.2} className="p-8 bg-slate-900 border border-white/5">
                            <Laptop className="w-10 h-10 text-teal-400 mb-6" />
                            <h3 className="text-2xl font-khand font-bold text-white mb-4">Flexible Work</h3>
                            <p className="text-slate-400">Whether you&apos;re in our Noida engineering hub or working remotely, we measure outcomes and impact, not hours clocked at a desk.</p>
                        </AnimatedCard>
                        <AnimatedCard delay={0.3} className="p-8 bg-slate-900 border border-white/5">
                            <Building className="w-10 h-10 text-indigo-400 mb-6" />
                            <h3 className="text-2xl font-khand font-bold text-white mb-4">Enterprise Scale</h3>
                            <p className="text-slate-400">The code you write will directly influence global supply chains, secure financial transactions, and optimize massive agricultural networks.</p>
                        </AnimatedCard>
                    </div>

                    {/* Open Roles */}
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-khand font-bold text-white mb-4">Open <span className="text-blue-500">Roles</span></h2>
                        </div>

                        <div className="space-y-4">
                            {roles.map((role, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-blue-500/30 hover:bg-slate-800 transition-all cursor-pointer"
                                >
                                    <div className="mb-4 md:mb-0">
                                        <h4 className="text-xl font-bold text-white mb-2">{role.title}</h4>
                                        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                            <span className="flex items-center"><Briefcase size={14} className="mr-1.5" />{role.department}</span>
                                            <span className="flex items-center"><MapPin size={14} className="mr-1.5" />{role.location}</span>
                                            <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold">{role.type}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Button variant="outline" className="border-white/10 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                                            Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-24 bg-slate-950 border-t border-white/5">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-khand font-bold text-white mb-2">Don&apos;t see a fit?</h2>
                            <p className="text-slate-400">Send us your resume anyway. We&apos;re always looking for exceptional talent.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-300 font-medium">Full Name</label>
                                    <input type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-slate-300 font-medium">Email Address</label>
                                    <input type="email" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-slate-300 font-medium">LinkedIn Profile / Portfolio</label>
                                <input type="url" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="https://linkedin.com/in/..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-slate-300 font-medium">Cover Letter / Intro</label>
                                <textarea rows={4} className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your proudest achievement..."></textarea>
                            </div>
                            <div className="pt-2">
                                <Button variant="gradient" className="w-full h-12 text-lg">Submit Application</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
