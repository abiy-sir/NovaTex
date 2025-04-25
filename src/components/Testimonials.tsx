import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Abebe Kebede",
    position: "Marketing Director",
    company: "Ethiopian Airlines",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "NovaTex transformed our digital marketing strategy. Their deep understanding of both global trends and local Ethiopian market dynamics helped us achieve unprecedented engagement with our campaigns.",
    rating: 5
  },
  {
    id: 2,
    name: "Sara Mengistu",
    position: "CEO",
    company: "Habesha Breweries",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Working with NovaTex has been a game-changer for our brand. Their creative approach to social media and content marketing has significantly increased our brand awareness and customer engagement.",
    rating: 5
  },
  {
    id: 3,
    name: "Daniel Haile",
    position: "Founder",
    company: "TechAddis",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "The team at NovaTex brings both creativity and analytical rigor to every project. Their SEO work doubled our organic traffic in just three months, and their ongoing support has been invaluable.",
    rating: 4
  },
  {
    id: 4,
    name: "Tigist Bekele",
    position: "Marketing Manager",
    company: "Dashen Bank",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "NovaTex's data-driven approach to digital marketing has transformed how we connect with customers. Their expertise in financial marketing compliance while maintaining creative campaigns is impressive.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const showTestimonials = false; // Set to false to hide the section

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {showTestimonials && (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-indigo-200 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what some of our clients have to say about working with NovaTex.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 bg-indigo-50">
                    <div className="h-full relative">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent flex items-end">
                        <div className="p-6">
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-5 w-5 ${
                                  i < testimonials[currentIndex].rating 
                                    ? 'text-yellow-400 fill-yellow-400' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {testimonials[currentIndex].name}
                          </h3>
                          <p className="text-indigo-100">
                            {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <svg className="h-10 w-10 text-indigo-400 mb-6" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      
                      <p className="text-gray-700 text-lg mb-8">
                        {testimonials[currentIndex].content}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full ${
                              currentIndex === index 
                                ? 'bg-indigo-600' 
                                : 'bg-gray-300'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                          ></button>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2">
                        <button 
                          onClick={prevTestimonial}
                          className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button 
                          onClick={nextTestimonial}
                          className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;