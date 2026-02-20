import { motion } from 'framer-motion';
import { MousePointer2, Users, Rocket, BarChart3, Bell, CheckCircle, Globe } from 'lucide-react';

const steps = [
    {
        icon: <MousePointer2 className="w-6 h-6" />,
        title: "Submit Your Details",
        description: "Fill the form with your campaign requirements and target audience details."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Our Media Expert Connects",
        description: "Our dedicated expert will reach out to design a customized strategy for you."
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Campaign Goes Live",
        description: "Launch your brand across India's most trusted platforms and see the impact."
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">

                    {/* Left: Illustration/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative mb-16 lg:mb-0"
                    >
                        <div className="bg-white rounded-[2.5rem] p-12 lg:p-16 aspect-square flex items-center justify-center relative shadow-[0_40px_100px_-20px_rgba(15,23,42,0.1)] border border-slate-100">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0D948805_0%,transparent_70%)]" />

                            {/* Floating Decorative Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 left-10 w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100/50"
                            >
                                <Bell className="w-6 h-6 text-db-teal" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 right-10 w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center shadow-2xl shadow-slate-900/20"
                            >
                                <Globe className="w-8 h-8 text-white" />
                            </motion.div>

                            <div className="grid grid-cols-2 gap-8 relative z-10 w-full max-w-md">
                                {/* Card 1: Ad Content Mockup */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] p-5 border border-slate-50 relative overflow-hidden group flex flex-col justify-between h-full"
                                >
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center p-1.5 overflow-hidden">
                                            <img src="/image/vector-education-logo_779267-2083.avif" alt="Logo" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="h-2 w-16 bg-slate-100 rounded-full" />
                                    </div>

                                    <div className="flex items-end justify-between gap-4 mt-auto">
                                        <div className="space-y-3 flex-1 pb-2">
                                            <div className="h-2 w-full bg-slate-100 rounded-full" />
                                            <div className="h-2 w-2/3 bg-slate-100 rounded-full" />
                                        </div>
                                        <div className="w-24 h-24 relative flex-shrink-0 -mb-5 -mr-5">
                                            <img
                                                src="/image/young-woman-attend-courses-girl-student-studying-holding-notebooks-showing-thumb-up-approval-recommending-company-standing-blue-background_1258-70145.avif"
                                                alt="Woman"
                                                className="w-full h-full object-cover rounded-tl-2xl rounded-br-3xl"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Card 2: Strategy / Graph */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-db-teal rounded-3xl shadow-[0_20px_50px_-12px_rgba(13,148,136,0.3)] p-5 relative overflow-hidden translate-y-8"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                                    <div className="flex justify-between items-start mb-6">
                                        <BarChart3 className="w-10 h-10 text-white" />
                                        <div className="bg-white/20 px-2 py-1 rounded text-[10px] text-white font-bold">LIVE</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-end space-x-1 h-12">
                                            {[40, 70, 50, 90, 60].map((h, i) => (
                                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-white/30 rounded-t-sm" />
                                            ))}
                                        </div>
                                        <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-white" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Card 3: Reach / Users */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 border border-slate-50 -translate-y-4"
                                >
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-${i + 1}00`} />
                                            ))}
                                        </div>
                                        <span className="text-xs font-black text-db-dark">10M+ Reach</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="h-2 w-full bg-slate-100 rounded" />
                                        <div className="h-2 w-full bg-slate-100 rounded" />
                                        <div className="h-2 w-3/4 bg-slate-100 rounded" />
                                    </div>
                                </motion.div>

                                {/* Card 4: Success Message */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] p-5 border border-slate-50 translate-y-4"
                                >
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-db-dark">Campaign Active</div>
                                            <div className="text-[10px] font-bold text-slate-400">Targeting Pan India</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-black text-db-dark mb-10 leading-tight">
                            How to Launch Your <span className="text-db-teal">Campaign?</span>
                        </h2>

                        <div className="space-y-8 relative">
                            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200" />

                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-20"
                                >
                                    <div className="absolute left-0 top-0 w-14 h-14 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg z-10 text-db-teal">
                                        {step.icon}
                                    </div>
                                    <div className="absolute left-0 -top-4 text-7xl font-black text-slate-100/80 -z-0 select-none">
                                        0{index + 1}
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-black text-db-dark mb-2">{step.title}</h3>
                                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
