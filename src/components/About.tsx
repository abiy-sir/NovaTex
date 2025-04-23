import React from 'react';
import { CheckCircle, MapPin, Users, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 opacity-20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500 opacity-20 rounded-lg"></div>
              
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://msftstories.thesourcemediaassets.com/sites/133/2020/06/youngladysmiling-960x640.jpg" 
                  alt="NovaTex Team" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg animate-bounce-slow">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-red-500 mr-2" />
                  <span className="font-semibold text-gray-800">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Pioneering Digital Excellence in <span className="text-indigo-600">East Africa</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              Founded in 2025, NovaTex has quickly established itself as a leading digital marketing agency in Addis Ababa. 
              We combine global best practices with deep local insights to create marketing strategies that truly resonate 
              with Ethiopian and East African audiences.
            </p>
            
            <p className="text-gray-600 mb-8">
              Our team of experts brings together diverse skills in digital marketing, design, analytics, and technology 
              to deliver holistic solutions that drive real business growth. We're passionate about helping African businesses 
              establish a strong digital presence and connect with customers in meaningful ways.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-indigo-100 mr-4">
                  <Users className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                  <p className="text-gray-600 text-sm">Talented professionals with experience across industries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-indigo-100 mr-4">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Proven Results</h3>
                  <p className="text-gray-600 text-sm">Delivering measurable ROI for our clients</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-indigo-100 mr-4">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Local Expertise</h3>
                  <p className="text-gray-600 text-sm">Deep understanding of the Ethiopian market</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition duration-300"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;