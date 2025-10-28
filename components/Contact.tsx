
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Create Impact Together</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to learn more about our work? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                </div>
                <p className="text-green-300 font-medium">Available for new projects & collaborations</p>
            </div>
            <p className="text-gray-400">
              For partnership inquiries, project proposals, or volunteer opportunities, please reach out via the form or email us directly.
            </p>
            <div className="space-y-4 text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:impact@zuhasite.dev" className="hover:text-accent-orange transition">impact@zuhasite.dev</a></p>
              <p><strong>Location:</strong> Global Team, Remote First</p>
            </div>
          </div>
          
          <form className="bg-gray-800 p-8 rounded-lg shadow-2xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full bg-gray-700 border-gray-600 text-white rounded-md p-2 focus:ring-accent-orange focus:border-accent-orange" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input type="email" id="email" name="email" required className="w-full bg-gray-700 border-gray-600 text-white rounded-md p-2 focus:ring-accent-orange focus:border-accent-orange" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full bg-gray-700 border-gray-600 text-white rounded-md p-2 focus:ring-accent-orange focus:border-accent-orange"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-accent-orange to-orange-600 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
