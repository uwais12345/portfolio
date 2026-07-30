import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Programming Languages",
        skills: ["C", "Java", "Python"]
    },
    {
        category: "Web Technologies",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS"]
    },
    {
        category: "Frameworks, Tools & DBs",
        skills: ["Spring Boot", "Tableau", "R", "SQL", "MySQL", "MongoDB"]
    },
    {
        category: "Soft Skills",
        skills: [
            "Strong organizational and time-management skills",
            "Exceptional communication and interpersonal skills",
            "Ability to work independently and as part of a team"
        ]
    },
    {
        category: "Certifications",
        skills: [
            "NPTEL - Introduction To Internet Of Things",
            "NPTEL - Cloud Computing",
            "Udemy - Java Scratch Fundamentals"
        ]
    },
    {
        category: "Languages Known",
        skills: ["English", "Tamil"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
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

const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.25
        }
    }
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.3 }
    }
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Technical Skills & Certifications</h2>
                    <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Stagger Grid Container */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                            <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-4 border-b border-slate-100 dark:border-slate-700 pb-3">
                                {category.category}
                            </h3>

                            {/* Nested Stagger for Skill Badges */}
                            <motion.div 
                                variants={badgeContainerVariants}
                                className="flex flex-wrap gap-2"
                            >
                                {category.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={badgeVariants}
                                        whileHover={{ scale: 1.08 }}
                                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300 rounded-full text-xs font-semibold transition-colors duration-200 hover:bg-orange-500/15 hover:text-orange-600 dark:hover:text-orange-400 hover:shadow-xs cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
