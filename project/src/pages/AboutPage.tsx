import React from 'react';
import { Users, Award, CheckCircle, Clock } from 'lucide-react';
import AnimationWrapper from '../components/ui/AnimationWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { TeamMember, TimelineEvent } from '../types';

const AboutPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sophia Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'SAP-certified consultant with over 15 years of experience in enterprise software solutions.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Technical genius with expertise in SAP S/4HANA and cloud infrastructure.'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Head of Consulting',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Leads our consulting practice with a focus on business process optimization.'
    },
    {
      id: 4,
      name: 'Robert Davis',
      role: 'Lead SAP Architect',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Designs and implements complex SAP architecture solutions for enterprise clients.'
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      year: '2021',
      title: 'Company Founded',
      description: 'Tekh Arkhe was established with a vision to deliver exceptional SAP solutions.'
    },
    {
      id: 2,
      year: '2021',
      title: 'SAP Partnership',
      description: 'Became an official SAP partner, expanding our service capabilities.'
    },
    {
      id: 3,
      year: '2022',
      title: 'International Expansion',
      description: 'Opened offices in Europe and Asia to serve global clients.'
    },
    {
      id: 4,
      year: '2022',
      title: 'S/4HANA Excellence Award',
      description: 'Recognized for outstanding S/4HANA implementations.'
    },
    {
      id: 5,
      year: '2023',
      title: 'Cloud Innovation',
      description: 'Launched specialized cloud migration services for SAP systems.'
    },
    {
      id: 6,
      year: '2023',
      title: 'AI Integration',
      description: 'Introduced AI-powered analytics solutions for SAP environments.'
    }
  ];

  return (
    <div className="pt-20">
      {/* About Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="slideRight">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Tekh Arkhe Team" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </AnimationWrapper>

            <AnimationWrapper animation="slideLeft">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tekh Arkhe</h1>
              <p className="text-xl text-gray-600 mb-6">
                We are a team of SAP experts dedicated to helping businesses harness the full potential 
                of SAP technologies to drive digital transformation and operational excellence.
              </p>
              <p className="text-gray-600 mb-8">
                Founded in 2021, Tekh Arkhe has grown into a trusted SAP solutions provider with a 
                track record of successful implementations across industries. Our mission is to deliver 
                tailored SAP solutions that address specific business challenges and create lasting value.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" to="/contact">
                  Contact Us
                </Button>
                <Button variant="outline" to="/services">
                  Our Services
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimationWrapper animation="slideUp">
              <div className="bg-gray-50 p-10 rounded-xl h-full">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To empower businesses through innovative SAP solutions that optimize operations, 
                  enhance decision-making, and drive sustainable growth. We are committed to delivering 
                  excellence in every project and building long-term partnerships with our clients.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slideUp" delay={0.2}>
              <div className="bg-gray-50 p-10 rounded-xl h-full">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the global leader in SAP consulting and implementation services, recognized for 
                  our technical expertise, innovative solutions, and unwavering commitment to client success. 
                  We aspire to shape the future of enterprise technology through continuous innovation and excellence.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Journey" 
            subtitle="From our founding to the present, we've been on a mission to transform businesses with SAP"
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:translate-x-px"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={event.id} className="relative">
                  <AnimationWrapper
                    animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
                    className="md:w-1/2 md:pr-12"
                    style={{ 
                      marginLeft: index % 2 === 0 ? '0' : 'auto',
                      textAlign: index % 2 === 0 ? 'right' : 'left',
                      paddingRight: index % 2 === 0 ? '3rem' : '0',
                      paddingLeft: index % 2 === 0 ? '0' : '3rem'
                    }}
                  >
                    <div className={`bg-white p-6 rounded-xl shadow-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <div className="text-primary font-bold text-2xl mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </AnimationWrapper>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-2px"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Leadership Team" 
            subtitle="Meet the experts who lead our company and drive our vision forward"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimationWrapper key={member.id} animation="fadeIn" delay={index * 0.1}>
                <div className="card overflow-hidden group">
                  <div className="h-80 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide our work and relationships"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimationWrapper animation="slideUp">
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our work, from technical implementation 
                  to client communication and support.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slideUp" delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                <p className="text-gray-600">
                  We build true partnerships with our clients, working collaboratively to achieve 
                  their business goals and drive mutual success.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slideUp" delay={0.4}>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We embrace innovation and continuously explore new technologies and approaches 
                  to deliver cutting-edge solutions for our clients.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <AnimationWrapper animation="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your SAP needs and discover how we can help transform your business.
            </p>
            <Button 
              to="/contact" 
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              Get in Touch
            </Button>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;