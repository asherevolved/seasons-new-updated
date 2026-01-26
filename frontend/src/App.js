import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectGalleryPage from "./pages/ProjectGalleryPage";
import { AppLoaderOverlay } from "./components/Loader";
import { initRevealAnimations } from "./utils/animations";
import BackgroundLeafPattern from "./components/BackgroundLeafPattern";

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const firstLoad = useRef(true);
  const FULL_DURATION = 4500;
  const NAV_DURATION = 1200;
  const whatsappQuoteLink = "https://wa.link/9wozd4";
  useEffect(() => {
    document.title = "Seasons Landscapers";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Seasons Landscapers");
    }

    const iconHref = "/SEASONS___1_-removebg-preview.png";
    const ensureIcon = (rel) => {
      let link = document.querySelector(`link[rel='${rel}']`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", iconHref);
      link.setAttribute("type", "image/png");
    };

    ensureIcon("icon");
    ensureIcon("shortcut icon");
    ensureIcon("apple-touch-icon");
  }, []);
  useEffect(() => {
    setLoading(true);
    const duration = firstLoad.current ? FULL_DURATION : NAV_DURATION;
    const t = setTimeout(() => {
      setLoading(false);
      firstLoad.current = false;
    }, duration);
    return () => clearTimeout(t);
  }, [location.pathname]);
  useEffect(() => {
    if (!loading) {
      requestAnimationFrame(() => initRevealAnimations());
    }
  }, [loading]);
  return (
    <>
      <AppLoaderOverlay visible={loading} duration={firstLoad.current ? FULL_DURATION : NAV_DURATION} />
      <Header />
      <BackgroundLeafPattern />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:projectId" element={<ProjectGalleryPage />} />
      </Routes>
      <a
        href={whatsappQuoteLink}
        aria-label="Contact on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
      >
        <Phone className="h-6 w-6" />
      </a>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
