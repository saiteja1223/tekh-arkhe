import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart2, RefreshCw, Globe, Database } from 'lucide-react';
import Button from '../components/ui/Button';
import AnimationWrapper from '../components/ui/AnimationWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'SAP ERP Implementation',
    description: 'End-to-end implementation of SAP ERP systems tailored to your business needs',
    icon: 'Database',
  },
  {
    id: 2,
    title: 'SAP S/4HANA Migration',
    description: 'Seamless migration to SAP S/4HANA with minimal business disruption',
    icon: 'RefreshCw',
  },
  {
    id: 3,
    title: 'SAP Fiori UI/UX Design',
    description: 'Modern, intuitive user interface design using SAP Fiori guidelines',
    icon: 'Globe',
  },
  {
    id: 4,
    title: 'SAP Consulting and Training',
    description: 'Expert consultation and comprehensive training for your in-house teams',
    icon: 'BarChart2',
  }
];

const HomePage: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="h-10 w-10 text-primary" />;
      case 'RefreshCw': return <RefreshCw className="h-10 w-10 text-primary" />;
      case 'Globe': return <Globe className="h-10 w-10 text-primary" />;
      case 'BarChart2': return <BarChart2 className="h-10 w-10 text-primary" />;
      default: return <Database className="h-10 w-10 text-primary" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Empowering Enterprises with SAP Solutions
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl text-gray-600 mb-8">
                Delivering excellence in SAP implementation, migration, and consulting services to
                transform your business operations and drive growth.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button to="/services" variant="primary" size="lg">
                Explore Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Enterprise SAP Solutions" 
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden lg:block absolute -bottom-5 -left-5 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="hidden lg:block absolute top-40 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our SAP Services" 
            subtitle="We provide comprehensive SAP solutions to meet all your enterprise needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimationWrapper 
                key={service.id} 
                animation="fadeIn" 
                delay={index * 0.1}
                className="h-full"
              >
                <div className="card h-full p-8 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-6">
                    {renderIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="/services" className="text-primary font-medium inline-flex items-center">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <AnimationWrapper animation="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business with SAP?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Let's discuss how our SAP solutions can address your unique business challenges
              and drive your digital transformation journey.
            </p>
            <Button 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className="bg-white hover:bg-gray-500 text-black" 
            >
              Get Started Today
            </Button>
          </AnimationWrapper>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Why Choose Tekh Arkhe" 
            subtitle="We combine technical expertise with industry knowledge to deliver exceptional results"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="slideRight">
              <img 
                src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our approach" 
                className="w-full h-auto rounded-xl shadow-md"
              />
            </AnimationWrapper>

            <div className="space-y-8">
              <AnimationWrapper animation="slideLeft" delay={0.1}>
                <div>
                  <h3 className="text-2xl font-bold mb-4">SAP Certified Experts</h3>
                  <p className="text-gray-600">
                    Our team consists of SAP certified professionals with years of experience in 
                    implementing and optimizing SAP solutions across various industries.
                  </p>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideLeft" delay={0.2}>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Customer-Centric Approach</h3>
                  <p className="text-gray-600">
                    We prioritize understanding your business needs to deliver tailored 
                    solutions that align with your strategic objectives and drive results.
                  </p>
                </div>
              </AnimationWrapper>

              <AnimationWrapper animation="slideLeft" delay={0.3}>
                <div>
                  <h3 className="text-2xl font-bold mb-4">End-to-End Services</h3>
                  <p className="text-gray-600">
                    From initial consultation to implementation, training, and ongoing support, 
                    we provide comprehensive services throughout your SAP journey.
                  </p>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;