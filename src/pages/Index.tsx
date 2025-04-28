
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Set up smooth scrolling
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    
    // Update the document title and meta description
    document.title = "FindApply.com - App Development & AI Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "App Development and AI Solutions for Your Business. We build mobile, desktop, and SaaS apps with integrated AI solutions."
      );
    }

    // Add structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FindApply",
      "url": "https://findapply.com",
      "logo": "https://findapply.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "wordia.data@gmail.com"
      },
      "description": "App Development and AI Solutions for Your Business. We build mobile, desktop, and SaaS apps with integrated AI solutions."
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
