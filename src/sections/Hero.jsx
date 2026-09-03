import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 pb-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
            {/* Ambient Background Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">

                    {/* Left/Main Column: Text Details, Mobile Profile Image, Quote, CTAs */}
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                </span>
                                Available for Full-Time / Internship Roles
                                </div>
                            </div>

                            {/* 2. Main Heading Name */}
                            <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white sm:whitespace-nowrap">
                                Mohamed Uwais M N
                            </h1>

                            {/* 3. Role Sub-heading */}
                            <h2 className="text-sm sm:text-base font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                Software Developer
                            </h2>
                        </motion.div>

                        {/* 4. Profile Picture (VISIBLE HERE ON MOBILE, HIDDEN ON DESKTOP) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="block md:hidden my-6 flex justify-center"
                        >
                            <div className="p-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 rounded-full shadow-2xl animate-float inline-block">
                                <div className="p-1.5 bg-slate-50 dark:bg-slate-950 rounded-full">
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

                        {/* 5. Recruiter Value Proposition */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="my-6 max-w-xl rounded-r-2xl border-l-4 border-blue-600 bg-slate-200/40 py-3 pl-6 text-left text-base leading-relaxed text-slate-700 dark:bg-slate-900/60 dark:text-slate-300 sm:text-lg"
                        >
                            I build dependable full-stack products and AI-powered tools with React, Node.js, Java, and Python, turning complex requirements into clear, useful experiences.
                        </motion.blockquote>

                        {/* 6. CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:flex-wrap md:justify-start"
                        >
                            <a
                                href="#contact"
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 sm:w-auto"
                            >
                                Let's Connect <ArrowRight size={18} />
                            </a>
                            <a
                                href="#projects"
                                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400 sm:w-auto"
                            >
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a
                                href="/uwaisresume.pdf"
                                download
                                className="flex w-full items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 sm:w-auto"
                            >
                                Resume <Download size={17} />
                            </a>
                        </motion.div>

                        {/* 7. Recruiter Impact Metrics Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800"
                        >
                            <div>
                                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">10+</h4>
                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Bugs Resolved</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">1.4k+</h4>
                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Records Analyzed</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">8.04</h4>
                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">CGPA</p>
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
                        <div className="p-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 rounded-full shadow-2xl animate-float">
                            <div className="p-1.5 bg-slate-50 dark:bg-slate-950 rounded-full">
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
