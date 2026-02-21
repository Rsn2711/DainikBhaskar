import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Newspaper, MapPin } from 'lucide-react';

const benefits = [
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Massive Regional Reach",
        description: "Connect with audience in their own language across the length and breadth of the country."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "High Brand Credibility",
        description: "Leverage the trust of India's most read Hindi daily to boost your brand authority."
    },
    {
        icon: <Newspaper className="w-8 h-8" />,
        title: "Multi-platform Presence",
        description: "Your campaign spans across Print, Web, and App for 360-degree visibility."
    },
    {
        icon: <MapPin className="w-8 h-8" />,
        title: "Targeted City Editions",
        description: "Hyper-local targeting options to reach specific cities and demographics more effectively."
    }
];

const Benefits: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-db-dark mb-6">
                        Why Advertise with <span className="text-db-teal">Dainik Bhaskar?</span>
                    </h2>
                    {/* Yellow accent underline — energy micro-highlight */}
                    <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="premium-card p-10 group border-slate-100"
                        >
                            {/* Icon: teal default, yellow on hover */}
                            <div className="w-16 h-16 bg-teal-50 text-db-teal rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-400 group-hover:text-gray-900 transition-all duration-300 shadow-sm">
                                {benefit.icon}
                            </div>
                            <h3 className="text-2xl font-black text-db-dark mb-4 group-hover:text-db-teal transition-colors">{benefit.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
