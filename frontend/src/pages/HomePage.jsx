import React, { useState, useEffect, useMemo, useRef } from 'react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo, coreValues, teamMembers } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Logos3 } from '../components/ui/logos3';
import ThreeDIcon from '../components/ui/three-d-icon';
import CoreValueIcon3D from '../components/ui/core-value-icon-3d';
import TiltCard from '../components/ui/tilt-card';
import { ChevronLeft, ChevronRight, Star, Check, Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const heroRef = useRef(null);
  const heroSlides = useMemo(
    () => [
      encodeURI('/projects/WhatsApp Image 2026-01-21 at 7.53.23 PM.jpeg'),
      encodeURI('/projects/WhatsApp Image 2026-01-21 at 7.53.39 PM.jpeg')
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveHeroSlide((i) => (i + 1) % heroSlides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-black">
          {heroSlides.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === activeHeroSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
              <img src={src} alt="Seasons Landscapers" className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
          <div className="grain-overlay"></div>
        </div>

        {/* Floating Organic Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" data-anim="fade">
          <div className="floating-element absolute top-20 right-20 w-64 h-64 bg-green-500/10 organic-shape blur-3xl"></div>
          <div className="floating-element absolute bottom-32 left-32 w-80 h-80 bg-emerald-500/10 organic-shape-2 blur-3xl"></div>
        </div>

        {/* Hero Content with Logo */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto" data-anim="fade-up" data-delay="100">
          <div className="space-y-8">
            {/* Brand Logo */}
            <div className="flex justify-center mb-8" data-anim="zoom" data-delay="150">
              <img
                src="/SEASONS___1_-removebg-preview.png"
                alt="Seasons Landscapers"
                className="h-64 md:h-72 w-auto drop-shadow-2xl"
              />
            </div>

            <div className="flex justify-center" data-anim="fade-up" data-delay="170">
              <p className="text-white/90 font-display text-2xl md:text-3xl tracking-wide">
                A legacy written in green
              </p>
            </div>
            
            <Button
              asChild
              className="btn-modern bg-white text-green-900 hover:bg-green-50 px-10 py-7 rounded-full text-lg font-semibold mt-8"
              data-anim="fade-up"
              data-delay="250"
            >
              <Link to="/portfolio">
                Explore Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
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

      <section id="about" className="relative py-24 bg-white" data-anim="fade-up" data-delay="100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14" data-anim="fade-up" data-delay="150">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900">About Us</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8" data-anim="fade-up" data-delay="200">
              <p className="text-gray-700 text-lg leading-relaxed">
                We are <span className="font-semibold text-gray-900">Seasons Landscapers</span> — a team rooted in nature, design, and the belief
                that every space deserves to feel alive.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                What began over two decades ago with <span className="font-semibold text-gray-900">Sharon Prasad</span>'s experience and dedication
                has grown into a modern landscaping and maintenance company built on trust, creativity, and care. Her legacy laid the foundation;
                today, we're shaping its future with fresh ideas and a clear vision.
              </p>

              <div className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-3 shadow-sm">
                <img
                  src="/seasonslandscapers_3151690261129527523_51255948686_2023-07-21.jpg"
                  alt="Sharon Prasad"
                  className="w-full h-[300px] md:h-[340px] rounded-xl object-contain"
                  loading="lazy"
                />
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                Led by <span className="font-semibold text-gray-900">Clifford Prasad</span> and <span className="font-semibold text-gray-900">Kevin Prasad</span>, we're
                redefining how India experiences green spaces — blending thoughtful design, sustainable choices, and reliable maintenance to bring nature
                closer to everyday life.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                From intimate balconies to vibrant cafés, rooftops, and institutions, we create landscapes that do more than look beautiful — they thrive,
                inspire, and grow with time.
              </p>
            </div>

            <div className="lg:col-span-5" data-anim="fade-up" data-delay="250">
              <Card className="border-gray-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Our Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>Founded by <span className="font-semibold text-gray-900">Sharon Prasad</span> over 20 years ago</div>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>Built on trust, creativity, and care</div>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>Now led by <span className="font-semibold text-gray-900">Clifford</span> &amp; <span className="font-semibold text-gray-900">Kevin Prasad</span></div>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>Redefining India's green spaces</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Logos3 heading="Trusted by leading Clients" />

      {/* Core Values with Advanced Cards */}
      <section className="relative pt-24 pb-32 bg-white overflow-hidden" data-anim="fade-up" data-delay="100">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 organic-shape blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 organic-shape-2 blur-3xl opacity-50 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-20" data-anim="fade-up" data-delay="150">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-anim="fade-up" data-delay="200">
            {coreValues.map((value, index) => {
              const IconComponent = Icons[value.icon];
              return (
                <div
                  key={value.id}
                  className="group"
                  style={{ animationDelay: `${index * 0.1}s` }}>

                  <TiltCard className="h-full" innerClassName="rounded-3xl p-8 h-full shadow-xl border border-gray-100">
                    <div className="relative">
                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <ThreeDIcon className="mx-auto transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                          <CoreValueIcon3D title={value.title} />
                        </ThreeDIcon>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 text-center">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-center leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </TiltCard>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* Team Section with Modern Cards */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white" data-anim="fade-up" data-delay="100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20" data-anim="fade-up" data-delay="150">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-6">Meet the Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Our passionate professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-anim="fade-up" data-delay="200">
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

      {/* Contact Section with Glassmorphism */}
      <section id="contact" className="relative py-32 bg-gradient-to-b from-gray-50 to-white" data-anim="fade-up" data-delay="100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20" data-anim="fade-up" data-delay="150">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto" data-anim="fade-up" data-delay="200">
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
