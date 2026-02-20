const FeatureStrip: React.FC = () => {
    return (
        <div className="premium-gradient py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                            Special Festive Advertising Packages
                        </h2>
                        <p className="text-teal-50 text-xl font-medium opacity-90">
                            Maximum reach at optimized costs for the upcoming season.
                        </p>
                    </div>
                    <button className="px-10 py-5 bg-white !text-db-teal font-black text-lg rounded-xl hover:bg-slate-50 transition-all shadow-xl shadow-teal-900/20 hover:scale-105 active:scale-95">
                        Get Pricing Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureStrip;
