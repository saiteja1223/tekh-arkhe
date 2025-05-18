import React from 'react';
import { CheckCircle, Database, RefreshCw, Globe, BarChart2 } from 'lucide-react';
import AnimationWrapper from '../components/ui/AnimationWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'SAP ERP Implementation',
      description: 'We provide end-to-end SAP ERP implementation services, helping businesses streamline their operations, optimize resource utilization, and improve decision-making capabilities.',
      icon: <Database className="h-12 w-12 text-primary" />,
      features: [
        'Business process analysis and mapping',
        'System design and configuration',
        'Data migration and integration',
        'Testing and quality assurance',
        'User training and documentation',
        'Go-live support and post-implementation assistance'
      ],
      image: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'SAP S/4HANA Migration',
      description: 'Upgrade your legacy SAP systems to the next-generation S/4HANA platform with our expert migration services, ensuring minimal disruption and maximum benefit for your business.',
      icon: <RefreshCw className="h-12 w-12 text-primary" />,
      features: [
        'System assessment and readiness check',
        'Migration strategy and roadmap development',
        'Custom code remediation',
        'Data cleansing and harmonization',
        'Functional and technical migration execution',
        'Performance optimization and stabilization'
      ],
      image: 'https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'SAP Fiori UI/UX Design',
      description: 'Transform your SAP user experience with modern, intuitive Fiori interfaces that enhance productivity, user adoption, and satisfaction across your organization.',
      icon: <Globe className="h-12 w-12 text-primary" />,
      features: [
        'User research and persona development',
        'UI/UX design and prototyping',
        'Fiori apps development and customization',
        'Integration with SAP backend systems',
        'Responsive design for multiple devices',
        'User adoption and change management'
      ],
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'SAP Consulting and Training',
      description: 'Get expert guidance and comprehensive training for your team to maximize the value of your SAP investment and build internal capabilities for long-term success.',
      icon: <BarChart2 className="h-12 w-12 text-primary" />,
      features: [
        'Strategic SAP roadmap development',
        'Business process optimization',
        'Technical architecture consulting',
        'Custom-tailored training programs',
        'Knowledge transfer and documentation',
        'Ongoing support and maintenance guidance'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-custom">
          <AnimationWrapper animation="slideUp">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Our SAP Services
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Comprehensive SAP solutions to transform your business operations and drive digital innovation
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimationWrapper 
                  animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
                  className={index % 2 === 1 ? "order-1 lg:order-2" : ""}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </AnimationWrapper>

                <AnimationWrapper 
                  animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                  className={index % 2 === 1 ? "order-2 lg:order-1" : ""}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-8">{service.description}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Button to="/contact" variant="primary">
                        Get Started
                      </Button>
                    </div>
                  </div>
                </AnimationWrapper>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <AnimationWrapper animation="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our SAP services can address your unique business challenges.
            </p>
            <Button 
              to="/contact" 
              variant="secondary" 
              size="lg"
              className=" text-black hover:bg-gray-100"
            >
              Contact Our Team
            </Button>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;