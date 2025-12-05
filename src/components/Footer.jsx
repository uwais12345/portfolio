import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                            Mohamed Uwais M N
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            Passionate Junior Web Developer & AI Enthusiast
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://www.linkedin.com/in/mohamed-uwais"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:uwaismohamed208@gmail.com"
                            className="text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        >
                            <Mail size={24} />
                        </a>
                        <a
                            href="tel:+918056793899"
                            className="text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                        >
                            <Phone size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Mohamed Uwais M N. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
