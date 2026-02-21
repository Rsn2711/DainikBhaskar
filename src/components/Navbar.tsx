import { Phone } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src="/image/dainik-bhaskar-seeklogo.png"
                            alt="Dainik Bhaskar Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-center text-db-dark font-semibold">
                            <Phone className="w-5 h-5 text-db-teal mr-2 transition-colors duration-300" />
                            <span>Contact: 1800-XXX-XXXX</span>
                        </div>
                        {/* Yellow accent CTA — strategic energy accent on navbar */}
                        <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-3 rounded-xl font-bold transition-all shadow-md hover:-translate-y-1 hover:scale-105 active:scale-95">
                            Advertise With Us
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button className="text-db-text">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
