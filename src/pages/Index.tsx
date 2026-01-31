import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FoodCarousel from "@/components/FoodCarousel";
import PhotoGallery from "@/components/PhotoGallery";
import Reviews from "@/components/Reviews";
import Info from "@/components/Info";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MenuModal from "@/components/MenuModal";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <Hero onViewMenu={() => setIsMenuOpen(true)} />
      <About />
      <FoodCarousel />
      <PhotoGallery />
      <Reviews />
      <Info />
      <ContactForm />
      <Footer />
      
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default Index;
