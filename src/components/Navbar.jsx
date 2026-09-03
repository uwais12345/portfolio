import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [activeSection, setActiveSection] = useState('home');

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        // Lock body scroll when mobile menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

                if (visibleSection) setActiveSection(visibleSection.target.id);
            },
            { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.3, 0.6] }
        );

        document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];
    const mobileNavLinks = navLinks.filter((link) => link.name !== 'Projects');

    return (
        <nav className="fixed w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <motion.div
                className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 origin-left"
                style={{ scaleX }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* 1. Mobile Inline Horizontal Opened Header */}
                    {isOpen ? (
                        <motion.div
                            id="mobile-navigation"
                            role="menu"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="md:hidden flex items-center justify-between w-full gap-2"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto py-2 text-sm font-semibold [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                {mobileNavLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(false);
                                            const targetId = link.href.replace('#', '');
                                            const element = document.getElementById(targetId);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        role="menuitem"
                                        className={`whitespace-nowrap px-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 ${activeSection === link.href.slice(1) ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400'}`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                                <button
                                    onClick={toggleTheme}
                                    className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:bg-slate-800"
                                    aria-label="Toggle Theme"
                                >
                                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-md p-2 text-slate-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:text-blue-400"
                                    aria-label="Close menu"
                                >
                                    <X size={22} />
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        /* 2. Default Closed Mobile Header & Desktop View */
                        <>
                            <div className="flex-shrink-0">
                                <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                                    Uwais
                                </a>
                            </div>

                            {/* Desktop Links */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 ${activeSection === link.href.slice(1) ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                    <button
                                        onClick={toggleTheme}
                                        className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:bg-slate-800"
                                        aria-label="Toggle Theme"
                                    >
                                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Hamburger Trigger */}
                            <div className="md:hidden flex items-center gap-2">
                                <button
                                    onClick={toggleTheme}
                                    className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                                    aria-label="Toggle Theme"
                                >
                                    {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                                </button>
                                <button
                                    onClick={() => setIsOpen(true)}
                                    aria-expanded={isOpen}
                                    aria-controls="mobile-navigation"
                                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md p-3 text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                                    aria-label="Open menu"
                                >
                                    <Menu size={24} />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
