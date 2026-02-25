"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Sun, Moon, Menu, X, Home, Info, HeartHandshake, Milk, Tractor, Building, FolderKanban, Target, Lightbulb, GraduationCap, Send } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Services", href: "/services", icon: HeartHandshake },
];

const industryLinks = [
    { name: "DairyTech", href: "/industries/dairytech", icon: Milk },
    { name: "AgriTech", href: "/industries/agritech", icon: Tractor },
    { name: "PropTech", href: "/industries/proptech", icon: Building },
];

const secondaryLinks = [
    { name: "Projects", href: "/projects", icon: FolderKanban },
    { name: "Impact", href: "/impact", icon: Target },
    { name: "Insights", href: "/insights", icon: Lightbulb },
    { name: "Careers", href: "/careers", icon: GraduationCap },
    { name: "Contact", href: "/contact", icon: Send },
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

    // Disable body scrolling when mobile menu is open and enforce overflow-x-hidden globally
    useEffect(() => {
        // Enforce no horizontal scroll on the document unconditionally to fix layout issues
        document.documentElement.style.overflowX = 'hidden';

        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            // Restore proper overflow states
            document.body.style.overflow = "";
            document.body.style.overflowX = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.overflowX = "hidden";
        };
    }, [mobileMenuOpen]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(newTheme);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-[100] transition-colors duration-300",
                scrolled
                    ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "bg-transparent py-5 lg:py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
                <div className="flex items-center justify-between">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 mr-8">
                        <Link href="/" className="flex items-center gap-2 group z-50 relative">
                            <span className="font-bebas-neue text-3xl tracking-widest text-white transition-opacity duration-300 group-hover:opacity-90">
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
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-blue-900/20 py-3 z-[110] animate-in fade-in duration-200">
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
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 lg:p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all outline-none"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
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

                        {/* Mobile Menu Toggle button */}
                        <button
                            className="lg:hidden relative p-2 text-slate-300 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            {mobileMenuOpen && (
                <>
                    {/* Dimmed Backdrop */}
                    <div
                        className="fixed inset-0 z-[9998] bg-slate-950/40 backdrop-blur-md lg:hidden animate-in fade-in duration-300 cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Side Panel Drawer */}
                    <div className="fixed top-0 right-0 h-[100vh] w-[85%] max-w-[320px] z-[9999] bg-slate-900/95 backdrop-blur-xl shadow-[-10px_0_40px_rgba(0,0,0,0.5)] border-l border-white/10 rounded-l-3xl lg:hidden flex flex-col pt-16 pb-8 px-5 overflow-y-auto overflow-x-hidden animate-in slide-in-from-right duration-300 box-border">

                        {/* Decorative background element constrained */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4 overflow-hidden"></div>

                        {/* Close Button */}
                        <div className="flex justify-between items-center w-full mb-6 z-10 relative px-2">
                            <div className="font-bebas-neue text-2xl tracking-widest text-white">
                                RAJADI<span className="text-blue-500 ml-1">GLOBAL</span>
                            </div>
                            <button
                                className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center shadow-sm relative z-20"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                                style={{ pointerEvents: 'auto' }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-1.5 font-khand text-[17px] font-medium tracking-wide relative z-10 w-full">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-slate-300 flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all group"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Icon size={18} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                                        <span className="group-hover:text-white transition-colors">{link.name}</span>
                                        <span className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-blue-400">&rarr;</span>
                                    </Link>
                                )
                            })}

                            <div className="h-px w-[90%] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-1"></div>

                            {/* Mobile Dropdown */}
                            <div className="px-0 py-1">
                                <button
                                    className="flex items-center justify-between w-full text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10 active:scale-[0.98] rounded-xl px-4 py-3.5 text-left group transition-all"
                                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                >
                                    <div className="flex items-center gap-3">
                                        <Building size={18} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                                        <span>Industries</span>
                                    </div>
                                    <ChevronDown className={cn("transition-transform duration-300 ease-out text-slate-500 group-hover:text-slate-300", mobileDropdownOpen && "rotate-180 text-blue-400")} size={16} />
                                </button>

                                {mobileDropdownOpen && (
                                    <div className="overflow-hidden flex flex-col gap-1 mt-1 pl-6 ml-6 border-l border-white/10 animate-in slide-in-from-top-2 duration-200">
                                        {industryLinks.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center gap-3 text-[16px] text-slate-400 hover:text-white hover:bg-white/5 active:bg-white/10 px-4 py-2.5 rounded-lg transition-colors group"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <Icon size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                                                    {item.name}
                                                </Link>
                                            )
                                        })}
                                        <Link href="/industries" className="text-xs tracking-widest text-blue-400 mt-1 px-4 py-2.5 font-medium block hover:text-blue-300 transition-colors uppercase group/all" onClick={() => setMobileMenuOpen(false)}>
                                            View All <span className="inline-block transition-transform duration-300 group-hover/all:translate-x-1 ml-1">&rarr;</span>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <div className="h-px w-[90%] mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-1"></div>

                            {secondaryLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-slate-300 flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all group"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Icon size={18} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                                        <span className="group-hover:text-white transition-colors">{link.name}</span>
                                        <span className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-blue-400">&rarr;</span>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="mt-auto pt-8 relative z-10 w-full mb-2 px-2">
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-xl blur-lg transition duration-500"></div>
                                <Button className="relative w-full bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:bg-slate-700 text-white text-[15px] uppercase font-bold tracking-widest py-6 rounded-xl transition-all duration-300 overflow-hidden group-hover:border-blue-500/50 shadow-lg">
                                    <span className="relative z-10 group-hover:text-blue-400 transition-colors">Start A Project</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
