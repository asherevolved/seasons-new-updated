import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
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
    <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 organic-shape blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 organic-shape-2 blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info with Modern Design */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group inline-block">
              <img
                src="https://customer-assets.emergentagent.com/job_garden-craft-2/artifacts/euk5fgx5_ChatGPT%20Image%20Jan%2020%2C%202026%2C%2005_20_40%20PM-Photoroom.png"
                alt="Seasons Landscapers"
                className="h-20 w-auto group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <p className="text-gray-600 leading-relaxed">
              At Seasons, we are dedicated to providing top-quality lawn care services to keep your yard healthy and beautiful.
            </p>

            {/* Newsletter Section */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-900">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 text-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              <Button className="btn-modern w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-sm rounded-2xl py-3">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Top Links */}
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {topLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-green-600 transition-all hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-gray-600 hover:text-green-600 transition-all hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      {service.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="group">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-3 text-gray-600 hover:text-green-600 transition-all"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-all flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-600 group-hover:text-white transition-all" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Call us</p>
                    <p className="font-medium">{companyInfo.phone}</p>
                  </div>
                </a>
              </li>
              <li className="group">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-gray-600 hover:text-green-600 transition-all"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-all flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-600 group-hover:text-white transition-all" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Email us</p>
                    <p className="font-medium break-all">{companyInfo.email}</p>
                  </div>
                </a>
              </li>
              <li className="group">
                <div className="flex items-start gap-3 text-gray-600">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Visit us</p>
                    <p className="font-medium text-sm leading-relaxed">
                      {companyInfo.address}, {companyInfo.city}
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Social Media with Modern Design */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, link: '#' },
                { icon: Instagram, link: '#' },
                { icon: Twitter, link: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="group relative"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-green-600 hover:to-emerald-600 flex items-center justify-center transition-all duration-500 shadow-sm hover:shadow-lg">
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-all" />
                  </div>
                  <div className="absolute inset-0 bg-green-400 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Modern Design */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            © {currentYear} <span className="font-semibold text-gray-900">Seasons Landscaping</span>. All rights reserved
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-gray-600 hover:text-green-600 transition-all text-sm">
              Terms & Conditions
            </Link>
            <Link to="#" className="text-gray-600 hover:text-green-600 transition-all text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
