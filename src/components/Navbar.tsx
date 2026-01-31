import { useState } from "react";
import { Menu as MenuIcon, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onMenuClick: () => void;
  cartItemCount?: number;
}

const Navbar = ({ onMenuClick, cartItemCount = 0 }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/logo-generated.png"
              alt="Yummy! Bites"
              className="h-12 md:h-14 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                Yummy! Bites
              </h1>
              <p className="text-xs text-muted-foreground">Wood-Fired Pizzas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              onClick={onMenuClick}
              className="gap-2 h-9 md:h-10 px-4 md:px-6 rounded-full"
            >
              <MenuIcon className="w-4 h-4" />
              <span className="hidden sm:inline">View Menu</span>
              <span className="sm:hidden">Menu</span>
            </Button>

            {cartItemCount > 0 && (
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cartItemCount}
                </span>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
