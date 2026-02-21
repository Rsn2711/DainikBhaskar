import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-db-dark text-white pt-16 pb-10 overflow-hidden relative">
            {/* Top accent bar: teal-to-yellow gradient — premium brand flourish */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-db-teal via-amber-400 to-db-teal" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-2">
                            <img
                                src="/image/dainik-bhaskar-seeklogo.png"
                                alt="Dainik Bhaskar Logo"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed font-medium">
                            India's leading Hindi news network, dedicated to delivering honest journalism and providing unmatched reach for advertisers.
                        </p>
                        <div className="flex space-x-5">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                // Social icons: hover yellow bg — energy & action accent
                                <a key={idx} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 hover:text-gray-900 transition-all duration-300 group">
                                    <Icon className="w-5 h-5 text-white group-hover:text-gray-900 transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Editions — yellow section border accent */}
                    <div>
                        <h4 className="text-xl text-white mb-8 border-l-4 border-amber-400 pl-4 uppercase tracking-wider">
                            Top Editions
                        </h4>
                        <ul className="space-y-4 text-slate-400 text-lg font-medium">
                            {["Delhi NCR", "Mumbai", "Jaipur", "Bhopal", "Indore", "Ahmedabad"].map((item, idx) => (
                                <li key={idx}><a href="#" className="hover:text-amber-400 transition-colors duration-300 font-semibold">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Platforms — yellow section border accent */}
                    <div>
                        <h4 className="text-xl text-white mb-8 border-l-4 border-amber-400 pl-4 uppercase tracking-wider">
                            Platforms
                        </h4>
                        <ul className="space-y-4 text-slate-400 text-lg font-medium">
                            {["Print Newspaper", "Dainik Bhaskar Web", "Bhaskar App", "Money Bhaskar", "Divya Bhaskar", "Divya Marathi"].map((item, idx) => (
                                <li key={idx}><a href="#" className="hover:text-amber-400 transition-colors duration-300 font-semibold">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us — yellow section border accent */}
                    <div>
                        <h4 className="text-xl text-white mb-8 border-l-4 border-amber-400 pl-4 uppercase tracking-wider">
                            Contact Us
                        </h4>
                        <ul className="space-y-6 text-slate-400 text-lg font-medium">
                            <li className="flex items-start">
                                <MapPin className="w-6 h-6 text-db-teal mr-4 flex-shrink-0" />
                                <span>6, Dwarka Sadan, Press Complex, M.P. Nagar, Zone-1, Bhopal - 462011</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-6 h-6 text-db-teal mr-4 flex-shrink-0" />
                                <span>1800-XXX-XXXX</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-6 h-6 text-db-teal mr-4 flex-shrink-0" />
                                <span>adsales@dbcorp.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 text-center text-slate-500 font-bold tracking-wide uppercase text-sm">
                    <p>© 2026 Dainik Bhaskar Group. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
