"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Sun, Moon } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
];

const industryLinks = [
    { name: "DairyTech", href: "/industries/dairytech" },
    { name: "AgriTech", href: "/industries/agritech" },
    { name: "PropTech", href: "/industries/proptech" },
];

const secondaryLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Impact", href: "/impact" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Setup initial theme based on layout
        if (document.documentElement.classList.contains("light")) {
            setTheme("light");
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(newTheme);
    };

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 w-full z-[60] transition-all duration-500",
                scrolled
                    ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "bg-transparent py-5 lg:py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
                <div className="flex items-center justify-between">

                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex-shrink-0 mr-8"
                    >
                        <Link href="/" className="flex items-center gap-2 z-50 group">
                            <span className="font-bebas-neue text-3xl tracking-widest text-white transition-opacity duration-300 group-hover:opacity-90">
                                RAJADI<span className="text-blue-500 ml-1">GLOBAL</span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                            >
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-khand font-bold tracking-wide text-slate-300 hover:text-white transition-colors uppercase relative group flex items-center h-full"
                                >
                                    {link.name}
                                    <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ease-out opacity-80"></span>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Dropdown Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + navLinks.length * 0.1, ease: "easeOut" }}
                            className="relative px-4 py-2"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1.5 text-sm font-khand font-bold tracking-wide text-slate-300 hover:text-white transition-colors uppercase cursor-pointer group h-full">
                                Industries
                                <ChevronDown size={14} className={cn("transition-transform duration-300 ease-out", dropdownOpen && "rotate-180 text-blue-400")} />
                                <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ease-out opacity-80"></span>
                            </button>

                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(5px)" }}
                                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(2px)" }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-blue-900/20 overflow-hidden py-3"
                                    >
                                        <div className="px-6 py-2 mb-2 border-b border-white/5">
                                            <span className="text-[10px] font-khand uppercase tracking-widest text-slate-500 font-bold">Select Industry</span>
                                        </div>
                                        {industryLinks.map((item, i) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block px-6 py-2.5 text-sm font-khand font-bold tracking-wide text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 uppercase relative overflow-hidden group/item"
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                <span className="relative z-10 transition-transform duration-200 group-hover/item:translate-x-1 inline-block">{item.name}</span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                            </Link>
                                        ))}
                                        <div className="mx-6 my-3 h-px bg-white/5"></div>
                                        <Link
                                            href="/industries"
                                            className="block px-6 py-3 text-xs font-khand font-bold tracking-wider text-blue-400 hover:text-blue-300 transition-colors uppercase group/all"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            View All Industries <span className="inline-block transition-transform duration-300 group-hover/all:translate-x-1 ml-1">&rarr;</span>
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {secondaryLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + (navLinks.length + i) * 0.1, ease: "easeOut" }}
                            >
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-khand font-bold tracking-wide text-slate-300 hover:text-white transition-colors uppercase relative group flex items-center h-full"
                                >
                                    {link.name}
                                    <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ease-out opacity-80"></span>
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* CTA, Theme Toggle & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            onClick={toggleTheme}
                            className="p-2 lg:p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all outline-none"
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                {theme === "dark" ? (
                                    <motion.div
                                        key="moon"
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Moon size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="sun"
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Sun size={18} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                            className="hidden lg:block relative group/btn"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-40 group-hover/btn:opacity-70 transition duration-500"></div>
                            <Link href="/contact" className="relative block">
                                <Button className="relative rounded-full px-7 font-bold bg-slate-900 border border-slate-700/50 hover:bg-slate-800 text-white uppercase tracking-wider text-xs h-10 transition-all duration-300 overflow-hidden group-hover/btn:border-blue-500/50">
                                    <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-y-10 block">Get Consultation</span>
                                    <span className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 translate-y-10 group-hover/btn:translate-y-0 text-blue-400">Let's Talk</span>
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="lg:hidden relative z-50 p-2 text-slate-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <motion.div animate={mobileMenuOpen ? "open" : "closed"} className="flex flex-col gap-1.5 pointer-events-none">
                                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } }} className="w-6 h-[2px] rounded-full bg-current block transition-all ease-out duration-300"></motion.span>
                                <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="w-6 h-[2px] rounded-full bg-current block transition-all ease-out duration-300"></motion.span>
                                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }} className="w-6 h-[2px] rounded-full bg-current block transition-all ease-out duration-300"></motion.span>
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%", filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: "-100%", filter: "blur(10px)" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-3xl lg:hidden flex flex-col pt-28 pb-8 px-8 overflow-y-auto"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

                        <div className="flex flex-col gap-4 font-khand text-2xl font-bold uppercase tracking-wide relative z-10 w-full max-w-sm mx-auto">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20, transition: { delay: 0 } }}
                                    transition={{ delay: 0.2 + i * 0.08, ease: "easeOut" }}
                                >
                                    <Link href={link.href} className="text-slate-300 flex items-center group py-2" onClick={() => setMobileMenuOpen(false)}>
                                        <span className="group-hover:text-white transition-colors">{link.name}</span>
                                        <span className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-blue-500">&rarr;</span>
                                    </Link>
                                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
                                </motion.div>
                            ))}

                            {/* Mobile Dropdown */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ delay: 0.2 + navLinks.length * 0.08, ease: "easeOut" }}
                                className="py-2"
                            >
                                <button
                                    className="flex items-center justify-between w-full text-slate-300 hover:text-white text-left group"
                                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                >
                                    Industries
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                        <ChevronDown className={cn("transition-transform duration-300 ease-out", mobileDropdownOpen && "rotate-180 text-blue-400")} size={18} />
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {mobileDropdownOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden flex flex-col gap-3 mt-4 pl-4 border-l-2 border-slate-800"
                                        >
                                            {industryLinks.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-[20px] text-slate-400 hover:text-blue-400 block py-1 transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                            <Link href="/industries" className="text-sm tracking-widest text-blue-500 mt-2 font-bold block hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                                VIEW ALL INDUSTRIES &rarr;
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mt-4"></div>
                            </motion.div>

                            {secondaryLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20, transition: { delay: 0 } }}
                                    transition={{ delay: 0.2 + (navLinks.length + 1 + i) * 0.08, ease: "easeOut" }}
                                >
                                    <Link href={link.href} className="text-slate-300 flex items-center group py-2" onClick={() => setMobileMenuOpen(false)}>
                                        <span className="group-hover:text-white transition-colors">{link.name}</span>
                                        <span className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-blue-500">&rarr;</span>
                                    </Link>
                                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.6, ease: "easeOut", duration: 0.5 }}
                            className="mt-auto pt-8 relative z-10 w-full max-w-sm mx-auto"
                        >
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                                <Button className="relative w-full bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white text-xl uppercase font-bold tracking-widest py-7 rounded-xl transition-all duration-300 overflow-hidden">
                                    <span className="relative z-10 group-hover:text-blue-400 transition-colors">Start A Project</span>
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
