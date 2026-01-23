import React, { useState } from 'react';
import { projects, categories } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Filter } from 'lucide-react';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-semibold uppercase tracking-wide">Our Masterpieces</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Previous Projects Portfolio</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Explore our collection of transformed landscapes, from intimate residential gardens to expansive
            commercial green spaces. We bring nature to life.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleProjects(6);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.year}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 h-auto font-semibold group/btn"
                  >
                    VIEW CASE STUDY{' '}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center mt-12">
              <Button
                onClick={loadMore}
                className="bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white px-8 py-6 rounded-full text-base font-semibold transition-all"
              >
                Load More Projects
              </Button>
            </div>
          )}
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
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Inspired by our work?</h2>
            <p className="text-xl opacity-90">
              Let's start discussing your next project. Our experts are ready to transform your vision into reality.
            </p>
            <Button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-6 rounded-full text-base font-semibold mt-6">
              START YOUR PROJECT
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
