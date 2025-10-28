
import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { ArrowTopRightOnSquareIcon } from './icons';

const mainProject: Project = {
    title: 'Project HealthBridge',
    category: 'Healthcare Access',
    description: 'A mobile platform connecting rural communities in Southeast Asia with remote healthcare professionals. The app features telemedicine consultations, a digital health records system, and an AI-powered symptom checker, resulting in a 40% increase in early-stage disease detection.',
    imageUrl: 'https://picsum.photos/seed/health/1200/800',
    link: '#',
};

const otherProjects: Project[] = [
    { title: 'EduConnect', category: 'Education', description: 'An e-learning platform providing free resources to underprivileged students.', imageUrl: 'https://picsum.photos/seed/education/600/400' },
    { title: 'GreenFuture', category: 'Environment', description: 'A carbon footprint tracker app that gamifies sustainable living choices.', imageUrl: 'https://picsum.photos/seed/nature/600/400' },
    { title: 'WaterPure Initiative', category: 'Clean Water', description: 'IoT sensors to monitor water quality in real-time for remote villages.', imageUrl: 'https://picsum.photos/seed/water/600/400' },
    { title: 'CodeForChange', category: 'Community', description: 'Mentorship program connecting volunteer developers with local non-profits.', imageUrl: 'https://picsum.photos/seed/community/600/400' },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-70 transition-all duration-300">
            <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500 w-full">
                <h4 className="text-xs uppercase font-semibold text-green-300">{project.category}</h4>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm mt-2">{project.description}</p>
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Impact in Action</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We're proud of the work we've done. Here are a few examples of how we've made a difference.
                    </p>
                </div>

                {/* Main Project Case Study */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="grid lg:grid-cols-2 gap-10 items-center bg-white p-8 rounded-xl shadow-xl mb-16"
                >
                    <div className="overflow-hidden rounded-lg">
                        <img src={mainProject.imageUrl} alt={mainProject.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-secondary-green uppercase">{mainProject.category}</p>
                        <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{mainProject.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{mainProject.description}</p>
                        <a href={mainProject.link} className="inline-flex items-center font-semibold text-primary-blue hover:underline">
                            View Case Study <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </motion.div>

                {/* Other Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
