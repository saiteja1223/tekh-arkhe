import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import AnimationWrapper from '../components/ui/AnimationWrapper';
import Button from '../components/ui/Button';
import { Testimonial } from '../types';

const TestimonialsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Mathews',
      company: 'Global Manufacturing Inc.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Tekh Arkhe played a pivotal role in our S/4HANA migration. Their expertise and methodical approach ensured a smooth transition with minimal disruption to our operations. The team was responsive, knowledgeable, and committed to our success throughout the project.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Reynolds',
      company: 'Infinite Healthcare Solutions',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'The SAP Fiori implementation by Tekh Arkhe transformed our user experience. Our employees now have a modern, intuitive interface that has significantly improved productivity and satisfaction. The team\'s attention to detail and user-centric approach made all the difference.',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      company: 'PacificTrade Group',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'We engaged Tekh Arkhe for SAP ERP implementation across our international offices. Despite the complexity, their team delivered on time and within budget. Their global expertise and collaborative approach helped us navigate challenging requirements. Highly recommended!',
      rating: 4
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      company: 'Nexus Financial Services',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'The training provided by Tekh Arkhe was exceptional. Our team quickly gained proficiency with the new SAP system, thanks to their customized training approach and clear documentation. Their support didn\'t end with the training; they continued to guide us through the initial phases of adoption.',
      rating: 5
    },
    {
      id: 5,
      name: 'David Thompson',
      company: 'Velocity Retail Corporation',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Tekh Arkhe\'s consulting services provided us with valuable insights that helped reshape our SAP strategy. Their recommendations were practical, strategic, and aligned with our business goals. They truly understood our industry challenges and offered solutions that gave us a competitive edge.',
      rating: 5
    }
  ];

  const clientLogos = [
    'Global Manufacturing Inc.',
    'Infinite Healthcare Solutions',
    'PacificTrade Group',
    'Nexus Financial Services',
    'Velocity Retail Corporation',
    'EuroTech Innovations',
    'Atlas Logistics Inc.',
    'Pinnacle Construction Group'
  ];

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-custom">
          <AnimationWrapper animation="slideUp">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Discover how we've helped organizations transform their operations with our SAP solutions
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Hear directly from organizations that have partnered with us"
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10">
              <button 
                onClick={prevTestimonial}
                className="bg-white shadow-md rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
              </button>
            </div>

            <div className="relative overflow-hidden bg-white rounded-xl shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">{testimonial.name}</span>
                        <span className="text-primary">{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 md:translate-x-16 z-10">
              <button 
                onClick={nextTestimonial}
                className="bg-white shadow-md rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-primary" />
              </button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="More Success Stories" 
            subtitle="Read what our clients have to say about their experience working with us"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimationWrapper key={testimonial.id} animation="fadeIn" delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-md h-full flex flex-col">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="text-gray-600 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-primary text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Trusted by Leading Organizations" 
            subtitle="We partner with companies across industries to deliver exceptional SAP solutions"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {clientLogos.map((client, index) => (
              <AnimationWrapper key={index} animation="fadeIn" delay={index * 0.1}>
                <div className="bg-gray-50 h-32 rounded-lg flex items-center justify-center p-6 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <User className="h-8 w-8 text-gray-400" />
                    <span className="font-medium text-gray-600">{client}</span>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimationWrapper animation="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how we can help drive your business forward with our SAP expertise.
            </p>
            <Button 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              Start Your Journey
            </Button>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;