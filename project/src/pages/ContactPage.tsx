import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import AnimationWrapper from '../components/ui/AnimationWrapper';
import Button from '../components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const [formStatus, setFormStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setFormStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-custom">
          <AnimationWrapper animation="slideUp">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Reach out to discuss your SAP projects or request information about our services
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimationWrapper animation="slideRight">
              <div className="bg-gray-50 p-8 md:p-12 rounded-xl h-full">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form, and one of our SAP experts will get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="input-label">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="John Doe"
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters'
                        } 
                      })}
                    />
                    {errors.name && (
                      <p className="error-message">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="input-label">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="you@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="error-message">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="input-label">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`input-field ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="+1 (555) 123-4567"
                      {...register('phone', { 
                        pattern: {
                          value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
                          message: 'Invalid phone number format'
                        }
                      })}
                    />
                    {errors.phone && (
                      <p className="error-message">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="input-label">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="Tell us about your project or inquiry..."
                      {...register('message', { 
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters'
                        }
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="error-message">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                  
                  {formStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mt-4">
                      Your message has been sent successfully. We'll get back to you soon!
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mt-4">
                      There was an error sending your message. Please try again later.
                    </div>
                  )}
                </form>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="slideLeft">
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Our team is ready to assist you with any questions about our SAP services, 
                    implementations, or training programs.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-3 mr-4">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Office Location</h3>
                        <p className="text-gray-600">
                          123 Business Park, Suite 500<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-3 mr-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          Main: +1 (555) 123-4567<br />
                          Support: +1 (555) 987-6543
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-3 mr-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          General: info@tekharkhe.com<br />
                          Support: support@tekharkhe.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-3 mr-4">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9AM - 6PM EST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto bg-gray-100 rounded-xl overflow-hidden h-80">
                  {/* Placeholder for Google Map */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="h-10 w-10 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-700 font-medium">
                        Google Map would be embedded here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimationWrapper animation="slideUp" delay={0.1}>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">How long does an SAP implementation typically take?</h3>
                <p className="text-gray-600">
                  The timeline varies based on the scope and complexity of the project. A standard 
                  implementation can take 3-6 months, while more complex enterprise-wide implementations 
                  may take 9-12 months or longer.
                </p>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="slideUp" delay={0.2}>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">Do you provide post-implementation support?</h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive post-implementation support packages to ensure your SAP 
                  system runs smoothly. Our support includes troubleshooting, performance optimization, 
                  and user assistance.
                </p>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="slideUp" delay={0.3}>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">What industries do you specialize in?</h3>
                <p className="text-gray-600">
                  We have extensive experience across multiple industries, including manufacturing, 
                  healthcare, retail, finance, and logistics. Our consultants bring industry-specific 
                  knowledge to each project.
                </p>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animation="slideUp" delay={0.4}>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3">What is your approach to training?</h3>
                <p className="text-gray-600">
                  We provide customized training programs tailored to your organization's needs. This 
                  includes role-based training, hands-on workshops, and comprehensive documentation to 
                  ensure your team can fully leverage your SAP system.
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;