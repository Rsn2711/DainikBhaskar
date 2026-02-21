import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What is the minimum budget for a campaign?",
        answer: "We offer flexible packages starting from small hyper-local ads to large national campaigns. Our experts will help you optimize your spend based on your goals."
    },
    {
        question: "How soon can a campaign go live?",
        answer: "For digital campaigns, we can go live in as little as 24-48 hours. Print campaigns typically require a 3-5 day lead time depending on the edition."
    },
    {
        question: "Do you offer digital-only packages?",
        answer: "Yes, we have robust digital-only advertising options across our website and mobile application with advanced targeting capabilities."
    },
    {
        question: "Can I target specific cities or regions?",
        answer: "Absolutely. With 65+ editions covering 300+ districts, you can target your audience at a hyper-local level in specific cities."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className={`border-b transition-colors duration-300 ${isOpen ? 'border-amber-200' : 'border-gray-100'}`}>
            <button
                className="w-full py-6 flex justify-between items-center text-left group"
                onClick={onClick}
            >
                {/* Active question highlights with yellow underline — strategic active state */}
                <span className={`text-xl font-black transition-colors duration-300 ${isOpen ? 'text-amber-500' : 'text-db-dark group-hover:text-amber-500'}`}>
                    {question}
                </span>
                <ChevronDown className={`w-6 h-6 transform transition-all duration-300 ${isOpen ? 'rotate-180 text-amber-500' : 'text-slate-400 group-hover:text-amber-500'}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-600 text-lg leading-relaxed font-medium">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-black text-db-dark mb-6">Common Questions</h2>
                    <p className="text-gray-500 text-lg">Everything you need to know about advertising with us.</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-3xl p-4 lg:p-8">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            {...faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
