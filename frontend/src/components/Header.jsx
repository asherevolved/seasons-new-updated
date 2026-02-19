import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const whatsappLink = 'https://wa.link/9wozd4';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Contact', path: '/#contact' }
  ];

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname !== route) {
        window.location.href = path;
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-transparent py-4' : 'bg-white py-6 shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with Modern Design */}
          <Link to="/" className="flex items-center group">
            <img
              src="/SEASONS___1_-removebg-preview.png"
              alt="Seasons Landscapers"
              className={`h-24 md:h-28 w-auto transition-all duration-500 group-hover:scale-105 ${
                isScrolled ? 'brightness-100' : 'brightness-100'
              }`}
            />
          </Link>

          {/* Desktop Navigation with Modern Style */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                  location.pathname === link.path
                    ? 'text-green-600'
                    : 'text-gray-900 hover:text-green-600'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 group-hover:w-1/2 ${
                  location.pathname === link.path ? 'w-1/2' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button with Modern Style */}
          <div className="hidden md:block">
            <Button
              className="btn-modern bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg"
              onClick={() => {
                window.location.assign(whatsappLink);
              }}
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* Mobile Menu Button with Animation */}
          <button
            className={`md:hidden p-2 rounded-xl transition-all ${
              isScrolled ? 'bg-white/10 hover:bg-white/20 backdrop-blur-sm' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu with Glassmorphism */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 glass rounded-3xl p-6 animate-fadeInScale">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-3 text-sm font-medium transition-all rounded-2xl ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="btn-modern bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white w-full rounded-2xl py-4 mt-2"
                onClick={() => {
                  window.location.assign(whatsappLink);
                }}
              >
                GET IN TOUCH
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
