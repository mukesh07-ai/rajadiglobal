"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
            setFormData({ name: "", email: "", company: "", message: "" });
        }
    };

    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bebas-neue tracking-wide text-white mb-6 uppercase"
                    >
                        Get In <span className="text-gradient">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Ready to transform your enterprise operations? Reach out to our team of experts and let&apos;s discuss your next massive leap.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">

                        {/* Contact Details */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="glass p-8 rounded-3xl border border-white/5">
                                <h3 className="text-2xl font-khand font-bold text-white mb-8">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-1">Global Headquarters</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">Tech Boulevard, Sector 62,<br />Noida, Uttar Pradesh 201309,<br />India</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-1">Email Us</h4>
                                            <p className="text-slate-400 text-sm">contact@rajadiglobal.com</p>
                                            <p className="text-slate-400 text-sm">support@rajadiglobal.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-1">Call Us</h4>
                                            <p className="text-slate-400 text-sm">+91 (120) 456-7890</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="h-[300px] rounded-3xl overflow-hidden glass border border-white/5 relative">
                                {/* Simulated Map aesthetic */}
                                <div className="absolute inset-0 bg-slate-900 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_2px,_transparent_2px)] bg-[size:20px_20px]"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs text-slate-300 flex justify-between items-center">
                                    <span>Google Maps Integration</span>
                                    <a href="#" className="text-blue-400 hover:text-white transition-colors">View Map</a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 h-full">
                                <div className="flex items-center gap-3 mb-8">
                                    <MessageSquare className="text-teal-400 w-6 h-6" />
                                    <h3 className="text-2xl font-khand font-bold text-white">Send a Message</h3>
                                </div>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        className="h-[400px] flex flex-col items-center justify-center text-center p-8 bg-teal-500/5 border border-teal-500/20 rounded-2xl"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(20,184,166,0.3)]">
                                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                                        <p className="text-slate-400">Our team will get back to you within 24 hours.</p>
                                    </motion.div>
                                ) : (
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm text-slate-300 font-medium">Full Name <span className="text-red-400">*</span></label>
                                                <input
                                                    required type="text"
                                                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm text-slate-300 font-medium">Email Address <span className="text-red-400">*</span></label>
                                                <input
                                                    required type="email"
                                                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                    placeholder="you@company.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-slate-300 font-medium">Company Name</label>
                                            <input
                                                type="text"
                                                value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="Your Company Ltd."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-slate-300 font-medium">Message <span className="text-red-400">*</span></label>
                                            <textarea
                                                required rows={5}
                                                value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                                placeholder="How can we help you?"
                                            ></textarea>
                                        </div>
                                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <p className="text-xs text-slate-500 max-w-xs">By submitting this form, you agree to our privacy policy and terms of service.</p>
                                            <Button variant="gradient" type="submit" className="w-full sm:w-auto h-12 px-8">Send Message</Button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
