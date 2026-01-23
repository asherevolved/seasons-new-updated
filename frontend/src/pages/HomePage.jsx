import React, { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import { companyInfo, coreValues, teamMembers, testimonials } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ChevronLeft, ChevronRight, Star, Check, Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558293842-c0fd3db86157')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}>

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
          <div className="grain-overlay"></div>
        </div>

        {/* Floating Organic Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-20 right-20 w-64 h-64 bg-green-500/10 organic-shape blur-3xl"></div>
          <div className="floating-element absolute bottom-32 left-32 w-80 h-80 bg-emerald-500/10 organic-shape-2 blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="space-y-8 animate-fadeInUp">
            <h1 className="font-display text-7xl md:text-8xl font-bold leading-tight tracking-tight">
              Our Story
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto opacity-90">
              Rooted in passion and driven by vision, discover the heritage and
              <br className="hidden md:block" />
              expertise that define Seasons Landscapers
            </p>
            <Button className="btn-modern bg-white text-green-900 hover:bg-green-50 px-10 py-7 rounded-full text-lg font-semibold mt-8">
              Explore Our Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 flex items-start justify-center p-2 rounded-full !opacity-[0%]">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section with Glassmorphism */}
      <section id="about" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side with Advanced Effects */}
            <div className="relative group">
              <div className="image-zoom rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1751830188321-70fa086fc8a0"
                  alt="Landscaping work"
                  className="w-full h-[600px] object-cover" />

                <div className="gradient-overlay"></div>
              </div>

              {/* Floating Glass Card */}
              <div className="glass absolute -bottom-8 -right-8 rounded-2xl shadow-xl p-8 max-w-xs animate-fadeInScale">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                    <Icons.Leaf className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-green-600">20+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-100 organic-shape -z-10"></div>
              <div className="absolute -bottom-6 right-32 w-24 h-24 bg-emerald-50 organic-shape-2 -z-10"></div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                  About Seasons Landscapers
                </span>
              </div>

              <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Cultivating Beauty,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  One Garden at a Time
                </span>
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  At Seasons Landscapers, we're more than just a landscaping company. Founded on a passion
                  for nature and design, our journey began with a simple vision: to transform ordinary outdoor
                  spaces into extraordinary natural havens that inspire and delight.
                </p>
                <p>
                  From small residential gardens to expansive commercial landscapes, we've honed our craft
                  through dedication, innovation, and an unwavering commitment to excellence.
                </p>
              </div>

              {/* Stats with Modern Design */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="group">
                  <div className="glass rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500">
                    <div className="text-5xl font-display font-bold text-green-600 mb-2">
                      {companyInfo.stats.yearsExperience}
                    </div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Years of Excellence</div>
                  </div>
                </div>
                <div className="group">
                  <div className="glass rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500">
                    <div className="text-5xl font-display font-bold text-green-600 mb-2">
                      {companyInfo.stats.projectsCompleted}
                    </div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Projects Completed</div>
                  </div>
                </div>
              </div>

              <Button className="btn-modern bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 rounded-full text-base">
                Discover Our Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with Advanced Cards */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 organic-shape blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 organic-shape-2 blur-3xl opacity-50 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Our Principles</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = Icons[value.icon];
              return (
                <div
                  key={value.id}
                  className="card-modern group"
                  style={{ animationDelay: `${index * 0.1}s` }}>

                  <div className="glass rounded-3xl p-8 h-full hover:shadow-2xl border border-gray-100">
                    <div className="relative">
                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-green-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 text-center">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-center leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* Team Section with Modern Cards */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Expert Team</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">Meet the Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Our passionate professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) =>
            <div
              key={member.id}
              className="card-modern group"
              style={{ animationDelay: `${index * 0.15}s` }}>

                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
                  {/* Image Container */}
                  <div className="image-zoom relative h-96 overflow-hidden">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Floating Badge */}
                    <div className="glass-dark absolute top-6 right-6 px-4 py-2 rounded-full">
                      <span className="text-white text-sm font-medium">{member.role}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reviews Section with Advanced Carousel */}
      <section id="reviews" className="relative py-32 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 organic-shape blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Customer Success</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Stories from our Gardens
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              See how we've transformed outdoor spaces and what our delighted clients have to say
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) =>
              <div
                key={testimonial.id}
                className={`card-modern transition-all duration-500 ${
                index === currentTestimonial ? 'scale-105' : 'scale-100 opacity-90'}`
                }>

                  <div className="glass rounded-3xl overflow-hidden shadow-xl h-full">
                    {/* Project Image */}
                    <div className="image-zoom relative h-56 overflow-hidden">
                      <img
                      src={testimonial.projectImage}
                      alt={testimonial.project}
                      className="w-full h-full object-cover" />

                      <div className="gradient-overlay"></div>

                      {/* Rating Badge */}
                      <div className="glass-dark absolute top-4 right-4 px-4 py-2 rounded-full flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white text-sm font-bold">5.0</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) =>
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      )}
                      </div>

                      <p className="text-gray-700 italic mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-4">
                        <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-green-100" />

                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="btn-modern w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 flex items-center justify-center shadow-lg">

                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                className="btn-modern w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 flex items-center justify-center shadow-lg">

                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Glassmorphism */}
      <section id="contact" className="relative py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Create Your Green Oasis
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need complete landscape overhaul or regular maintenance, we're here to help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
              {
                icon: Phone,
                title: 'Phone',
                subtitle: 'Mon-Fri from 8am to 5pm',
                content: companyInfo.phone,
                link: `tel:${companyInfo.phone}`
              },
              {
                icon: Mail,
                title: 'Email',
                subtitle: 'Online support 24/7',
                content: companyInfo.email,
                link: `mailto:${companyInfo.email}`
              },
              {
                icon: MapPin,
                title: 'Main Office',
                subtitle: '',
                content: `${companyInfo.address}, ${companyInfo.city}, ${companyInfo.country}`,
                link: null
              }].
              map((item, index) =>
              <div key={index} className="card-modern">
                  <div className="glass rounded-2xl p-6 hover:shadow-2xl">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h3>
                        {item.subtitle && <p className="text-gray-600 text-sm mb-2">{item.subtitle}</p>}
                        {item.link ?
                      <a
                        href={item.link}
                        className="text-green-600 font-semibold hover:text-green-700 transition-colors break-all">

                            {item.content}
                          </a> :

                      <p className="text-gray-700">{item.content}</p>
                      }
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="card-modern">
              <div className="glass rounded-3xl p-10 shadow-2xl">
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <p className="text-gray-600 mb-8">We'll get back to you within 24 hours</p>

                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />

                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />

                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />

                  </div>
                  <div>
                    <select className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all">
                      <option>Landscape Design Consultation</option>
                      <option>Lawn Care Services</option>
                      <option>Hardscaping Project</option>
                      <option>Maintenance Contract</option>
                      <option>Other Services</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      placeholder="Tell us more about your garden project..."
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition-all">
                    </textarea>
                  </div>

                  <Button className="btn-modern w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 rounded-2xl text-base font-semibold">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default HomePage;