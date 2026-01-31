import { useEffect, useState } from "react";
import logo from "@/assets/logo-generated.png";
import pizza1 from "@/assets/pizza-1.jpg";
import pizza2 from "@/assets/pizza-2.jpg";
import pizza3 from "@/assets/pizza-3.jpg";

const slides = [pizza1, pizza2, pizza3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Sliding Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={`Pizza ${index + 1}`}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-slide-up max-w-lg mx-auto">
        <img
          src={logo}
          alt="Yummy! Bites"
          className="w-36 sm:w-48 md:w-64 h-auto mx-auto drop-shadow-2xl mb-4 md:mb-6"
        />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-3 md:mb-4 glow-text leading-tight">
          Yummy! Bites
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 tracking-wide mb-6 md:mb-8">
          Authentic Wood-Fired Pizzas
        </p>

        {/* Zomato Badge */}
        <a
          href="https://zomato.com"
          target="_blank"
          rel="noopener noreferrer"
          className="badge-zomato hover:scale-105 transition-transform inline-flex text-sm md:text-base"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 4.5h1v3h-1v-3zm-4.25 5h9.5v1h-9.5v-1zm0 2.5h9.5v1h-9.5v-1zm1.5 2.5h6.5v1h-6.5v-1z" />
          </svg>
          Available on Zomato
        </a>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-10 md:mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary w-8"
                  : "bg-foreground/30 w-2 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
