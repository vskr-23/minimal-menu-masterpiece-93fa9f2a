import { useEffect, useRef } from "react";
import pizza1 from "@/assets/pizza-1.jpg";
import pizza2 from "@/assets/pizza-2.jpg";
import pizza3 from "@/assets/pizza-3.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import chef from "@/assets/chef-action.jpg";

const foodImages = [
  { src: pizza1, alt: "Delicious Pepperoni Pizza" },
  { src: pizza2, alt: "Classic Margherita" },
  { src: pizza3, alt: "BBQ Chicken Special" },
  { src: interior, alt: "Our Cozy Interior" },
  { src: chef, alt: "Chef at Work" },
  { src: pizza1, alt: "Fresh Pizza" },
];

const FoodCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          scrollContainer.scrollLeft += 1;
          
          // Reset scroll when reaching the end
          if (
            scrollContainer.scrollLeft >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startScroll();

    scrollContainer.addEventListener("mouseenter", () => {
      isPaused = true;
    });

    scrollContainer.addEventListener("mouseleave", () => {
      isPaused = false;
    });

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-2 sm:mb-3">
          Our Specialties
        </h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base">
          Freshly made with premium ingredients
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-hidden px-4 sm:px-6 md:px-8 pb-4 scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...foodImages, ...foodImages].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 h-48 sm:h-56 md:h-64 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodCarousel;
