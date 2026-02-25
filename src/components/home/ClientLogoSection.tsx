"use client";

import { motion } from "framer-motion";
import { Command, Triangle, Hexagon, Octagon, Square, Circle } from "lucide-react";

// Placeholder structured logos using Lucide icons to represent client brands
const clientLogos = [
    { name: "Apex Global", icon: Command },
    { name: "Nexus Systems", icon: Triangle },
    { name: "Helix Dynamics", icon: Hexagon },
    { name: "Quantum Core", icon: Octagon },
    { name: "Vertex Tech", icon: Square },
    { name: "Orbit Networks", icon: Circle }
];

export function ClientLogoSection() {
    return (
        <section id="clients" className="py-24 bg-slate-950 relative z-10 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 max-w-7xl relative z-20 mb-16">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Industry Leaders
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-khand font-bold text-white mb-4"
                    >
                        Trusted by <span className="text-blue-500">Visionaries</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Powering the next generation of enterprise digital ecosystems.
                    </motion.p>
                </div>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Edge Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-logo-scroll gap-16 md:gap-24 w-max hover:[animation-play-state:paused] px-8 md:px-12 items-center">
                    {/* Double the array for seamless infinite looping */}
                    {[...clientLogos, ...clientLogos, ...clientLogos].map((client, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer w-max"
                        >
                            <client.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-300 transition-colors duration-300" />
                            <span className="font-extrabold tracking-wider text-xl md:text-2xl font-bebas-neue text-white">
                                {client.name.split(" ")[0]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes logo-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-33.333% - 16px)); } /* Adjust based on array tripling */
                }
                .animate-logo-scroll {
                    animation: logo-scroll 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
