import React, { useEffect, useRef, useState } from 'react';
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
    const closeButtonRef = useRef(null);
    const projectTriggerRefs = useRef({});

    const filteredProjects = activeFilter === "All" 
        ? projectsData 
        : projectsData.filter(p => p.filterGroup === activeFilter);

    useEffect(() => {
        if (!selectedProject) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject]);

    const closeProjectModal = () => {
        const projectId = selectedProject?.id;
        setSelectedProject(null);
        if (projectId) {
            projectTriggerRefs.current[projectId]?.focus();
        }
    };

    return (
        <section id="projects" className="py-12 sm:py-16 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto p-1 bg-slate-100 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 ${
                                    activeFilter === cat
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                                ref={(element) => { projectTriggerRefs.current[project.id] = element; }}
                                tabIndex="0"
                                role="button"
                                aria-haspopup="dialog"
                                aria-label={`View details for ${project.title}`}
                                onClick={() => setSelectedProject(project)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        setSelectedProject(project);
                                    }
                                }}
                                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-950/60 dark:focus:ring-offset-slate-900 sm:p-7"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-70 transition-opacity group-hover:opacity-100" />
                                <div className="flex justify-between items-start mb-6">
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-1 rounded-full text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                                                title="View Source Code on GitHub"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => setSelectedProject(project)}
                                            className="flex items-center gap-1 text-xs font-semibold text-blue-600 underline-offset-4 transition-colors group-hover:underline dark:text-blue-400"
                                        >
                                            Details <ExternalLink size={14} />
                                        </button>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-grow text-sm">
                                    {project.shortDesc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-md font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Recruiter Deep-Dive Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
                        role="presentation"
                        onMouseDown={(event) => {
                            if (event.target === event.currentTarget) closeProjectModal();
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="project-modal-title"
                            aria-describedby="project-modal-description"
                            onMouseDown={(event) => event.stopPropagation()}
                            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-8"
                        >
                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={closeProjectModal}
                                aria-label="Close project details"
                                className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-slate-800 dark:hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                                {selectedProject.category}
                            </div>

                            <h3 id="project-modal-title" className="mb-4 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                                {selectedProject.title}
                            </h3>

                            <p id="project-modal-description" className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                                {selectedProject.fullDesc}
                            </p>

                            <div className="mb-6 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                    <Sparkles size={16} className="text-blue-500" /> Key Architecture Highlights
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
                                    <Layers size={16} className="text-blue-500" /> Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((t, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs rounded-full font-semibold border border-blue-500/20">
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
                                    className="flex-1 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-center transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-blue-500/20"
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
