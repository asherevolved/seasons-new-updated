import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const DEFAULT_LOGOS = [
  {
    id: "client-1",
    description: "Client logo 1",
    image: "/CLIEEEnts/387265760_1389839398264219_6229649353402687814_n-removebg-preview.png",
    className: "h-14 w-auto md:h-16",
  },
  {
    id: "client-2",
    description: "Phoenix One Bangalore West",
    image: "/CLIEEEnts/496-4964615_phoenix-one-bangalore-west-logo-hd-png-download-removebg-preview%20(1).png",
    className: "h-14 w-auto md:h-16",
  },
  {
    id: "client-3",
    description: "Client logo 3",
    image: "/CLIEEEnts/Image_7B4B5E6B_74CC_6E6B_41A6_14A6C0A75519_en.png",
    className: "h-14 w-auto md:h-16",
  },
  {
    id: "client-4",
    description: "Sankalp",
    image: "/CLIEEEnts/Sankalp_Logo_Black.png",
    className: "h-14 w-auto md:h-16",
  },
  {
    id: "client-5",
    description: "Client logo 5",
    image: "/CLIEEEnts/image_2025-10-27_161748871-removebg-preview.png",
    className: "h-14 w-auto md:h-16",
  },
  {
    id: "client-6",
    description: "Client logo 6",
    image: "/CLIEEEnts/image_2025-10-27_161824834-removebg-preview.png",
    className: "h-14 w-auto md:h-16",
  },
  {
    id: "client-7",
    description: "Client logo 7",
    image: "/CLIEEEnts/image_2025-10-27_162038286-removebg-preview.png",
    className: "h-14 w-auto md:h-16",
  },
  {
    id: "client-8",
    description: "Client logo 8",
    image: "/CLIEEEnts/image_2025-10-27_162713374-removebg-preview.png",
    className: "h-14 w-auto md:h-16",
  },
  {
    id: "client-9",
    description: "Client logo 9",
    image: "/CLIEEEnts/image_2026-01-25_162939038-removebg-preview.png",
    className: "h-14 w-auto md:h-16",
  },
  {
    id: "client-10",
    description: "Grand Mercure Mysuru",
    image: "/CLIEEEnts/logo-grand-mercure-mysuru.png",
    className: "h-14 w-auto md:h-16",
  },
];

const Logos3 = ({ heading = "Trusted by leading Clients", logos = DEFAULT_LOGOS, className = "" }) => {
  return (
    <section
      className={`relative pt-16 pb-10 md:pb-12 bg-white ${className}`.trim()}
      data-anim="fade-up"
      data-delay="100"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Trusted</span>
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 text-pretty">{heading}</h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl leading-relaxed">Teams and organizations that trust Seasons to deliver consistently.</p>
      </div>

      <div className="pt-8 md:pt-10 lg:pt-12">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl">
          <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false })]}>
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center md:mx-8">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={`${logo.className || "h-14 w-auto md:h-16"} object-contain`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
