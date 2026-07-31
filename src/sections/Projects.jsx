import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        filterGroup: "AI & MERN",
        category: "Full Stack AI",
        title: "TenderGuard – AI Fraud Detection",
        shortDesc: "AI-powered web app analyzing public tender documents to detect procurement risks & fraud.",
        fullDesc: "Developed a full-stack web application using React.js and Python (FastAPI) backend to analyze public tender documents and identify potential fraud and procurement risks using AI. Integrated BERT-based NLP models to classify tender content and detect suspicious patterns; leveraged Gemini API for intelligent explanations of fraud risks.",
        highlights: [
            "BERT NLP classification for suspicious text detection",
            "Gemini API integration for automated fraud risk explanations",
            "FastAPI backend with secure RESTful endpoints & MySQL storage"
        ],
        tech: ["React.js", "Python", "FastAPI", "BERT", "Gemini API", "MySQL"],
        github: "https://github.com/uwais12345/TenderGuard",
        live: "#"
    },
    {
        id: 2,
        filterGroup: "AI & MERN",
        category: "MERN Stack AI",
        title: "AI Code Reviewer",
        shortDesc: "Automated GitHub Pull Request code reviewer powered by Groq AI (Llama 3.3).",
        fullDesc: "Built a full-stack AI-powered code review application using MERN stack (React.js, Node.js, Express.js, MongoDB) that automatically reviews GitHub Pull Requests in real time with Groq AI (Llama 3.3). Integrated GitHub Webhooks and Octokit API to fetch Pull Request changes and trigger automated code analysis.",
        highlights: [
            "Real-time GitHub Webhook triggers for instant PR analysis",
            "Llama 3.3 model via Groq AI for deep security & performance audits",
            "Interactive Tailwind CSS dashboard displaying repo metrics & code insights"
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "GitHub API", "Groq AI"],
        github: "https://github.com/uwais12345/AI-Reviewer",
        live: "#"
    },
    {
        id: 3,
        filterGroup: "Data Analysis",
        category: "Data Analysis",
        title: "HR Management Analysis",
        shortDesc: "Statistical attrition analysis on 1,400+ employee records in R with ggplot2 visual reports.",
        fullDesc: "Analyzed 1,400+ employee records in R; identified top 3 attrition drivers and delivered visual reports to support HR decision-making. Utilized ggplot2 and dplyr for data wrangling and graphical representation.",
        highlights: [
            "Identified top 3 employee attrition drivers across 1,400+ records",
            "Advanced data manipulation using dplyr and tidyverse in R",
            "Executive-ready graphical reports using ggplot2"
        ],
        tech: ["R", "ggplot2", "dplyr", "Statistical Analysis"],
        github: "https://github.com/uwais12345/HR-Management-Analysis-Using-R",
        live: "#"
    }
];

const categories = ["All", "AI & MERN", "Data Analysis"];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const filteredProjects = activeFilter === "All" 
        ? projectsData 
        : projectsData.filter(p => p.filterGroup === activeFilter);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full mb-8"></div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto p-1 bg-slate-100 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-700">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 ${
                                    activeFilter === cat
                                        ? 'bg-orange-600 text-white shadow-md'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                onClick={() => setSelectedProject(project)}
                                className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 flex flex-col cursor-pointer border border-slate-200 dark:border-slate-700 hover:border-orange-500 hover:shadow-2xl relative overflow-hidden group transition-colors duration-300"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-1 rounded-full text-slate-500 hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400 transition-colors"
                                                title="View Source Code on GitHub"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        <span className="text-xs text-orange-600 dark:text-orange-400 font-semibold group-hover:underline flex items-center gap-1">
                                            Details <ExternalLink size={14} />
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-grow text-sm">
                                    {project.shortDesc}
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
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Recruiter Deep-Dive Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 relative max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                                {selectedProject.category}
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                {selectedProject.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                                {selectedProject.fullDesc}
                            </p>

                            <div className="mb-6 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                    <Sparkles size={16} className="text-orange-500" /> Key Architecture Highlights
                                </h4>
                                <ul className="space-y-2">
                                    {selectedProject.highlights.map((highlight, i) => (
                                        <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                    <Layers size={16} className="text-orange-500" /> Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((t, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs rounded-full font-semibold border border-orange-500/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-medium text-center transition-colors flex items-center justify-center gap-2"
                                >
                                    <Github size={20} /> View Source Code
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
