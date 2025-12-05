import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projectsData = [
    {
        category: "Data Viz",
        title: "Netflix Shows Dashboard",
        description: "Developed an interactive Netflix Shows Dashboard using Tableau, enhancing data visualization and viewer insights",
        tech: ["Tableau", "Data Visualization", "Data Analysis"],
        github: "https://github.com/uwais12345/NetflixDashboard-Using-Tableau",
        live: "#"
    },
    {
        category: "Java",
        title: "Multiple File Uploading System",
        description: "Developed a secure multi-file upload system using Java sockets with real-time updates and integrated analytics",
        tech: ["Java", "Sockets", "Real-time Updates"],
        github: "https://github.com/uwais12345/MultipleFileuploadingSystem-in-CN-Project",
        live: "#"
    },
    {
        category: "R",
        title: "HR Management Analysis",
        description: "Performed comprehensive HR Management Analysis using R to provide insights into employee metrics",
        tech: ["R Language", "Data Analysis", "Statistics"],
        github: "https://github.com/uwais12345/HR-Management-Analysis-Using-R",
        live: "#"
    }
];

const Projects = () => {
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
                            whileHover={{ y: -10 }}
                            className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 flex flex-col"
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
