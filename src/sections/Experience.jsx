import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const experienceData = [
    {
        type: "experience",
        title: "Software Engineer Intern",
        institution: "ASTA SYSTECH",
        period: "June 2025 - August 2025",
        description: "Completed a 2-month internship as a Software Engineering Intern at Asta Systech. Worked on Java, Spring Boot, ReactJS, and MySQL for full-stack development. Gained hands-on experience in API integration, debugging, and Agile workflow."
    },
    {
        type: "education",
        title: "B.Tech - Computer Science And Business System",
        institution: "Francis Xavier Engineering College",
        period: "2023 - 2027",
        description: "CGPA: 8.04. Cultivating a strong foundation in engineering, algorithms, and business systems."
    },
    {
        type: "experience",
        title: "In-Plant Training",
        institution: "Codebind Technologies",
        period: "December 2023 - January 2024",
        description: "Completed a 4-week in-plant training focused on Artificial Intelligence and Machine Learning. Gained practical knowledge of AI/ML concepts and algorithms through hands-on work."
    },
    {
        type: "education",
        title: "Higher Secondary Certificate",
        institution: "Rose Mary Matric Higher Secondary School",
        period: "2021 - 2023",
        description: "Percentage: 80%. Strong foundation in Science and Mathematics."
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

const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1] 
        }
    }
};

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Experience & Education</h2>
                    <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Timeline Stagger Container */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-700"></div>

                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUpVariant}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Glowing Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white dark:border-slate-900 z-10 mt-6 shadow-[0_0_12px_rgba(249,115,22,0.9)]"></div>

                            <div className="md:w-1/2 pl-8 md:pl-0">
                                <motion.div 
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className={`bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60 dark:border-slate-700/60 ${
                                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                    }`}
                                >
                                    <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-2">
                                        {item.type === 'education' ? <GraduationCap size={20} /> : <Briefcase size={20} />}
                                        <span className="text-xs font-bold uppercase tracking-wider">{item.type}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                                    <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">{item.institution}</h4>
                                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-4">
                                        <Calendar size={14} />
                                        <span>{item.period}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
