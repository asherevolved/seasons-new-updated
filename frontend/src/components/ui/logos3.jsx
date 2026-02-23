import React from "react";

const DEFAULT_LOGOS = [
  {
    id: "client-1",
    description: "Client logo 1",
    image: "/CLIEEEnts/387265760_1389839398264219_6229649353402687814_n-removebg-preview.png",
  },
  {
    id: "client-2",
    description: "Phoenix One Bangalore West",
    image: "/CLIEEEnts/496-4964615_phoenix-one-bangalore-west-logo-hd-png-download-removebg-preview%20(1).png",
  },
  {
    id: "client-3",
    description: "Client logo 3",
    image: "/CLIEEEnts/Image_7B4B5E6B_74CC_6E6B_41A6_14A6C0A75519_en.png",
  },
  {
    id: "client-4",
    description: "Sankalp",
    image: "/CLIEEEnts/Sankalp_Logo_Black.png",
  },
  {
    id: "client-5",
    description: "Client logo 5",
    image: "/CLIEEEnts/image_2025-10-27_161748871-removebg-preview.png",
  },
  {
    id: "client-6",
    description: "Client logo 6",
    image: "/CLIEEEnts/image_2025-10-27_161824834-removebg-preview.png",
  },
  {
    id: "client-7",
    description: "Client logo 7",
    image: "/CLIEEEnts/image_2025-10-27_162038286-removebg-preview.png",
  },
  {
    id: "client-8",
    description: "Client logo 8",
    image: "/CLIEEEnts/image_2025-10-27_162713374-removebg-preview.png",
  },
  {
    id: "client-9",
    description: "Client logo 9",
    image: "/CLIEEEnts/image_2026-01-25_162939038-removebg-preview.png",
  },
  {
    id: "client-10",
    description: "Grand Mercure Mysuru",
    image: "/CLIEEEnts/logo-grand-mercure-mysuru.png",
  },
];

/* ── inline keyframe style injected once ── */
const marqueeStyle = `
  @keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-scroll 30s linear infinite;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }
`;

const LogoSlot = ({ logo }) => (
  <div
    style={{ width: "220px", flexShrink: 0, padding: "0 32px" }}
    className="flex items-center justify-center"
  >
    <img
      src={logo.image}
      alt={logo.description}
      style={{ height: "96px", maxWidth: "100%", objectFit: "contain" }}
      className="md:!h-[128px]"
    />
  </div>
);

const Logos3 = ({ heading = "Trusted by leading Clients", logos = DEFAULT_LOGOS, className = "" }) => {
  return (
    <section
      className={`relative pt-16 pb-10 md:pb-12 bg-white ${className}`.trim()}
      data-anim="fade-up"
      data-delay="100"
    >
      {/* inject keyframes */}
      <style>{marqueeStyle}</style>

      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Trusted</span>
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 text-pretty">{heading}</h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl leading-relaxed">
          Teams and organizations that trust Seasons to deliver consistently.
        </p>
      </div>

      {/* marquee strip */}
      <div className="pt-10 md:pt-12 overflow-hidden">
        {/* fade edges */}
        <div className="relative">
          <div
            style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", zIndex: 10,
              background: "linear-gradient(to right, white, transparent)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", zIndex: 10,
              background: "linear-gradient(to left, white, transparent)",
              pointerEvents: "none",
            }}
          />

          {/* Two identical sets = seamless loop when first set scrolls fully off-screen */}
          <div className="marquee-track">
            {logos.map((logo) => (
              <LogoSlot key={`a-${logo.id}`} logo={logo} />
            ))}
            {logos.map((logo) => (
              <LogoSlot key={`b-${logo.id}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
