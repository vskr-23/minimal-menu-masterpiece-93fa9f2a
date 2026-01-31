import img1 from "@/assets/gallery-1.png";
import img2 from "@/assets/gallery-2.png";
import img3 from "@/assets/gallery-3.png";
import img4 from "@/assets/gallery-4.png";
import img5 from "@/assets/gallery-5.png";
import img6 from "@/assets/gallery-6.png";
import img7 from "@/assets/gallery-7.png";
import img8 from "@/assets/gallery-8.png";
import img9 from "@/assets/gallery-9.png";

const photos = [
  { src: img1, alt: "YUMMY BITEE Restaurant", link: "https://goo.gl/maps/FsEb22i4DEVchsYf7" },
  { src: img2, alt: "Restaurant Interior", link: "https://goo.gl/maps/FsEb22i4DEVchsYf7" },
  { src: img3, alt: "Pizza Collection", link: "https://goo.gl/maps/FsEb22i4DEVchsYf7" },
  { src: img4, alt: "Dining Experience", link: "https://goo.gl/maps/FsEb22i4DEVchsYf7" },
  { src: img5, alt: "Food Presentation", link: "https://goo.gl/maps/FsEb22i4DEVchsYf7" },
  { src: img6, alt: "Fresh Ingredients", link: "https://goo.gl/maps/FsEb22i4DEVchsYf7" },
  { src: img7, alt: "Kitchen View", link: "https://goo.gl/maps/FsEb22i4DEVchsYf7" },
  { src: img8, alt: "Menu Highlight", link: "https://goo.gl/maps/FsEb22i4DEVchsYf7" },
  { src: img9, alt: "Restaurant Ambiance", link: "https://goo.gl/maps/FsEb22i4DEVchsYf7" },
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title glow-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our Gallery</h2>
        <p className="section-subtitle text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16">
          A glimpse into our kitchen and creations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
          {photos.map((photo, index) => (
            <a
              key={index}
              href={photo.link}
              target="_blank"
              rel="noopener noreferrer"
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
                <div className="w-full">
                  <span className="text-foreground font-medium text-sm md:text-base block mb-1">{photo.alt}</span>
                  <span className="text-primary text-xs md:text-sm flex items-center gap-1">
                    <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 4.5h1v3h-1v-3zm-4.25 5h9.5v1h-9.5v-1zm0 2.5h9.5v1h-9.5v-1zm1.5 2.5h6.5v1h-6.5v-1z"/>
                    </svg>
                    View on Google Maps
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
