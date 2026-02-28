"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
    { id: "clients", label: "Clients" },
    { id: "values", label: "Values" },
    { id: "process", label: "Process" },
    { id: "solutions", label: "Solutions" },
    { id: "industries", label: "Industries" },
    { id: "services", label: "Services" },
    { id: "metrics", label: "Metrics" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faq", label: "FAQ" },
];

export function ScrollNavigation() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                // Trigger when section is mostly visible or past middle
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        const handleScroll = () => {
            if (window.scrollY < window.innerHeight * 0.4) {
                setActiveSection("");
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex items-center justify-center transition-transform">
            <div className="flex flex-col gap-3 py-4 px-2 rounded-full glass-card border border-white/10 shadow-xl shadow-black/20 backdrop-blur-md bg-slate-900/40">
                {sections.map(({ id, label }) => {
                    const isActive = activeSection === id;
                    return (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="group relative flex items-center justify-center w-6 h-6 focus:outline-none"
                            aria-label={`Scroll to ${label}`}
                        >
                            <span
                                className={`absolute right-10 text-xs font-semibold tracking-wider font-space-grotesk transition-all duration-300 w-max px-3 py-1.5 rounded-lg glass shadow-lg
                                    ${isActive ? "opacity-100 text-blue-400 translate-x-0 pointer-events-auto visible" : "opacity-0 invisible text-slate-500 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 group-hover:text-slate-300"}
                                `}
                            >
                                {label}
                            </span>
                            <motion.div
                                animate={{
                                    height: isActive ? 12 : 8,
                                    width: isActive ? 12 : 8,
                                    backgroundColor: isActive ? "#3b82f6" : "#475569",
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="rounded-full relative overflow-hidden group-hover:bg-slate-400 transition-colors flex-shrink-0"
                            >
                                {isActive && (
                                    <motion.div
                                        className="absolute inset-0 bg-blue-400 blur-[2px] opacity-60"
                                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                )}
                            </motion.div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
