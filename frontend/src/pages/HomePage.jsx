import React from 'react';
import * as Icons from 'lucide-react';
import { companyInfo, coreValues, teamMembers, testimonials, projects } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ChevronLeft, ChevronRight, Star, Check, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558293842-c0fd3db86157')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Our Story</h1>
          <p className="text-xl md:text-2xl mb-2 font-light">
            Rooted in passion and driven by vision, discover the heritage and
          </p>
          <p className="text-xl md:text-2xl font-light">
            expertise that define Seasons Landscapers
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1751830188321-70fa086fc8a0"
                  alt="Landscaping work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Overlay Card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Icons.Leaf className="w-8 h-8 text-green-600" />
                  <span className="text-gray-700 font-medium">Where to find us online to visit</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                <Icons.Users className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                  About Seasons Landscapers
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Cultivating Beauty,
                <br />
                <span className="text-green-600">One Garden at a Time</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Seasons Landscapers, we're more than just a landscaping company. Founded on a passion
                for nature and design, our journey began with a simple vision: to transform ordinary outdoor
                spaces into extraordinary natural havens that inspire and delight.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From small residential gardens to expansive commercial landscapes, we've honed our craft
                through dedication, innovation, and an unwavering commitment to excellence. Our team of
                skilled professionals brings together expertise in horticulture, design, and sustainable
                practices to create landscapes that not only look beautiful but thrive for years to come.
              </p>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-1">{companyInfo.stats.yearsExperience}</div>
                  <div className="text-sm text-gray-600 font-medium">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-1">{companyInfo.stats.projectsCompleted}</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-base">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => {
              const IconComponent = Icons[value.icon];
              return (
                <Card key={value.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-600">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                      <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of experienced landscaping professionals is here to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success / Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                Customer Success
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stories from our Gardens
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've transformed outdoor spaces and what our delighted clients have to say about their new green havens
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={`overflow-hidden transition-all duration-500 ${
                    index === currentTestimonial ? 'ring-2 ring-green-600' : ''
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={testimonial.projectImage}
                      alt={testimonial.project}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      5 Stars
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                Contact Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Create Your Green Oasis
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you need complete landscape overhaul or regular maintenance, we are here to help. Reach out to us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 text-sm mb-1">Mon-Fri from 8am to 5pm</p>
                    <a href={`tel:${companyInfo.phone}`} className="text-green-600 font-semibold hover:underline">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 text-sm mb-1">Online support 24/7</p>
                    <a href={`mailto:${companyInfo.email}`} className="text-green-600 font-semibold hover:underline break-all">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Main Office</h3>
                    <p className="text-gray-600 text-sm">
                      {companyInfo.address}<br />
                      {companyInfo.city}<br />
                      {companyInfo.country}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Let's, Grow Online</h3>
                    <p className="text-gray-600 text-sm">Connect with us</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+123 456 7890"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Landscape Design Consultation</option>
                    <option>Lawn Care Services</option>
                    <option>Hardscaping Project</option>
                    <option>Maintenance Contract</option>
                    <option>Other Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us more about your garden project..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-lg text-base font-semibold">
                  SEND MESSAGE →
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
