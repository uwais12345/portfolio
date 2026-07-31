import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Copy, Check } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("uwaismohamed208@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="home" className="min-h-screen flex items-center pt-24 pb-16 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            {/* Ambient Background Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-300 dark:bg-orange-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-rose-300 dark:bg-rose-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-300 dark:bg-amber-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    
                    {/* Left/Main Column: Text Details, Mobile Profile Image, Quote, CTAs */}
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Open to Work Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Available for Full-Time / Internship Roles
                            </div>

                            {/* 1. Location Header Tag (TOP ON MOBILE) */}
                            <div className="text-xs font-extrabold text-orange-600 dark:text-orange-400 uppercase tracking-[0.25em] mb-2">
                                TIRUNELVELI, TAMIL NADU, INDIA
                            </div>

                            {/* 2. Main Heading Name */}
                            <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white whitespace-nowrap">
                                Mohamed Uwais M N
                            </h1>

                            {/* 3. Role Sub-heading */}
                            <h2 className="text-sm sm:text-base font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                Full-Stack Software Engineer
                            </h2>
                        </motion.div>

                        {/* 4. Profile Picture (VISIBLE HERE ON MOBILE, HIDDEN ON DESKTOP) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="block md:hidden my-6 flex justify-center"
                        >
                            <div className="p-1.5 bg-gradient-to-tr from-orange-500 via-rose-500 to-amber-500 rounded-full shadow-2xl animate-float inline-block">
                                <div className="p-1.5 bg-slate-50 dark:bg-slate-900 rounded-full">
                                    <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-white/40 dark:border-slate-800/40 relative">
                                        <img
                                            src={profileImg}
                                            alt="Mohamed Uwais M N"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 5. Executive Quote Block */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="border-l-4 border-orange-500 pl-6 py-2 my-6 text-base sm:text-lg italic text-slate-700 dark:text-slate-300 leading-relaxed font-serif bg-slate-200/40 dark:bg-slate-800/40 rounded-r-2xl max-w-xl mx-auto md:mx-0 text-left"
                        >
                            "Full-stack software developer with hands-on experience in Java, Spring Boot, React.js, Node.js, and MySQL. 
                            Driven by solving complex problems, building secure APIs, and shipping production tools."
                        </motion.blockquote>

                        {/* 6. CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-2"
                        >
                            <a
                                href="#contact"
                                className="px-8 py-3.5 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 w-full sm:w-auto text-sm"
                            >
                                Contact Me <ArrowRight size={18} />
                            </a>
                            <a
                                href="/uwaisresume.pdf"
                                download
                                className="px-8 py-3.5 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:border-orange-600 hover:text-orange-600 dark:hover:border-orange-400 dark:hover:text-orange-400 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-sm"
                            >
                                Download Resume <Download size={18} />
                            </a>
                            <button
                                onClick={copyEmail}
                                className="p-3.5 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-orange-600 hover:text-orange-600 dark:hover:border-orange-400 dark:hover:text-orange-400 transition-all duration-300 flex items-center justify-center relative"
                                title="Copy Email to Clipboard"
                            >
                                {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                                {copied && (
                                    <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs px-2.5 py-1 rounded shadow text-nowrap font-medium">
                                        Email Copied!
                                    </span>
                                )}
                            </button>
                        </motion.div>

                        {/* 7. Recruiter Impact Metrics Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800"
                        >
                            <div>
                                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">15+</h4>
                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Bugs Resolved</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">1.4k+</h4>
                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Records Analyzed</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">8.04</h4>
                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">CGPA (CSBS)</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">3+</h4>
                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">AI & MERN Apps</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Profile Picture (HIDDEN ON MOBILE, VISIBLE ON DESKTOP) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden md:flex md:w-1/2 justify-center items-center"
                    >
                        <div className="p-1.5 bg-gradient-to-tr from-orange-500 via-rose-500 to-amber-500 rounded-full shadow-2xl animate-float">
                            <div className="p-1.5 bg-slate-50 dark:bg-slate-900 rounded-full">
                                <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-white/40 dark:border-slate-800/40 relative">
                                    <img
                                        src={profileImg}
                                        alt="Mohamed Uwais M N"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
