import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Abyssinia Coffee Rebrand",
    category: "Branding",
    image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Complete digital rebrand for Ethiopia's premium coffee exporter, including website, social media, and digital advertising."
  },
  {
    id: 2,
    title: "Habesha Tours App",
    category: "Mobile",
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Mobile app development and marketing campaign for a leading Ethiopian tourism company."
  },
  {
    id: 3,
    title: "EthioTech Conference",
    category: "Event",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Digital promotion strategy for Ethiopia's largest technology conference, resulting in 200% attendance increase."
  },
  {
    id: 4,
    title: "Addis Fashion Week",
    category: "Social Media",
    image: "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Comprehensive social media campaign for Ethiopia's premier fashion event, reaching over 2 million people."
  },
  {
    id: 5,
    title: "Amhara Bank",
    category: "SEO",
    image: "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Website optimization and content strategy for a leading Ethiopian financial institution."
  },
  {
    id: 6,
    title: "Ethiopian Airlines Promotion",
    category: "Advertising",
    image: "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Multi-channel digital advertising campaign for new international routes, increasing bookings by 45%."
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', 'Branding', 'Mobile', 'Social Media', 'SEO', 'Advertising', 'Event'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recent Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful digital marketing campaigns and projects
            that have helped our clients achieve remarkable growth.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex overflow-x-auto py-2 md:py-0 px-2 space-x-2 md:space-x-4 bg-white rounded-lg shadow-sm mb-6 md:mb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md whitespace-nowrap ${
                  filter === category 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                } transition duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-semibold mb-2">
                      {project.category}
                    </span>
                    <div className="flex justify-end mt-4">
                      <button className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-200">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold mb-3">
                  {project.category}
                </span>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500">2023</span>
                  <a 
                    href="#" 
                    className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200 flex items-center"
                  >
                    View Case Study
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;