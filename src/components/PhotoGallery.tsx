import pizza1 from "@/assets/pizza-1.jpg";
import pizza2 from "@/assets/pizza-2.jpg";
import pizza3 from "@/assets/pizza-3.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import chef from "@/assets/chef-action.jpg";

const photos = [
  { src: pizza1, alt: "Pepperoni Pizza" },
  { src: interior, alt: "Restaurant Interior" },
  { src: pizza2, alt: "Margherita Pizza" },
  { src: chef, alt: "Chef Making Pizza" },
  { src: pizza3, alt: "BBQ Chicken Pizza" },
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title glow-text text-3xl md:text-5xl">Our Gallery</h2>
        <p className="section-subtitle text-base md:text-lg mb-12 md:mb-16">
          A glimpse into our kitchen and creations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`photo-card group cursor-pointer relative overflow-hidden ${
                index === 1 ? "row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 1 ? "h-full" : "aspect-square"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                <span className="text-foreground font-medium text-sm md:text-base">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
