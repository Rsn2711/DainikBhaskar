import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Calendar, ArrowLeft, Send, Check, ChevronLeft } from 'lucide-react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Hero: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Calendar state
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [calMonth, setCalMonth] = useState(today.getMonth());
    const [calYear, setCalYear] = useState(today.getFullYear());
    const [showCalendar, setShowCalendar] = useState(false);
    const [showTimeSlots, setShowTimeSlots] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        school: '',
        class: '',
        city: '',
        date: '',
        timeSlot: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateStep1 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Required';
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = '10 digits required';
        if (!formData.school.trim()) newErrors.school = 'Required';
        if (!formData.class) newErrors.class = 'Required';
        if (!formData.city.trim()) newErrors.city = 'Required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) setStep(2);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.timeSlot || !formData.date) return;

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const timeSlots = [
        "9 AM – 10 AM",
        "10 AM – 11 AM",
        "11 AM – 12 PM",
        "12 PM – 1 PM",
        "1 PM – 2 PM",
        "2 PM – 3 PM",
        "3 PM – 4 PM",
        "4 PM – 5 PM",
        "5 PM – 6 PM",
        "6 PM – 7 PM",
        "7 PM – 8 PM",
        "8 PM – 9 PM",
    ];

    // Calendar helpers
    const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

    const handlePrevMonth = () => {
        if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1); }
        else setCalMonth(m => m - 1);
    };
    const handleNextMonth = () => {
        if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1); }
        else setCalMonth(m => m + 1);
    };

    const isPastDate = (day: number) => {
        const d = new Date(calYear, calMonth, day);
        return d < today;
    };
    const isSelected = (day: number) => {
        const d = new Date(calYear, calMonth, day);
        return d.toISOString().split('T')[0] === formData.date;
    };
    const isToday = (day: number) => {
        return calYear === today.getFullYear() && calMonth === today.getMonth() && day === today.getDate();
    };
    const handleDayClick = (day: number) => {
        if (isPastDate(day)) return;
        const d = new Date(calYear, calMonth, day);
        setFormData({ ...formData, date: d.toISOString().split('T')[0], timeSlot: '' });
        setShowCalendar(false);
        setShowTimeSlots(true);
    };

    const daysInMonth = getDaysInMonth(calMonth, calYear);
    const firstDay = getFirstDayOfMonth(calMonth, calYear);

    const inputClasses = (name: string) => `w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors[name] ? 'border-red-500' : 'border-slate-200'} focus:border-db-teal focus:ring-4 focus:ring-teal-50 outline-none transition-all placeholder:text-slate-400 font-medium text-db-dark shadow-sm text-sm`;

    return (
        <div className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-24">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-50/30 rounded-full blur-3xl opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left SIDE: Content */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-4xl lg:text-6xl font-black text-db-dark leading-[1.1] mb-6">
                            Reach <span className="text-teal-600">10+ Crore</span> Readers
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Advertise with India’s leading Hindi news network and scale your brand presence across 65+ editions.
                        </p>
                        <ul className="space-y-3 mb-10">
                            {["Print + Digital Reach", "65+ Editions", "300+ District Coverage"].map((item, index) => (
                                <li key={index} className="flex items-center text-base font-bold text-db-dark">
                                    <div className="w-5 h-5 bg-teal-50 rounded-full flex items-center justify-center mr-3">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-db-teal" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="px-8 py-4 premium-gradient !text-white text-base font-bold rounded-xl shadow-lg shadow-teal-100 hover:scale-105 active:scale-95 transition-all">
                            Start Your Campaign
                        </button>
                    </motion.div>

                    {/* Right SIDE: Compact Multi-Step Form */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 lg:mt-0">
                        <div className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.12)] border border-slate-100 relative overflow-hidden min-h-[580px] flex flex-col mx-auto max-w-[480px] lg:max-w-none">

                            {isSuccess ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 flex-1 flex flex-col justify-center">
                                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                                        <Check className="w-10 h-10 stroke-[3]" />
                                    </div>
                                    <h3 className="text-2xl font-black text-db-dark mb-3">Submitted!</h3>
                                    <p className="text-slate-600 font-medium text-base leading-relaxed max-w-xs mx-auto">
                                        Your request for {formData.date ? new Date(formData.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : ''}, {formData.timeSlot} has been successfully submitted.
                                    </p>
                                    <button
                                        onClick={() => { setIsSuccess(false); setStep(1); setFormData({ name: '', email: '', mobile: '', school: '', class: '', city: '', date: '', timeSlot: '' }) }}
                                        className="mt-8 text-db-teal font-black uppercase tracking-widest text-xs hover:opacity-80 transition-opacity"
                                    >
                                        Send New Request
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <h3 className="text-2xl font-black text-db-dark tracking-tight">
                                                {step === 1 ? 'Get Started' : 'Schedule'}
                                            </h3>
                                            <p className="text-slate-400 font-bold text-xs mt-1">Step {step} of 2</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className={`h-2 w-8 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-db-teal shadow-md shadow-teal-50' : 'bg-slate-100'}`} />
                                            <div className={`h-2 w-8 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-db-teal shadow-md shadow-teal-50' : 'bg-slate-100'}`} />
                                        </div>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        {step === 1 ? (
                                            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4 flex-1">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Name</label>
                                                        <input type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={inputClasses('name')} />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email</label>
                                                        <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={inputClasses('email')} />
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Mobile Number</label>
                                                    <input type="tel" placeholder="10-digit Phone" value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })} className={inputClasses('mobile')} />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">School</label>
                                                    <input type="text" placeholder="Your School Name" value={formData.school} onChange={e => setFormData({ ...formData, school: e.target.value })} className={inputClasses('school')} />
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Class</label>
                                                        <select value={formData.class} onChange={e => setFormData({ ...formData, class: e.target.value })} className={inputClasses('class')}>
                                                            <option value="">Select</option>
                                                            {['6th', '7th', '8th', '9th', '10th', '11th', '12th'].map(c => <option key={c} value={c}>{c}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">City</label>
                                                        <input type="text" placeholder="Your City" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} className={inputClasses('city')} />
                                                    </div>
                                                </div>
                                                <button onClick={handleNext} className="w-full py-4 premium-gradient !text-white font-black text-base rounded-2xl shadow-lg shadow-teal-100 hover:opacity-90 transition-all flex items-center justify-center group mt-6">
                                                    Next Step <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </motion.div>
                                        ) : (
                                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">

                                                {/* Calendar Date Selector */}
                                                <div className="mb-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowCalendar(v => !v)}
                                                        className={`w-full flex items-center justify-between gap-3 mb-2 px-3 py-2 rounded-xl transition-colors ${showCalendar ? 'bg-teal-50 text-db-teal' : 'text-slate-400 hover:bg-slate-50'
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="w-3.5 h-3.5" />
                                                            <span className="font-black uppercase tracking-widest text-[9px]">
                                                                {formData.date
                                                                    ? new Date(formData.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
                                                                    : '1. Choose Date'}
                                                            </span>
                                                        </div>
                                                        <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${showCalendar ? 'rotate-90' : ''}`} />
                                                    </button>
                                                    {/* Calendar Widget */}
                                                    {showCalendar && <div className="bg-slate-50 rounded-2xl border border-slate-100 p-3">
                                                        {/* Month Navigation */}
                                                        <div className="flex items-center justify-between mb-2">
                                                            <button type="button" onClick={handlePrevMonth} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-200 transition-colors text-slate-500">
                                                                <ChevronLeft className="w-4 h-4" />
                                                            </button>
                                                            <span className="text-xs font-black text-slate-700 uppercase tracking-wider">
                                                                {MONTHS[calMonth]} {calYear}
                                                            </span>
                                                            <button type="button" onClick={handleNextMonth} className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-200 transition-colors text-slate-500">
                                                                <ChevronRight className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                        {/* Day Headers */}
                                                        <div className="grid grid-cols-7 mb-1">
                                                            {DAYS.map(d => (
                                                                <div key={d} className="text-center text-[9px] font-black text-slate-400 uppercase py-1">{d}</div>
                                                            ))}
                                                        </div>
                                                        {/* Day Grid */}
                                                        <div className="grid grid-cols-7 gap-y-0.5">
                                                            {Array.from({ length: firstDay }).map((_, i) => (
                                                                <div key={`empty-${i}`} />
                                                            ))}
                                                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                                                const day = i + 1;
                                                                const past = isPastDate(day);
                                                                const selected = isSelected(day);
                                                                const todayDay = isToday(day);
                                                                return (
                                                                    <button
                                                                        key={day}
                                                                        type="button"
                                                                        disabled={past}
                                                                        onClick={() => handleDayClick(day)}
                                                                        className={[
                                                                            'w-8 h-8 mx-auto text-xs font-bold rounded-lg transition-all flex items-center justify-center',
                                                                            past ? 'text-slate-300 cursor-not-allowed' : '',
                                                                            selected ? 'premium-gradient text-white shadow-md' : '',
                                                                            !selected && todayDay ? 'border border-db-teal text-db-teal font-black' : '',
                                                                            !selected && !past && !todayDay ? 'text-slate-700 hover:bg-teal-50 hover:text-db-teal' : '',
                                                                        ].join(' ')}
                                                                    >
                                                                        {day}
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
                                                        {/* Selected date label */}
                                                        {formData.date && (
                                                            <div className="mt-2 pt-2 border-t border-slate-200 text-center text-[10px] font-black text-db-teal uppercase tracking-wider">
                                                                {new Date(formData.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                                            </div>
                                                        )}
                                                    </div>}
                                                </div>

                                                {/* Time Selector */}
                                                <div className="mb-2">
                                                    <button
                                                        type="button"
                                                        disabled={!formData.date}
                                                        onClick={() => formData.date && setShowTimeSlots(v => !v)}
                                                        className={`w-full flex items-center justify-between gap-3 mb-2 px-3 py-2 rounded-xl transition-colors ${!formData.date ? 'text-slate-300 cursor-not-allowed' :
                                                            showTimeSlots ? 'bg-teal-50 text-db-teal' : 'text-slate-400 hover:bg-slate-50'
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <Send className="w-3.5 h-3.5" />
                                                            <span className="font-black uppercase tracking-widest text-[9px]">
                                                                {formData.timeSlot ? formData.timeSlot : '2. Select Time Slot'}
                                                            </span>
                                                        </div>
                                                        <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${showTimeSlots ? 'rotate-90' : ''}`} />
                                                    </button>
                                                    {showTimeSlots && (
                                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                                            {timeSlots.map(slot => (
                                                                <button
                                                                    key={slot}
                                                                    type="button"
                                                                    onClick={() => { setFormData({ ...formData, timeSlot: slot }); setShowTimeSlots(false); }}
                                                                    className={`py-2.5 px-1.5 rounded-xl text-[10px] font-black border transition-all duration-200 ${formData.timeSlot === slot
                                                                        ? 'premium-gradient !text-white border-transparent shadow-md scale-[1.03] z-10'
                                                                        : 'bg-slate-50 border-slate-100 text-slate-600 hover:border-teal-200 hover:bg-teal-50'
                                                                        }`}
                                                                >
                                                                    {slot}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex gap-3 mt-auto pt-3">
                                                    <button onClick={() => setStep(1)} className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center shrink-0">
                                                        <ArrowLeft className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={handleSubmit}
                                                        disabled={!formData.timeSlot || !formData.date || isSubmitting}
                                                        className={`flex-1 h-12 premium-gradient text-white font-black text-sm rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${!isSubmitting && 'hover:opacity-90 shadow-lg shadow-teal-100 hover:-translate-y-0.5'}`}
                                                    >
                                                        {isSubmitting ? (
                                                            <div className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                                                        ) : (
                                                            <>Confirm Booking <Send className="w-4 h-4" /></>
                                                        )}
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
