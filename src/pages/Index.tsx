import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Info from "@/components/Info";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Menu />
      <Info />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
