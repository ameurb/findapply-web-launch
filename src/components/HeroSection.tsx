
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(29, 78, 216, 0.85), rgba(30, 64, 175, 0.85)), url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="mb-16">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              FindApply<span>.com</span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-8 leading-[1.1]">
            Elevating Your Business with Tailored App Development and AI Solutions
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-200 mb-12 font-light">
            Mobile, Desktop, and SaaS Development | AI Integration for Your Company
          </h2>
          
          <Button 
            asChild
            variant="secondary"
            size="lg"
            className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300"
          >
            <a href="#contact">
              Get Started Today 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
