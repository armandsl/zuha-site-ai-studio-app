
import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';
import { CodeBracketIcon, CloudIcon, CircleStackIcon, CommandLineIcon } from './icons';

const skillsData: Skill[] = [
    { name: 'Web & Mobile Development', level: 95, icon: CodeBracketIcon },
    { name: 'Data Science & Analytics', level: 90, icon: CircleStackIcon },
    { name: 'Cloud & DevOps Engineering', level: 85, icon: CloudIcon },
    { name: 'Project Management & Strategy', level: 98, icon: CommandLineIcon },
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div>
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <skill.icon className="w-6 h-6 mr-3 text-secondary-green" />
                <h4 className="font-semibold text-gray-700">{skill.name}</h4>
            </div>
            <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div
                className="bg-gradient-to-r from-secondary-green to-green-400 h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            />
        </div>
    </div>
);

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Comprehensive Skillset</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            We bring a diverse range of technical and strategic skills to the table, ensuring we can tackle complex challenges from every angle. Our team is committed to continuous learning to stay at the forefront of technology.
                        </p>
                        <p className="mt-4 text-gray-600">
                            From initial concept and strategy to deployment and long-term support, we provide end-to-end solutions that are robust, scalable, and sustainable.
                        </p>
                    </div>
                    <div className="space-y-8">
                        {skillsData.map((skill) => (
                            <SkillBar key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
