import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        const homeElement = document.getElementById('home');
        if (homeElement) {
            homeElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-1">
                            Mohamed Uwais M N
                        </h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            Full-Stack Software Engineer & AI Specialist
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-5">
                        <a
                            href="https://github.com/uwais12345"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500 transition-colors shadow-xs"
                            title="GitHub Profile"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mohamed-uwais-m-n/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500 transition-colors shadow-xs"
                            title="LinkedIn Profile"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://leetcode.com/u/MOHAMED_UWAIS_MN/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500 transition-colors shadow-xs flex items-center justify-center"
                            title="LeetCode Profile"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.515 1.879 0 .514-.515.514-1.365 0-1.879l-2.697-2.607c-1.001-1.002-2.335-1.464-3.705-1.464s-2.704.462-3.705 1.464l-4.319 4.38c-1.001 1.001-1.464 2.335-1.464 3.705s.463 2.704 1.464 3.705l4.332 4.363c1.001 1.002 2.335 1.464 3.705 1.464s2.704-.462 3.705-1.464l2.697-2.607c.514-.514.514-1.364 0-1.878-.514-.515-1.365-.515-1.879 0zM20.811 13.01H10.666c-.728 0-1.318-.59-1.318-1.318s.59-1.318 1.318-1.318h10.145c.728 0 1.318.59 1.318 1.318s-.59 1.318-1.318 1.318zM13.627 2.825l-2.316 2.238c-.514.515-.514 1.365 0 1.879.514.514 1.365.514 1.879 0l2.316-2.238c.514-.515.514-1.365 0-1.879-.514-.515-1.365-.515-1.879 0z"/>
                            </svg>
                        </a>
                        <a
                            href="mailto:uwaismohamed208@gmail.com"
                            className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500 transition-colors shadow-xs"
                            title="Send Email"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href="tel:+918056793899"
                            className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-500 transition-colors shadow-xs"
                            title="Call Phone"
                        >
                            <Phone size={20} />
                        </a>

                        {/* Back to Top Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={scrollToTop}
                            className="p-2.5 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-md ml-2"
                            title="Back to Top"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-500 text-xs sm:text-sm">
                    <p>&copy; {new Date().getFullYear()} Mohamed Uwais M N. Built with React.js, Tailwind CSS & Lenis.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
