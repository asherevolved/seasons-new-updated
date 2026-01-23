import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { companyInfo, services } from '../data/mock';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const topLinks = [
    { name: 'Home Page', path: '/' },
    { name: 'About Us', path: '/#about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Recent Blog', path: '#' },
    { name: 'Testimonials', path: '/#reviews' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Seasons</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              At Seasons, we are dedicated to providing top-quality lawn care services to keep your yard healthy, beautiful.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-900">Your Email Address</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg">
                SUBSCRIBE
              </Button>
            </div>
          </div>

          {/* Top Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Links</h3>
            <ul className="space-y-2">
              {topLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">
                  {companyInfo.address}, {companyInfo.city}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-gray-600 hover:text-green-600 transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">www.Seasons.org</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-green-600 flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-green-600 flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-green-600 flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {currentYear} Seasons Landscaping. All rights Reserved
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link to="#" className="hover:text-green-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="#" className="hover:text-green-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
