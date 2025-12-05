import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-16 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 space-y-8 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-xl md:text-2xl font-medium text-orange-600 dark:text-orange-400 mb-2">
                                Hello, I'm
                            </h2>
                            <h1 className="text-3xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                                Mohamed Uwais M N
                            </h1>
                            <h3 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300">
                                Software Developer
                            </h3>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0"
                        >
                            Passionate about leveraging technology to solve real-world challenges.
                            Specializing in Web Development and AI/ML.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                            >
                                Contact Me <ArrowRight size={20} />
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:border-orange-600 hover:text-orange-600 dark:hover:border-orange-400 dark:hover:text-orange-400 transition-colors flex items-center justify-center gap-2"
                            >
                                Download Resume <Download size={20} />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(249,115,22,0.5)] hover:border-orange-400 dark:hover:border-orange-500 cursor-pointer group">
                            <img
                                src={profileImg}
                                alt="Mohamed Uwais M N"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
