
import React from 'react';
import { motion } from 'framer-motion';

const ValueCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h4 className="font-bold text-xl text-primary-blue mb-2">{title}</h4>
    <p className="text-gray-600">{children}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission & Values</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in the power of technology to create a more equitable and sustainable world. Our work is guided by a deep commitment to our core values.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-center">
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://picsum.photos/seed/teamwork/800/600"
              alt="A diverse team collaborating on a project"
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            className="md:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ValueCard title="Impact-Driven">
              Every line of code we write is aimed at creating measurable, positive social change. We prioritize projects that have the potential for deep, lasting impact.
            </ValueCard>
            <ValueCard title="Collaborative Spirit">
              We partner with non-profits, NGOs, and community leaders, believing that the best solutions are co-created with those who have lived experience.
            </ValueCard>
            <ValueCard title="Ethical Technology">
              We are committed to building responsible and inclusive technology, ensuring fairness, privacy, and accessibility are at the forefront of our design process.
            </ValueCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
