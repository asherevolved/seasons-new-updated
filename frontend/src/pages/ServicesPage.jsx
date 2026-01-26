import React from 'react';
import * as Icons from 'lucide-react';
import { services, otherServices } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Check } from 'lucide-react';

const ServicesPage = () => {
  const whatsappQuoteLink = 'https://wa.link/9wozd4';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1572085313466-6710de8d7ba3')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gardening Services</h1>
          <p className="text-xl md:text-2xl font-light">
            From complete landscape makeovers to regular maintenance, we offer professional
            services to keep your outdoor spaces stunning year-round
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon];
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Side */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-6 left-6 bg-white rounded-lg px-4 py-2 shadow-lg">
                      <span className="text-green-600 font-bold">{service.name}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                    <IconComponent className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                      {`0${index + 1}`} - Service We Offer
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{service.name}</h2>

                  <p className="text-gray-600 leading-relaxed">{service.details}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-base"
                    onClick={() => {
                      window.location.assign(whatsappQuoteLink);
                    }}
                  >
                    Request A Quote →
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Other Services We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our core services, we provide additional expertise to complete your landscaping vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service) => {
              const IconComponent = Icons[service.icon];
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all hover:border-green-600 border-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                      <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Garden?</h2>
            <p className="text-xl opacity-90">
              Let's discuss your landscaping needs. Our team is ready to bring your outdoor vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Icons.Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm opacity-80">Call us now</p>
                  <p className="font-bold text-lg">+91 9900053707</p>
                </div>
              </div>
              <Button
                className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 rounded-full text-base font-semibold"
                onClick={() => {
                  window.location.assign(whatsappQuoteLink);
                }}
              >
                START YOUR PROJECT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Request a Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Request a Quote</h3>
              <p className="text-gray-600 mb-8 text-center">
                Tell us about your project and we'll provide a detailed quote tailored to your needs
              </p>
              <form
                className="space-y-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  window.location.assign(whatsappQuoteLink);
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                      {services.map((service) => (
                        <option key={service.id}>{service.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your landscaping project..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-lg text-base font-semibold"
                >
                  SEND REQUEST →
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
