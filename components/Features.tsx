
import React from 'react';
import { motion } from 'framer-motion';
import type { Feature } from '../types';
import { UsersIcon, ChartBarIcon, LightBulbIcon } from './icons';

const featuresData: Feature[] = [
  {
    title: 'Custom Software Development',
    description: 'We build bespoke web and mobile applications tailored to the unique needs of social impact organizations.',
    icon: LightBulbIcon,
  },
  {
    title: 'Data Analysis & Visualization',
    description: 'Transforming raw data into actionable insights to help partners measure impact and make informed decisions.',
    icon: ChartBarIcon,
  },
  {
    title: 'Digital Capacity Building',
    description: 'Empowering our partners with the skills and tools they need to thrive in a digital world through training and support.',
    icon: UsersIcon,
  },
];

const FeatureCard: React.FC<{ feature: Feature, index: number }> = ({ feature, index }) => (
  <motion.div
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="bg-gradient-to-r from-blue-100 to-green-100 h-16 w-16 rounded-full flex items-center justify-center mb-6">
      <feature.icon className="h-8 w-8 text-primary-blue" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Do</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our expertise spans the full project lifecycle, from initial strategy to final implementation and support.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
