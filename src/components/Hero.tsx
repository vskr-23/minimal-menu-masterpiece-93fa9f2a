import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
      <div className="animate-fade-up">
        <img 
          src={logo} 
          alt="Yummy! Bites Logo" 
          className="w-64 md:w-80 h-auto drop-shadow-2xl"
        />
      </div>
      <p className="mt-8 text-muted-foreground text-lg tracking-widest uppercase">
        Authentic Pizza • Fresh Ingredients
      </p>
    </section>
  );
};

export default Hero;
