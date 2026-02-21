import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatItem = ({ label, value, suffix, delay }: { label: string, value: number, suffix: string, delay: number }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const incrementTime = Math.max(duration / end, 10);

            const timer = setInterval(() => {
                start += Math.ceil(end / (duration / incrementTime));
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="group"
        >
            <div className="flex items-baseline gap-1">
                {/* Number: dark default, yellow on hover — energy accent on interaction */}
                <span className="text-4xl lg:text-5xl font-black text-slate-900 group-hover:text-amber-500 transition-colors duration-300">
                    {count}
                </span>
                {/* Suffix always yellow — premium energy highlight for key stats */}
                <span className="text-2xl lg:text-3xl font-black text-amber-500">
                    {suffix}
                </span>
            </div>
            <div className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mt-2 group-hover:text-slate-700 transition-colors">
                {label}
            </div>
        </motion.div>
    );
};

const MarketingIllustration = () => {
    return (
        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Background decorative glow */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-teal-50 rounded-full blur-3xl"
            />

            <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                {/* Growth Chart Line */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M50,320 L120,250 L180,280 L260,180 L350,120"
                    fill="none"
                    stroke="url(#gradient-dual)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Floating UI Card */}
                <motion.rect
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: [0, -10, 0], opacity: 1 }}
                    transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 1 } }}
                    x="240" y="80" width="100" height="60" rx="12"
                    className="fill-white shadow-xl"
                    style={{ filter: "drop-shadow(0 10px 15px rgba(15,23,42,0.1))" }}
                />
                {/* Yellow dot in floating card — accent indicator */}
                <motion.circle
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    cx="265" cy="110" r="15" fill="#EAB308"
                />
                <rect x="290" y="100" width="40" height="6" rx="3" className="fill-slate-100" />
                <rect x="290" y="115" width="25" height="6" rx="3" className="fill-slate-50" />

                {/* Bar Chart: alternating teal and yellow bars */}
                {[
                    { x: 80, h: 60, delay: 0.2, color: '#0D9488' },
                    { x: 130, h: 100, delay: 0.4, color: '#EAB308' },
                    { x: 180, h: 140, delay: 0.6, color: '#0D9488' },
                    { x: 230, h: 180, delay: 0.8, color: '#EAB308' },
                ].map((bar, i) => (
                    <motion.rect
                        key={i}
                        initial={{ height: 0, y: 320 }}
                        animate={{ height: bar.h, y: 320 - bar.h }}
                        transition={{ duration: 1, delay: bar.delay }}
                        x={bar.x} width="30" rx="8"
                        fill={bar.color}
                        opacity={0.85}
                    />
                ))}

                <defs>
                    {/* Dual teal-to-yellow gradient for chart line */}
                    <linearGradient id="gradient-dual" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0F766E" />
                        <stop offset="60%" stopColor="#0D9488" />
                        <stop offset="100%" stopColor="#EAB308" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating Growth Rate Card — yellow accent icon bubble */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-0 bg-white p-4 rounded-2xl shadow-2xl border border-slate-50 z-20 flex items-center gap-4"
            >
                <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-gray-900">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Rate</div>
                    <div className="text-xl font-black text-db-dark">+85%</div>
                </div>
            </motion.div>
        </div>
    );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const Stats: React.FC = () => {
    return (
        <section className="bg-white py-12 lg:py-20 overflow-hidden border-b border-slate-100 relative z-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left SIDE: Stats Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                                Delivering Unmatched <br />
                                <span className="text-db-teal">Market Dominance</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-lg bg-white">
                                Experience the power of India's largest news network. We don't just reach people; we influence decisions.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:gap-16">
                            <StatItem value={10} suffix="+ Cr" label="Daily Readers" delay={0.2} />
                            <StatItem value={65} suffix="+" label="Editions" delay={0.3} />
                            <StatItem value={300} suffix="+" label="Districts" delay={0.4} />
                            <StatItem value={30} suffix="+" label="Years Legacy" delay={0.5} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="mt-16 pt-10 border-t border-slate-100 flex items-center gap-6"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                {/* "500+" badge: yellow accent — high-impact social proof */}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-400 flex items-center justify-center text-gray-900 text-[10px] font-black">
                                    500+
                                </div>
                            </div>
                            <p className="text-sm font-bold text-slate-600">
                                Trusted by <span className="text-slate-900 font-black">500+ Top Brands</span> in India
                            </p>
                        </motion.div>
                    </div>

                    {/* Right SIDE: Premium Illustration */}
                    <div className="relative">
                        <MarketingIllustration />

                        {/* Decorative Blur Orbs */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-100/30 rounded-full blur-[100px] -z-10" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-100/20 rounded-full blur-[100px] -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
