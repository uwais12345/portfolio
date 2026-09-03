import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const experienceData = [
    {
        type: "experience",
        title: "Software Engineer Intern",
        institution: "ASTA SYSTECH",
        period: "June 2025 - August 2025",
        description: "Completed a 2-month internship building and debugging full-stack features, integrating APIs, and contributing within an Agile workflow.",
        technologies: ["Java", "Spring Boot", "ReactJS", "MySQL"]
    },
    {
        type: "education",
        title: "B.Tech - Computer Science And Business System",
        institution: "Francis Xavier Engineering College",
        period: "2023 - 2027",
        description: "CGPA: 8.04. Building a strong foundation in software engineering, algorithms, and business systems.",
        technologies: ["Data Structures", "Algorithms", "OOP"]
    },
    {
        type: "experience",
        title: "In-Plant Training",
        institution: "Codebind Technologies",
        period: "December 2023 - January 2024",
        description: "Completed a 4-week training focused on practical AI and machine-learning concepts, algorithms, and hands-on implementation.",
        technologies: ["Python", "AI/ML", "Data Processing"]
    },
    {
        type: "education",
        title: "Higher Secondary Certificate",
        institution: "Rose Mary Matric Higher Secondary School",
        period: "2021 - 2023",
        description: "Percentage: 80%. Developed a strong foundation in science and mathematics.",
        technologies: ["Science", "Mathematics"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const Experience = () => {
    return (
        <section id="experience" className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Experience & Education</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Timeline Stagger Container */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Animated Vertical Beam Line */}
                    <motion.div 
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-indigo-500 to-cyan-400 origin-top rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                    />

                    {experienceData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        const slideVariant = {
                            hidden: { opacity: 0, x: isEven ? 40 : -40, y: 20 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                            }
                        };

                        return (
                            <motion.div
                                key={index}
                                variants={slideVariant}
                                className={`relative flex flex-col md:flex-row gap-6 mb-8 ${
                                    isEven ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Glowing & Pulsing Timeline Dot */}
                                <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 mt-6">
                                    <motion.span
                                        animate={{ scale: [1, 1.9, 1], opacity: [0.7, 0, 0.7] }}
                                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                                        className="absolute w-6 h-6 bg-blue-500/50 rounded-full"
                                    />
                                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950 shadow-[0_0_14px_rgba(37,99,235,1)]" />
                                </div>

                                <div className="md:w-1/2 pl-8 md:pl-0">
                                    <motion.div 
                                        whileHover={{ y: -6, scale: 1.01 }}
                                        transition={{ duration: 0.2 }}
                                        className={`bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-200/60 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/40 group ${
                                            isEven ? 'md:mr-8' : 'md:ml-8'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                                            {item.type === 'education' ? <GraduationCap size={20} className="group-hover:scale-110 transition-transform duration-200" /> : <Briefcase size={20} className="group-hover:scale-110 transition-transform duration-200" />}
                                            <span className="text-xs font-bold uppercase tracking-wider">{item.type}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                        <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">{item.institution}</h4>
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-4">
                                            <Calendar size={14} />
                                            <span>{item.period}</span>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies and subjects">
                                            {item.technologies.map((technology) => (
                                                <span key={technology} className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
