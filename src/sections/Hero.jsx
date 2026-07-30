import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Copy, Check, Sparkles } from 'lucide-react';
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
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 space-y-8 text-center md:text-left">
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

                            <h2 className="text-xl md:text-2xl font-medium text-orange-600 dark:text-orange-400 mb-2">
                                Hello, I'm
                            </h2>
                            <h1 className="text-3xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 dark:from-orange-400 dark:to-rose-400 animate-text-gradient">
                                Mohamed Uwais M N
                            </h1>
                            <h3 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300">
                                Aspiring Software Developer
                            </h3>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-600 dark:text-slate-300 max-w-lg mx-auto md:mx-0"
                        >
                            Aspiring Software Developer with hands-on experience in both front-end and back-end technologies.
                            Seeking an internship opportunity to apply and enhance my skills while gaining relevant industry experience.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
                        >
                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Contact Me <ArrowRight size={20} />
                            </a>
                            <a
                                href="/uwaisresume.pdf"
                                download
                                className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:border-orange-600 hover:text-orange-600 dark:hover:border-orange-400 dark:hover:text-orange-400 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                Download Resume <Download size={20} />
                            </a>
                            <button
                                onClick={copyEmail}
                                className="p-3 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-orange-600 hover:text-orange-600 dark:hover:border-orange-400 dark:hover:text-orange-400 transition-colors flex items-center justify-center relative"
                                title="Copy Email to Clipboard"
                            >
                                {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} />}
                                {copied && (
                                    <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs px-2 py-1 rounded shadow text-nowrap">
                                        Email Copied!
                                    </span>
                                )}
                            </button>
                        </motion.div>

                        {/* Recruiter Impact Metrics Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800"
                        >
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">15+</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Bugs Resolved</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">1.4k+</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Records Analyzed</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">8.04</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">CGPA (CSBS)</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">3+</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">AI & MERN Apps</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-float"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                            <img
                                src={profileImg}
                                alt="Mohamed Uwais M N"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
