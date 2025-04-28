
import React from 'react';
import { Smartphone, Monitor, Database, Brain, ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  delay: string;
}) => {
  return (
    <div 
      className="service-card flex flex-col h-full"
      style={{ animationDelay: delay }}
    >
      <div className="text-primary mb-5">
        <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
          <Icon className="w-8 h-8" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <a 
        href="#contact" 
        className="inline-flex items-center text-primary hover:text-primary-dark font-medium mt-auto group"
      >
        Contact for Quote
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-all" />
      </a>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile App Development",
      description: "Responsive, native apps for iOS & Android that deliver seamless user experiences and drive engagement with your brand.",
      icon: Smartphone,
      delay: "100ms"
    },
    {
      title: "Desktop App Development",
      description: "Cross-platform software solutions that streamline workflows and boost productivity for your team and customers.",
      icon: Monitor,
      delay: "200ms"
    },
    {
      title: "SaaS Solutions",
      description: "Scalable software for your business needs that grows with your company and offers reliable subscription-based services.",
      icon: Database,
      delay: "300ms"
    },
    {
      title: "AI Integration",
      description: "Cutting-edge AI solutions integrated into your existing workflow to improve efficiency, decision-making, and customer experiences.",
      icon: Brain,
      delay: "400ms"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            We deliver comprehensive technology solutions designed to solve your business challenges and drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
