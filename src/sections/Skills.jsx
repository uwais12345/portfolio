import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Technical Skills",
        skills: ["C", "Java", "Python", "HTML", "CSS", "Database SQL", "MySQL"]
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
        skills: ["NPTEL - Introduction To Internet Of Things", "Udemy - Java Scratch Fundamentals"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills & Certifications</h2>
                    <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700"
                        >
                            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
