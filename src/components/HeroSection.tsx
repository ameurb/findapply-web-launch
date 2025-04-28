
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 20, 0.7), rgba(0, 0, 20, 0.7)), url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
            Elevating Your Business with Tailored App Development and AI Solutions
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-200 mb-8">
            Mobile, Desktop, and SaaS Development | AI Integration for Your Company
          </h2>
          
          <a 
            href="#contact" 
            className="btn btn-secondary text-lg px-8 py-4 rounded-md flex items-center gap-2 group"
          >
            Get Started Today 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
