import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            A Software Developer with hands-on experience in both Front-end and Back-end technologies.
                            Strong command in programming languages like C, Java, and Python, as well as proficiency in HTML, CSS, and JavaScript frameworks such as React.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Seek an internship opportunity to further apply and enhance my skills while gaining relevant industry experience.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                icon: <Code size={32} />,
                                title: "Full Stack Dev",
                                desc: "Java, Spring Boot, React.js"
                            },
                            {
                                icon: <Brain size={32} />,
                                title: "AI & ML",
                                desc: "Python, Data Analysis"
                            },
                            {
                                icon: <Rocket size={32} />,
                                title: "Data Visualization",
                                desc: "Tableau, R Language"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="text-orange-600 dark:text-orange-400 mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
