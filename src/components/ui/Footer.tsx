"use client";

import Link from "next/link";
import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";
import { fadeUpVariant, sectionRevealProps } from "@/lib/animations";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-950 pt-20 pb-10 border-t border-white/5 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <motion.div {...sectionRevealProps} variants={fadeUpVariant} className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-6">
                            <span className="font-bebas-neue text-3xl tracking-wide text-white">
                                RAJADI GLOBAL
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                            Empowering businesses with scalable software solutions, AI-powered analytics, and industry-specific digital platforms for a connected future.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-colors">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-khand text-lg font-semibold text-white mb-6">Platforms</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/industries/dairytech" className="text-sm text-slate-400 hover:text-white transition-colors">DairyTech</Link></li>
                            <li><Link href="/industries/agritech" className="text-sm text-slate-400 hover:text-white transition-colors">AgriTech</Link></li>
                            <li><Link href="/industries/proptech" className="text-sm text-slate-400 hover:text-white transition-colors">PropTech</Link></li>
                            <li><Link href="/services#ai" className="text-sm text-slate-400 hover:text-white transition-colors">AI Analytics</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-khand text-lg font-semibold text-white mb-6">Company</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="text-sm text-slate-400 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/impact" className="text-sm text-slate-400 hover:text-white transition-colors">Social Impact</Link></li>
                            <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="font-khand text-lg font-semibold text-white mb-6">Stay Updated</h4>
                        <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for the latest AI and industry insights.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-900 border border-white/10 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-full"
                            />
                            <Button variant="default" className="px-4">
                                <ArrowRight size={18} />
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        &copy; {currentYear} Rajadi Global Pvt Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300">Privacy Policy</Link>
                        <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300">Terms of Service</Link>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
