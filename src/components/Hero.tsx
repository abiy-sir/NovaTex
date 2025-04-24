import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500 bg-opacity-20 border border-indigo-300 text-white text-sm font-medium mb-6 animate-fadeIn">
              Digital Marketing Agency in Addis Ababa
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slideUp">
              Elevate Your Brand's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Digital Presence</span>
            </h1>
            <p className="text-indigo-100 text-lg mb-8 max-w-lg animate-slideUp animation-delay-200">
              NovaTex helps businesses in Ethiopia and beyond connect with their audience through innovative digital marketing strategies tailored to your unique goals.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 animate-slideUp animation-delay-300">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold flex items-center justify-center hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:bg-opacity-10 transition duration-300 flex items-center justify-center">
                Our Work
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-lg animate-slideUp animation-delay-400">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-white">SEO Optimization</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-white">Content Strategy</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-white">Social Media</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-white">PPC Campaigns</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slideIn animation-delay-300">
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl absolute -inset-1.5 blur-sm opacity-70"></div>
              <img 
                src="/src/assets/NTT.png"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 animate-fadeIn animation-delay-500">
          <img src="https://via.placeholder.com/120x40/ffffff/666666?text=Client+Logo" alt="Client Logo" className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://via.placeholder.com/120x40/ffffff/666666?text=Client+Logo" alt="Client Logo" className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://via.placeholder.com/120x40/ffffff/666666?text=Client+Logo" alt="Client Logo" className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://via.placeholder.com/120x40/ffffff/666666?text=Client+Logo" alt="Client Logo" className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <img src="https://via.placeholder.com/120x40/ffffff/666666?text=Client+Logo" alt="Client Logo" className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;