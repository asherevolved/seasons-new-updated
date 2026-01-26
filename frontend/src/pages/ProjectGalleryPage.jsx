import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/mock';
import { ArrowLeft, X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectGalleryPage = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.slug === projectId);
  const [activeIndex, setActiveIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const projectFolder = project?.folder ?? '';
  const projectFiles = project?.files ?? [];

  const images = useMemo(
    () =>
      projectFiles.map((fileName, index) => ({
        id: index + 1,
        src: encodeURI(`/projects/${projectFolder}/${fileName}`),
        fileName
      })),
    [projectFiles, projectFolder]
  );

  const activeImage = activeIndex == null ? null : images[activeIndex] ?? null;

  const clampZoom = (value) => Math.min(4, Math.max(1, value));
  const zoomIn = () => setZoom((z) => clampZoom(Number((z + 0.25).toFixed(2))));
  const zoomOut = () => setZoom((z) => clampZoom(Number((z - 0.25).toFixed(2))));
  const resetZoom = () => setZoom(1);

  const openAt = (index) => {
    setActiveIndex(index);
    setZoom(1);
  };

  const close = () => {
    setActiveIndex(null);
    setZoom(1);
  };

  const prev = () => {
    if (!images.length) return;
    setActiveIndex((i) => {
      if (i == null) return 0;
      return (i - 1 + images.length) % images.length;
    });
    setZoom(1);
  };

  const next = () => {
    if (!images.length) return;
    setActiveIndex((i) => {
      if (i == null) return 0;
      return (i + 1) % images.length;
    });
    setZoom(1);
  };

  useEffect(() => {
    if (activeIndex == null) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') prev();
      if (event.key === 'ArrowRight') next();
      if (event.key === '+' || event.key === '=') zoomIn();
      if (event.key === '-') zoomOut();
      if (event.key === '0') resetZoom();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center">
        <div className="container mx-auto px-4 text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Project Gallery</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Project not found</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            The project you are looking for does not exist. Please go back to the portfolio and try
            again.
          </p>
          <div className="flex justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 space-y-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Project Gallery</p>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{project.title}</h1>
            <p className="text-green-700 font-semibold text-sm md:text-base">{project.segment}</p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">{project.description}</p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          {images.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600">No images found for this project.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-2xl bg-white shadow-md group cursor-zoom-in"
                  onClick={() => openAt(image.id - 1)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={`${project.title} view ${image.id}`}
                      className="w-full h-full object-contain bg-gray-100 group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {activeImage ? (
        <div className="fixed inset-0 z-[100] bg-black/90" onClick={close}>
          <div
            className="absolute top-6 left-6 right-6 z-30 flex items-center justify-between gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="inline-flex items-center gap-2">
              <button
                type="button"
                onClick={close}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="hidden sm:block text-white/80 text-sm">
                {activeIndex + 1} / {images.length}
              </div>
            </div>

            <div className="inline-flex items-center gap-2">
              <button
                type="button"
                onClick={zoomOut}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                disabled={zoom <= 1}
                aria-label="Zoom out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={zoomIn}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                disabled={zoom >= 4}
                aria-label="Zoom in"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={resetZoom}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                disabled={zoom === 1}
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="absolute inset-0 z-20 flex items-center justify-center p-6"
            onClick={(event) => event.stopPropagation()}
            onWheel={(event) => {
              event.preventDefault();
              event.stopPropagation();
              const delta = event.deltaY;
              setZoom((z) => clampZoom(Number((z + (delta > 0 ? -0.15 : 0.15)).toFixed(2))));
            }}
          >
            <img
              src={activeImage.src}
              alt={`${project.title} view ${activeIndex + 1}`}
              className="max-w-full max-h-full object-contain cursor-zoom-in"
              style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
              draggable={false}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectGalleryPage;
