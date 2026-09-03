import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Programming Languages",
        description: "Core languages used across application development and problem solving.",
        skills: ["C", "Java", "Python"]
    },
    {
        category: "Web Technologies",
        description: "Frontend foundations for responsive, accessible interfaces.",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS"]
    },
    {
        category: "Frameworks, Tools & DBs",
        description: "Backend frameworks, delivery tools, data stores, and analytics.",
        skills: ["Spring Boot", "Docker", "Git", "GitHub", "MongoDB", "SQL", "MySQL", "Tableau", "R"]
    },
    {
        category: "Soft Skills",
        description: "How I collaborate, communicate, and deliver work reliably.",
        skills: [
            "Organization and time management",
            "Clear communication",
            "Independent and team delivery"
        ]
    },
    {
        category: "Certifications",
        description: "Additional coursework supporting cloud, IoT, and Java fundamentals.",
        skills: [
            "NPTEL: Introduction to Internet of Things",
            "NPTEL: Cloud Computing",
            "Udemy: Java Scratch Fundamentals"
        ]
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
        <section id="skills" className="py-12 sm:py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Technical Skills & Certifications</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Stagger Grid Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="group relative overflow-hidden bg-slate-50 dark:bg-slate-950/60 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-200/60 dark:border-slate-800/80"
                        >
                            <motion.div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400"
                                initial={{ scaleX: 0, opacity: 0 }}
                                whileInView={{ scaleX: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            />
                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 scale-75 rounded-full bg-blue-400/10 opacity-0 blur-2xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                            />
                            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
                                {category.category}
                            </h3>
                            <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{category.description}</p>

                            {/* Nested Stagger for Skill Badges */}
                            <motion.div
                                variants={badgeContainerVariants}
                                className={category.category === 'Certifications' ? 'space-y-3' : 'flex flex-wrap gap-2'}
                            >
                                {category.skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={badgeVariants}
                                        whileHover={{ scale: 1.08 }}
                                        className={category.category === 'Certifications'
                                            ? 'block border-l-2 border-blue-500/50 pl-3 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300'
                                            : 'rounded-full bg-slate-200/60 px-3 py-1 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:bg-blue-500/15 hover:text-blue-600 hover:shadow-xs dark:bg-slate-800/70 dark:text-slate-300 dark:hover:text-blue-400'}
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
