import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Reviews', path: '/#reviews' },
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
        isScrolled 
          ? 'glass py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with Modern Design */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-green-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className={`font-display text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Seasons
            </span>
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
                    ? isScrolled
                      ? 'text-green-600'
                      : 'text-white'
                    : isScrolled
                    ? 'text-gray-700 hover:text-green-600'
                    : 'text-white/90 hover:text-white'
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
              onClick={() => handleNavClick('/#contact')}
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* Mobile Menu Button with Animation */}
          <button
            className={`md:hidden p-2 rounded-xl transition-all ${
              isScrolled ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
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
                onClick={() => handleNavClick('/#contact')}
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
