import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projectsData = [
    {
        category: "Full Stack AI",
        title: "TenderGuard – AI Fraud Detection",
        description: "Developed a web app using React and FastAPI to analyze public tender documents and identify fraud using AI. Built REST APIs and integrated BERT-based NLP models; leveraged Gemini API for intelligent explanations.",
        tech: ["React.js", "Python", "FastAPI", "BERT", "Gemini API", "MySQL"],
        github: "#",
        live: "#"
    },
    {
        category: "MERN Stack AI",
        title: "AI Code Reviewer",
        description: "Built an AI-powered code review application using MERN stack that automatically reviews GitHub Pull Requests in real time with Groq AI (Llama 3.3). Developed interactive dashboard with Tailwind CSS.",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "GitHub API", "Groq AI"],
        github: "#",
        live: "#"
    },
    {
        category: "Data Analysis",
        title: "HR Management Analysis",
        description: "Analyzed 1,400+ employee records in R; identified top 3 attrition drivers and delivered visual reports to support HR decision-making.",
        tech: ["R", "ggplot2", "dplyr", "Statistical Analysis"],
        github: "https://github.com/uwais12345/HR-Management-Analysis-Using-R",
        live: "#"
    }
];

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 transition-all duration-500 ease-out flex flex-col cursor-pointer border-l-4 ${
                                hoveredIndex === index 
                                    ? 'scale-105 opacity-100 border-orange-600 shadow-2xl z-10' 
                                    : hoveredIndex !== null 
                                        ? 'scale-95 opacity-50 border-transparent shadow-sm z-0' 
                                        : 'scale-100 opacity-100 border-transparent shadow-lg z-0'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <a
                                    href={project.github}
                                    className="text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                                    title="View Code"
                                >
                                    <Github size={24} />
                                </a>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-md font-medium"
                                    >
                                        {tech}
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

export default Projects;
