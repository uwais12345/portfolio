import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import netflixImg from '../assets/netflix-dashboard-v2.png';

const projectsData = [
    {
        title: "Netflix Shows Dashboard",
        description: "Developed an interactive Netflix Shows Dashboard using Tableau, enhancing data visualization and viewer insights.",
        tech: ["Tableau", "Data Visualization", "Data Analysis"],
        github: "#",
        live: "#",
        image: netflixImg
    },
    {
        title: "Online Parking Management System",
        description: "Designed and implemented an Online Parking Management System with functionalities for real-time bookings and user registration.",
        tech: ["Web Development", "Database Management"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "HR Management Analysis",
        description: "Performed comprehensive HR Management Analysis using R to provide insights into employee metrics.",
        tech: ["R Language", "Data Analysis", "Statistics"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        className="p-2 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
                                        title="View Code"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.live}
                                        className="p-2 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
                                        title="Live Demo"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-md font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
