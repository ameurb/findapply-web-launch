
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            About FindApply
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 mb-6">
            At FindApply, we specialize in developing cutting-edge solutions that empower businesses to thrive in the digital age. With years of experience in app development and AI integration, we deliver custom solutions that meet your specific needs and drive real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Services</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Mobile, Desktop & SaaS App Development</h4>
                  <p className="text-gray-600 mt-1">Comprehensive development services tailored for any platform your business needs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">AI Integration for Businesses</h4>
                  <p className="text-gray-600 mt-1">Supercharge your business with intelligent systems that optimize workflows and provide insights.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Custom Solutions to Fit Your Needs</h4>
                  <p className="text-gray-600 mt-1">We don't believe in one-size-fits-all. Our solutions are designed specifically for your business challenges.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute w-64 h-64 bg-primary/20 rounded-full top-0 left-0"></div>
              <div className="absolute w-full h-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Development and AI" 
                  className="rounded-lg shadow-xl object-cover w-72 h-72"
                />
              </div>
              <div className="absolute w-32 h-32 bg-secondary/20 rounded-full bottom-0 right-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
