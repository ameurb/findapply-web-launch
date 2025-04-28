import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          {/* Ensure logo text color contrasts with background */}          <span className={cn(
            "text-2xl font-bold",
            isScrolled ? "text-primary" : "text-white"
          )}>
            FindApply
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              // Update link color based on scroll state
              className={cn(
                "header-link transition-colors duration-300",
                isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-violet-200"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            // Adjust button style for scrolled state if needed, assuming btn-primary handles contrast
            className="btn btn-primary px-4 py-2 rounded-md"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle mobile menu">
          {/* Ensure icon color contrasts */}
          {isMenuOpen ? (
            <X className={cn("h-6 w-6", isScrolled ? "text-gray-900" : "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-900" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Navigation - Already has white background, text should be fine */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-30 flex flex-col items-center pt-24',
          'transform transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-lg py-4 header-link"
            onClick={toggleMenu}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary px-6 py-3 mt-4 rounded-md"
          onClick={toggleMenu}
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
