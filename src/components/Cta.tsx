import React from 'react';
import { ArrowRight } from 'lucide-react';

const Cta: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-indigo-100 text-lg mb-6">
                Partner with NovaTex for innovative digital marketing strategies tailored 
                to your business goals. Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#contact" 
                  className="px-8 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="#portfolio" 
                  className="px-8 py-3 rounded-lg border border-white bg-transparent text-white font-semibold hover:bg-white/10 transition duration-300 flex items-center justify-center"
                >
                  View Our Work
                </a>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Book a Free Consultation</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <button 
                    className="w-full px-4 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-300"
                  >
                    Schedule Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;