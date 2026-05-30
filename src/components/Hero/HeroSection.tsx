import { useEffect, useState } from "react";

import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.jpg";

const heroImages = [hero1, hero2, hero3];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden pt-18">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl font-black leading-[1.15] sm:text-4xl lg:text-[44px]">
            Digital Success in Tomorrow’s World
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-8 text-white/90 sm:text-base md:text-justify">
            We design, build, and scale digital solutions for the businesses by
            providing best services of website development, digital marketing
            and tech consulting - engineered to accelerate business growth.
          </p>

          <p className="mt-12 text-2xl font-black text-white sm:text-[32px]">
            Your Success Our Mission
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-md bg-yellow-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-yellow-600">
              Explore Services
              <span className="ml-2">→</span>
            </button>

            <button className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === currentImage ? "bg-yellow-400" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
}
