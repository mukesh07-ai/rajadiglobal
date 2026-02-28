"use client";

import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { CtaSection } from "@/components/home/CtaSection";

const blogPosts = [
    {
        title: "The Future of AI in DairyTech Supply Chains",
        excerpt: "How predictive models are practically eliminating milk spoilage and revolutionizing rural collection centers.",
        category: "DairyTech Trends",
        date: "Oct 24, 2025",
        readTime: "5 min read",
        author: "Elena R.",
        imageColor: "bg-blue-900"
    },
    {
        title: "Scalable Microservices for Global Enterprises",
        excerpt: "Why modernizing legacy monoliths into agile microservices isn't just a technical upgrade—it's a business imperative.",
        category: "AI & Technology",
        date: "Oct 18, 2025",
        readTime: "8 min read",
        author: "David K.",
        imageColor: "bg-slate-800"
    },
    {
        title: "Blockchain in PropTech: Beyond the Hype",
        excerpt: "Real-world applications of smart contracts in property transactions, ensuring security and unprecedented transparency.",
        category: "PropTech Market",
        date: "Oct 12, 2025",
        readTime: "6 min read",
        author: "Sarah J.",
        imageColor: "bg-cyan-900"
    },
    {
        title: "IoT Sensors and the Modern Farm",
        excerpt: "Integrating hardware with AI dashboards to increase crop yields while drastically reducing water consumption.",
        category: "Agri Innovation",
        date: "Sep 28, 2025",
        readTime: "4 min read",
        author: "Marcus C.",
        imageColor: "bg-emerald-900"
    },
    {
        title: "Building High-Performance Engineering Teams",
        excerpt: "A look inside Rajadi Global's culture of continuous learning and fearless innovation.",
        category: "Business Growth",
        date: "Sep 15, 2025",
        readTime: "7 min read",
        author: "VP Engineering",
        imageColor: "bg-fuchsia-900"
    },
    {
        title: "Zero-Trust Security Architecture Explained",
        excerpt: "Preparing your enterprise digital platforms against next-generation cybersecurity threats.",
        category: "AI & Technology",
        date: "Sep 02, 2025",
        readTime: "10 min read",
        author: "Alex M.",
        imageColor: "bg-slate-900"
    }
];

export default function InsightsPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bebas-neue tracking-wide text-white mb-6"
                    >
                        Insights & <span className="text-gradient">Intelligence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Expert perspectives on AI, software architecture, and industry-specific technological advancements.
                    </motion.p>
                </div>
            </section>

            <section className="py-12 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Categories Mockup */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        <button className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">All Articles</button>
                        <button className="px-5 py-2 rounded-full glass border-white/5 text-slate-300 hover:text-white text-sm font-medium transition-colors">AI & Technology</button>
                        <button className="px-5 py-2 rounded-full glass border-white/5 text-slate-300 hover:text-white text-sm font-medium transition-colors">DairyTech</button>
                        <button className="px-5 py-2 rounded-full glass border-white/5 text-slate-300 hover:text-white text-sm font-medium transition-colors">Agri Innovation</button>
                        <button className="px-5 py-2 rounded-full glass border-white/5 text-slate-300 hover:text-white text-sm font-medium transition-colors hidden sm:block">PropTech</button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, i) => (
                            <AnimatedCard key={i} delay={i * 0.1} className="group flex flex-col h-full bg-slate-900 border border-white/5 overflow-hidden">
                                <div className={`h-48 w-full ${post.imageColor} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    {/* Subtle grid pattern overlay */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="flex items-center text-xs font-semibold text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded-full">
                                            <Tag size={12} className="mr-1.5" /> {post.category}
                                        </span>
                                        <span className="flex items-center text-xs text-slate-500">
                                            <Calendar size={12} className="mr-1.5" /> {post.date}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-khand font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">{post.title}</h3>
                                    <p className="text-slate-400 mb-6 flex-grow">{post.excerpt}</p>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                                        <div className="text-sm font-medium text-slate-300">{post.author}</div>
                                        <div className="flex items-center text-sm font-semibold text-blue-500 group-hover:text-teal-400 transition-colors">
                                            Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 rounded-full border border-white/20 text-slate-300 font-semibold hover:border-white hover:text-white transition-all">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
