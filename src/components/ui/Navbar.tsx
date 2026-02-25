"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Sun, Moon, X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

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
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(newTheme);
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-[60] transition-all duration-300",
                    scrolled
                        ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3.5 md:py-4 shadow-lg shadow-black/10"
                        : "bg-slate-950/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-white/5 md:border-transparent py-3.5 md:py-5 lg:py-6 shadow-sm md:shadow-none"
                )}
            >
                <div className="container mx-auto px-5 sm:px-6 md:px-8 max-w-[1400px] h-full">
                    <div className="flex items-center justify-between h-full">

                        {/* Logo Section */}
                        <div className="flex-shrink-0 mr-4 md:mr-8 flex items-center h-full">
                            <Link href="/" className="flex items-center gap-2 z-50 group">
                                <span className="font-bebas-neue text-[28px] md:text-3xl tracking-widest text-white transition-opacity duration-300 group-hover:opacity-90 leading-none pt-1">
                                    RAJADI<span className="text-blue-500 ml-1">GLOBAL</span>
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="px-4 py-2 text-sm font-khand font-bold tracking-wide text-slate-300 hover:text-white transition-colors uppercase relative group flex items-center h-full"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ease-out opacity-80"></span>
                                    </Link>
                                </div>
                            ))}

                            {/* Dropdown Menu */}
                            <div
                                className="relative px-4 py-2"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <button className="flex items-center gap-1.5 text-sm font-khand font-bold tracking-wide text-slate-300 hover:text-white transition-colors uppercase cursor-pointer group h-full">
                                    Industries
                                    <ChevronDown size={14} className={cn("transition-transform duration-300 ease-out", dropdownOpen && "rotate-180 text-blue-400")} />
                                    <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ease-out opacity-80"></span>
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-blue-900/20 overflow-hidden py-3">
                                        <div className="px-6 py-2 mb-2 border-b border-white/5">
                                            <span className="text-[10px] font-khand uppercase tracking-widest text-slate-500 font-bold">Select Industry</span>
                                        </div>
                                        {industryLinks.map((item) => (
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
                                    </div>
                                )}
                            </div>

                            {secondaryLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="px-4 py-2 text-sm font-khand font-bold tracking-wide text-slate-300 hover:text-white transition-colors uppercase relative group flex items-center h-full"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ease-out opacity-80"></span>
                                    </Link>
                                </div>
                            ))}
                        </nav>

                        {/* CTA, Theme Toggle & Mobile Toggle */}
                        <div className="flex items-center gap-3 md:gap-4 h-full">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors outline-none flex items-center justify-center h-9 w-9 md:h-10 md:w-10"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Moon size={20} className="w-5 h-5" /> : <Sun size={20} className="w-5 h-5" />}
                            </button>

                            <div className="hidden lg:block relative group/btn">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-40 group-hover/btn:opacity-70 transition duration-500"></div>
                                <Link href="/contact" className="relative block">
                                    <Button className="relative rounded-full px-7 font-bold bg-slate-900 border border-slate-700/50 hover:bg-slate-800 text-white uppercase tracking-wider text-xs h-10 transition-all duration-300 overflow-hidden group-hover/btn:border-blue-500/50">
                                        <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-y-10 block">Get Consultation</span>
                                        <span className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 translate-y-10 group-hover/btn:translate-y-0 text-blue-400">Let's Talk</span>
                                    </Button>
                                </Link>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="lg:hidden relative z-50 p-2 -mr-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center h-10 w-10"
                                onClick={() => setMobileMenuOpen(true)}
                                aria-label="Open global menu"
                            >
                                <div className="flex flex-col gap-1.5 pointer-events-none w-5 h-4 justify-between">
                                    <span className="w-full h-[2px] rounded-full bg-current block"></span>
                                    <span className="w-full h-[2px] rounded-full bg-current block"></span>
                                    <span className="w-full h-[2px] rounded-full bg-current block"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Overlay - Extracted from Header for True Fullscreen */}
            {mobileMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-[100vh] z-[100] bg-slate-950/98 backdrop-blur-3xl lg:hidden flex flex-col pt-24 pb-8 px-6 sm:px-8 overflow-y-auto">
                    {/* Close Button */}
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-6 right-6 sm:right-8 p-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-[110] flex items-center justify-center"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>

                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

                    <div className="flex flex-col gap-4 font-khand text-2xl font-bold uppercase tracking-wide relative z-10 w-full max-w-sm mx-auto mt-4 sm:mt-8">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link href={link.href} className="text-slate-300 flex items-center group py-2" onClick={() => setMobileMenuOpen(false)}>
                                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                                    <span className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-blue-500">&rarr;</span>
                                </Link>
                                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
                            </div>
                        ))}

                        {/* Mobile Dropdown */}
                        <div className="py-2">
                            <button
                                className="flex items-center justify-between w-full text-slate-300 hover:text-white text-left group"
                                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                            >
                                Industries
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                    <ChevronDown className={cn("transition-transform duration-300 ease-out", mobileDropdownOpen && "rotate-180 text-blue-400")} size={18} />
                                </span>
                            </button>
                            {mobileDropdownOpen && (
                                <div className="overflow-hidden flex flex-col gap-3 mt-4 pl-4 border-l-2 border-slate-800">
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
                                </div>
                            )}
                            <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mt-4"></div>
                        </div>

                        {secondaryLinks.map((link) => (
                            <div key={link.name}>
                                <Link href={link.href} className="text-slate-300 flex items-center group py-2" onClick={() => setMobileMenuOpen(false)}>
                                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                                    <span className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-blue-500">&rarr;</span>
                                </Link>
                                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-8 relative z-10 w-full max-w-sm mx-auto">
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                            <Button className="relative w-full bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white text-xl uppercase font-bold tracking-widest py-7 rounded-xl transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 group-hover:text-blue-400 transition-colors">Start A Project</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
