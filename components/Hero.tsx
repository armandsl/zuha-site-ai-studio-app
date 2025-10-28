
import React from 'react';
import { motion } from 'framer-motion';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-secondary-green">{value}</p>
    <p className="text-sm md:text-base text-gray-500 mt-1">{label}</p>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-20">
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-fast"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          Technology for <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-secondary-green">Social Good</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600"
        >
          We are the Zuha Site Social Impact Team, dedicated to leveraging cutting-edge technology to solve pressing social challenges and empower communities worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary-blue to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Involved
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <StatItem value="50+" label="Projects Completed" />
          <StatItem value="1M+" label="Lives Impacted" />
          <StatItem value="20+" label="Partner Organizations" />
          <StatItem value="12" label="Countries Reached" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
