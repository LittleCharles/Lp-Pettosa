import React, { useEffect, useRef } from "react";

// Importando os logos
import Logo1 from "../assets/logos/Logo1.png";
import Logo2 from "../assets/logos/Logo2.png";
import Logo3 from "../assets/logos/Logo3.png";
import Logo4 from "../assets/logos/Logo4.png";
import Logo5 from "../assets/logos/Logo5.png";

const LogosCarousel = () => {
  const logos = [
    { id: 1, src: Logo1, alt: "Logo 1" },
    { id: 2, src: Logo2, alt: "Logo 2" },
    { id: 3, src: Logo3, alt: "Logo 3" },
    { id: 4, src: Logo4, alt: "Logo 4" },
    { id: 5, src: Logo5, alt: "Logo 5" },
  ];

  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const SPEED = 1;
    const INTERVAL = 20;

    if (slider) {
      const cloneItems = () => {
        const children = Array.from(slider.children);

        children.forEach((child) => {
          const clone = child.cloneNode(true);
          slider.appendChild(clone);
        });
      };

      cloneItems();

      const moveSlides = () => {
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += SPEED;
        }
      };

      intervalRef.current = setInterval(moveSlides, INTERVAL);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative">
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white from-40% via-white via-70% to-transparent z-10"></div>

        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white from-40% via-white via-70% to-transparent z-10"></div>

        <div
          className="flex overflow-x-hidden scrollbar-hide"
          ref={sliderRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex-shrink-0 flex items-center justify-center px-8"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosCarousel;
