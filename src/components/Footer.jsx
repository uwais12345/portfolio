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
