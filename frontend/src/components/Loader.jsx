import React, { useState, useEffect } from "react";
import { Trees, Sprout, Shovel, Droplets, Flower2, Leaf, Scissors, Sun } from "lucide-react";
const icons = [
  { icon: Trees, delay: 0 },
  { icon: Sprout, delay: 200 },
  { icon: Shovel, delay: 400 },
  { icon: Droplets, delay: 600 },
  { icon: Flower2, delay: 800 },
  { icon: Leaf, delay: 1000 },
  { icon: Scissors, delay: 1200 },
  { icon: Sun, delay: 1400 },
];

const LandscapingLoader = ({ size = 48, duration = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length);
    }, duration / icons.length);
    return () => clearInterval(interval);
  }, [duration, icons.length]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-green-600/10 border-2 border-green-600/20 animate-pulse" />
        </div>
        {icons.map((item, index) => {
          const Icon = item.icon;
          const angle = (index / icons.length) * 360;
          const radius = 80;
          const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
          const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transition-all duration-500 ease-in-out"
              style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            >
              <div
                className={`rounded-full p-3 transition-all duration-500 ease-in-out ${
                  isActive ? "bg-green-600 text-white scale-110 shadow-lg shadow-green-600/40" : "bg-muted text-muted-foreground scale-100"
                }`}
              >
                <Icon size={size / 2} className={`${isActive ? "animate-pulse" : ""}`} />
              </div>
            </div>
          );
        })}
        <div className="absolute inset-0 flex items-center justify-center">
          {React.createElement(icons[activeIndex].icon, { size: size, className: "text-green-600 animate-pulse" })}
        </div>
        <div className="absolute -bottom-16 left-0 right-0 text-center">
          <p className="text-lg font-semibold text-foreground mb-2">Loading Your Landscape</p>
          <div className="flex justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" style={{ animationDelay: "200ms" }} />
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" style={{ animationDelay: "400ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const AppLoaderOverlay = ({ visible, duration = 3000 }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-white">
      <LandscapingLoader size={56} duration={duration} />
    </div>
  );
};

export { LandscapingLoader, AppLoaderOverlay };
export default LandscapingLoader;
