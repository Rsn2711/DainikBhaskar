import { motion } from 'framer-motion';

const SwachhBharatBanner = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E3A5F] to-[#0F172A] py-0">
            {/* Tricolor accent bar at top */}
            <div className="flex h-1 w-full">
                <div className="flex-1 bg-[#FF9933]" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-[#138808]" />
            </div>

            {/* Background glow effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8 lg:gap-12">

                    {/* Left: Badge + Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="shrink-0 py-6 lg:py-8"
                    >
                        {/* Ashoka Chakra inspired badge */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full border-2 border-[#FF9933] flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full border border-[#138808]" />
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">
                                Government of India
                            </span>
                        </div>

                        <div className="space-y-0.5 leading-none">
                            <p className="text-3xl lg:text-4xl font-black text-[#FF9933]">स्वच्छ</p>
                            <p className="text-3xl lg:text-4xl font-black text-white">भारत</p>
                            <p className="text-3xl lg:text-4xl font-black text-[#138808]">मिशन</p>
                        </div>

                        <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] rounded-full" />
                    </motion.div>

                    {/* Center: Main image with blend */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative min-h-[150px] lg:min-h-[200px] flex items-end overflow-hidden"
                    >
                        {/* Left fade mask */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1E3A5F] to-transparent z-10 pointer-events-none" />
                        {/* Right fade mask */}
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1E3A5F] to-transparent z-10 pointer-events-none" />

                        <img
                            src="/image/swachh_bharat_mission_cover.jpg"
                            alt="Swachh Bharat Mission"
                            className="w-full h-full object-cover object-center mix-blend-luminosity opacity-90 hover:opacity-100 transition-opacity duration-500 scale-125 origin-center"
                            style={{ minHeight: '240px' }}
                        />
                    </motion.div>

                    {/* Right: Stats pill */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="shrink-0 hidden lg:flex flex-col gap-4 py-6"
                    >
                        {[
                            { num: '10 Cr+', label: 'Toilets Built' },
                            { num: '6 Lakh+', label: 'Villages ODF' },
                            { num: '36', label: 'States & UTs' },
                        ].map(({ num, label }) => (
                            <div key={label} className="text-center">
                                <div className="text-lg font-black text-[#FF9933]">{num}</div>
                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Tricolor accent bar at bottom */}
            <div className="flex h-1 w-full">
                <div className="flex-1 bg-[#138808]" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-[#FF9933]" />
            </div>
        </section>
    );
};

export default SwachhBharatBanner;
