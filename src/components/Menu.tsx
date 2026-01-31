import { useState } from "react";
import { Flame, Plus, Minus, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    id: 1,
    name: "Margherita",
    description: "Fresh tomatoes, mozzarella, basil, olive oil",
    price: 249,
    isPopular: true,
  },
  {
    id: 2,
    name: "Pepperoni Feast",
    description: "Double pepperoni, mozzarella, oregano",
    price: 349,
    isPopular: true,
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, onions, cilantro",
    price: 399,
    isPopular: false,
  },
  {
    id: 4,
    name: "Veggie Supreme",
    description: "Bell peppers, olives, mushrooms, onions, corn",
    price: 299,
    isPopular: false,
  },
  {
    id: 5,
    name: "Paneer Tikka",
    description: "Spiced paneer, capsicum, onions, mint sauce",
    price: 329,
    isPopular: true,
  },
  {
    id: 6,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, chicken",
    price: 449,
    isPopular: false,
  },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Menu = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item: typeof menuItems[0]) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const getItemQuantity = (id: number) => {
    return cart.find((i) => i.id === id)?.quantity || 0;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrderOnWhatsApp = () => {
    const phone = "919875990099";
    const orderDetails = cart
      .map((item) => `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
      .join("%0A");
    const message = `Hi! I'd like to place an order:%0A%0A${orderDetails}%0A%0ATotal: ₹${totalPrice}`;
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section id="menu" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title glow-text text-3xl md:text-5xl">Our Menu</h2>
        <p className="section-subtitle text-base md:text-lg mb-12 md:mb-16">
          Handcrafted with love, baked to perfection
        </p>

        <div className="grid gap-3 md:gap-4">
          {menuItems.map((item, index) => {
            const quantity = getItemQuantity(item.id);
            return (
              <div
                key={item.id}
                className="menu-item group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards"
                }}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg md:text-xl font-serif font-medium text-foreground">
                      {item.name}
                    </h3>
                    {item.isPopular && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                        <Flame className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <span className="text-primary font-bold text-lg md:text-xl whitespace-nowrap">
                    ₹{item.price}
                  </span>

                  {quantity === 0 ? (
                    <Button
                      size="sm"
                      onClick={() => addToCart(item)}
                      className="rounded-full px-4 h-9 gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                      <span className="hidden sm:inline">Add</span>
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2 bg-primary/10 rounded-full p-1">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                      >
                        <Minus className="w-4 h-4 text-primary" />
                      </button>
                      <span className="w-6 text-center font-semibold text-foreground">
                        {quantity}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-primary-foreground" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Cart Button */}
        {totalItems > 0 && (
          <button
            onClick={() => setShowCart(true)}
            className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg shadow-primary/30 flex items-center gap-3 hover:scale-105 transition-transform animate-slide-up"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="font-semibold">{totalItems} items</span>
            <span className="bg-primary-foreground/20 px-2 py-0.5 rounded-full text-sm">
              ₹{totalPrice}
            </span>
          </button>
        )}

        {/* Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setShowCart(false)}
            />
            <div className="relative bg-card border border-border rounded-t-3xl sm:rounded-3xl w-full max-w-md p-6 animate-slide-up">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-semibold">Your Order</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 max-h-[40vh] overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b border-border/50">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">₹{item.price} each</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-secondary rounded-full p-1">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-7 h-7 rounded-full bg-background flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(menuItems.find(m => m.id === item.id)!)}
                          className="w-7 h-7 rounded-full bg-primary flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3 text-primary-foreground" />
                        </button>
                      </div>
                      <span className="font-semibold w-16 text-right">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-2xl font-bold text-primary">₹{totalPrice}</span>
                </div>
                <Button
                  onClick={placeOrderOnWhatsApp}
                  className="w-full h-14 text-base font-semibold rounded-xl gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
