import React from 'react';
import { 
  LineChart, 
  Search, 
  Share2, 
  Smartphone, 
  Mail, 
  PenTool,
  ArrowRight,
  Table2Icon,
  BarChart3Icon
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fadeIn ${delay}`}>
      <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 inline-block mb-4">
        <div className="text-indigo-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200">
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Digital Marketing Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital marketing services tailored to elevate your brand's 
            online presence and drive measurable results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Search className="h-6 w-6" />}
            title="Search Engine Optimization"
            description="Boost your website's visibility in search results with our data-driven SEO strategies tailored for the Ethiopian market and beyond."
            delay="animation-delay-100"
          />
          
          <ServiceCard 
            icon={<Share2 className="h-6 w-6" />}
            title="Social Media Marketing"
            description="Build brand awareness and engagement with strategic social media campaigns that connect with your audience on the platforms they use daily."
            delay="animation-delay-300"
          />
          
          <ServiceCard 
            icon={<LineChart className="h-6 w-6" />}
            title="Pay-Per-Click Advertising"
            description="Drive targeted traffic and increase conversions with our expertly managed PPC campaigns across Google, Facebook, and local platforms."
            delay="animation-delay-200"
          />
          
          <ServiceCard 
            icon={<Mail className="h-6 w-6" />}
            title="Email Marketing"
            description="Nurture leads and drive sales with personalized email campaigns that deliver the right message at the right time."
            delay="animation-delay-500"
          />
          
          <ServiceCard 
            icon={<BarChart3Icon className="h-6 w-6" />}
            title="Marketing Consultion"
            description="Get expert advice and tailored strategies to enhance your digital marketing efforts and achieve your business goals."
            delay="animation-delay-600"
          />
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg transform hover:-translate-y-1 transition duration-300 inline-flex items-center">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;