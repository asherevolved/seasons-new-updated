import React, { useEffect, useMemo, useState } from 'react';
import { projects } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const heroSlides = useMemo(
    () => [
      encodeURI('/projects/WhatsApp Image 2026-01-21 at 7.53.23 PM.jpeg'),
      encodeURI('/projects/WhatsApp Image 2026-01-21 at 7.53.39 PM.jpeg')
    ],
    []
  );
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveHeroSlide((i) => (i + 1) % heroSlides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                idx === activeHeroSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${src}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
              <div className="grain-overlay"></div>
            </div>
          ))}
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-20 left-20 w-64 h-64 bg-green-500/10 organic-shape blur-3xl"></div>
          <div className="floating-element absolute bottom-32 right-32 w-80 h-80 bg-emerald-500/10 organic-shape-2 blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fadeInUp space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-3 glass-dark rounded-full mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold uppercase tracking-wider">Our Masterpieces</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Previous Projects Portfolio
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto opacity-90">
              Explore our collection of transformed landscapes, from intimate residential gardens to expansive
              commercial green spaces. We bring nature to life.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section with Modern Design */}
      <section className="sticky top-20 z-40 py-8 glass border-b border-gray-100">
        <div className="container mx-auto px-4"></div>
      </section>

      {/* Projects Grid with Advanced Cards */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              (() => {
                const thumbnailFile = project.files?.[0];
                const thumbnailSrc = thumbnailFile
                  ? encodeURI(`/projects/${project.folder}/${thumbnailFile}`)
                  : undefined;

                return (
              <div
                key={project.id}
                className="card-modern animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass rounded-3xl overflow-hidden shadow-2xl h-full group">
                  {/* Image Container */}
                  <div className="image-zoom relative h-80 overflow-hidden">
                    <img
                      src={thumbnailSrc}
                      alt={project.title}
                      className="w-full h-full object-contain bg-gray-100"
                    />
                    <div className="gradient-overlay"></div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-display text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/90 text-sm">{project.segment}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-semibold rounded-full border border-green-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="btn-modern w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 group text-center"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
                );
              })()
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-emerald-900/90"></div>
          <div className="grain-overlay"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-20 right-20 w-96 h-96 bg-white/5 organic-shape blur-3xl"></div>
          <div className="floating-element absolute bottom-20 left-20 w-96 h-96 bg-white/5 organic-shape-2 blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="font-display text-5xl md:text-6xl font-bold">Inspired by our work?</h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Let's start discussing your next project. Our experts are ready to transform your vision into reality.
            </p>
            <Button className="btn-modern bg-white text-green-700 hover:bg-gray-100 px-10 py-7 rounded-full text-lg font-semibold mt-8">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
