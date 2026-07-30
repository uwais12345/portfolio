import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, GraduationCap, Globe, Briefcase, Download, ArrowUpRight } from 'lucide-react';

const About = () => {
    const specializations = [
        {
            title: "Full Stack Java",
            tech: ["Java", "Spring Boot", "REST APIs", "MySQL"]
        },
        {
            title: "MERN Stack",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js"]
        },
        {
            title: "AI & ML Solutions",
            tech: ["Python", "FastAPI", "BERT", "Gemini & Groq AI"]
        },
        {
            title: "Data Analytics",
            tech: ["R", "ggplot2", "dplyr", "Tableau"]
        }
    ];

    const quickFacts = [
        { icon: <GraduationCap size={18} />, label: "Degree", val: "B.Tech CSBS (CGPA: 8.04)" },
        { icon: <MapPin size={18} />, label: "Location", val: "Tirunelveli, Tamil Nadu" },
        { icon: <Globe size={18} />, label: "Languages", val: "English, Tamil" },
        { icon: <Briefcase size={18} />, label: "Status", val: "Open for Hire" }
    ];

    const principles = [
        "Clean, Modular Code Architecture",
        "AI Model & API Integration",
        "Responsive & Mobile-First UI",
        "Database Optimization & SQL"
    ];

    // Scroll Reveal Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const slideLeftVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const slideRightVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const itemPopVariant = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
            {/* Subtle Ambient Background Light */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">About Me</h2>
                    <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content Layout with Scroll Reveal */}
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Biography & Quick Facts (7 cols) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Bio Card with Direct CV Action */}
                        <motion.div 
                            variants={slideLeftVariant}
                            className="p-8 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border-l-4 border-orange-500 border-t border-r border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm relative group"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Passionate Software Engineer & Problem Solver
                            </h3>
                            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                Full-stack software developer with hands-on experience in Java, Spring Boot, React.js, Node.js, and MySQL. 
                                Proven track record in building REST APIs, AI-powered applications, and debugging production workflows.
                            </p>
                            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                Strong foundation in Object-Oriented Programming (OOP), Data Structures, Algorithms, and data processing. 
                                Eager to leverage technical skills in a challenging Software Engineering role.
                            </p>

                            {/* Recruiter Quick Call-to-Action */}
                            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
                                <a
                                    href="/uwaisresume.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    <Download size={16} /> Download Full CV
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline"
                                >
                                    Get In Touch Direct <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Quick Facts Pills Stagger with Hover Lift */}
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {quickFacts.map((fact, idx) => (
                                <motion.div 
                                    key={idx}
                                    variants={itemPopVariant}
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    className="p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3.5 hover:border-orange-500/40 transition-colors shadow-xs"
                                >
                                    <div className="p-2.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
                                        {fact.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{fact.label}</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{fact.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Core Competencies Checklist */}
                        <motion.div 
                            variants={itemPopVariant}
                            className="p-6 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-700/60"
                        >
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                                Core Engineering Principles
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                                {principles.map((principle, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                                        <span>{principle}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Technical Focus Areas Cards (5 cols) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="lg:col-span-5 space-y-4"
                    >
                        <motion.h3 
                            variants={slideRightVariant}
                            className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2"
                        >
                            Technical Specializations
                        </motion.h3>

                        {specializations.map((spec, index) => (
                            <motion.div
                                key={index}
                                variants={slideRightVariant}
                                whileHover={{ x: 6 }}
                                className="p-5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 border-l-2 hover:border-l-4 hover:border-l-orange-500 hover:border-slate-300 dark:hover:border-slate-600 shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
                            >
                                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    {spec.title}
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {spec.tech.map((t, i) => (
                                        <motion.span 
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-2.5 py-0.5 bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-md font-medium transition-colors group-hover:bg-orange-500/10 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                                        >
                                            {t}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
