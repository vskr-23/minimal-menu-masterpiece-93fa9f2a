import { Pizza, Flame, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="section-title glow-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Why Choose Us</h2>
          <p className="section-subtitle text-sm sm:text-base md:text-lg mt-2">
            Serving happiness since day one
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center group p-4 sm:p-6 rounded-2xl hover:bg-secondary/30 transition-all">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300">
              <Pizza className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2">Wood-Fired Perfection</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Authentic Italian-style pizzas baked in our traditional wood-fired oven
            </p>
          </div>

          <div className="text-center group p-4 sm:p-6 rounded-2xl hover:bg-secondary/30 transition-all">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300">
              <Flame className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2">Fresh Ingredients</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Only the finest and freshest ingredients in every dish we serve
            </p>
          </div>

          <div className="text-center group p-4 sm:p-6 rounded-2xl hover:bg-secondary/30 transition-all">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300">
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2">Made with Love</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Every pizza is crafted with passion and attention to detail
            </p>
          </div>

          <div className="text-center group p-4 sm:p-6 rounded-2xl hover:bg-secondary/30 transition-all">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300">
              <Award className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2">Trusted Quality</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Rated 4.6 on Zomato with 580+ happy customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
