import { useState } from "react";
import { Flame, Plus, Minus, ShoppingBag, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: number;
  name: string;
  description?: string;
  prices: { size: string; price: number }[];
  isPopular?: boolean;
  category: string;
  section: string;
}

const menuData: MenuItem[] = [
  // PIZZA - Original Range (Veg.)
  { id: 1, name: "Margherita Pizza", description: "Classic Italian Style", prices: [{ size: "Small", price: 99 }, { size: "Medium", price: 179 }, { size: "Large", price: 299 }], isPopular: true, category: "Veg", section: "Pizza - Original Range" },
  { id: 2, name: "Fresh Veggie Pizza", description: "Loaded with Fresh Vegetables", prices: [{ size: "Small", price: 119 }, { size: "Medium", price: 199 }, { size: "Large", price: 369 }], category: "Veg", section: "Pizza - Original Range" },
  { id: 3, name: "Corn Pizza", description: "Sweet Corn Delight", prices: [{ size: "Small", price: 139 }, { size: "Medium", price: 239 }, { size: "Large", price: 409 }], category: "Veg", section: "Pizza - Original Range" },
  { id: 4, name: "Aussie Special Pizza", description: "Mushroom & Olives Classic", prices: [{ size: "Small", price: 139 }, { size: "Medium", price: 239 }, { size: "Large", price: 409 }], category: "Veg", section: "Pizza - Original Range" },
  { id: 5, name: "Indi House Pizza", description: "Paneer, Capsicum, Onion & Olives", prices: [{ size: "Small", price: 139 }, { size: "Medium", price: 239 }, { size: "Large", price: 409 }], category: "Veg", section: "Pizza - Original Range" },
  { id: 6, name: "Paneer Lover Pizza", description: "Double Paneer Capsicum, Onion, Red Paprika, Cheese", prices: [{ size: "Small", price: 149 }, { size: "Medium", price: 249 }, { size: "Large", price: 439 }], category: "Veg", section: "Pizza - Original Range" },
  { id: 7, name: "Mexican Lover Pizza", description: "Mexican Sauce, Capsicum, Onion, Red Paprika, Cheese", prices: [{ size: "Small", price: 169 }, { size: "Medium", price: 259 }, { size: "Large", price: 449 }], category: "Veg", section: "Pizza - Original Range" },

  // PIZZA - Signature Range (Veg.)
  { id: 8, name: "Paneer Tikka Pizza", description: "Tandoori Sauce, Paneer, Capsicum, Red Paprika, Onion, Cheese", prices: [{ size: "Small", price: 169 }, { size: "Medium", price: 259 }, { size: "Large", price: 449 }], isPopular: true, category: "Veg", section: "Pizza - Signature Range" },
  { id: 9, name: "Vegetable King Pizza", description: "Corn, Capsicum, Mushroom, Tomato, Pineapple, Cheese", prices: [{ size: "Small", price: 169 }, { size: "Medium", price: 259 }, { size: "Large", price: 439 }], category: "Veg", section: "Pizza - Signature Range" },
  { id: 10, name: "Barbeque Veg. Pizza", description: "BBQ Sauce, Mushroom, Capsicum, Onion, Pineapple, Cheese", prices: [{ size: "Small", price: 169 }, { size: "Medium", price: 249 }, { size: "Large", price: 429 }], category: "Veg", section: "Pizza - Signature Range" },
  { id: 11, name: "Makhni Gravy Pizza", description: "Makhni Gravy, Capsicum, Onion, Tomato, Red Paprika, Cheese", prices: [{ size: "Small", price: 179 }, { size: "Medium", price: 279 }, { size: "Large", price: 459 }], category: "Veg", section: "Pizza - Signature Range" },
  { id: 12, name: "Veg. Queen Pizza", description: "Tandoori Sauce, Capsicum, Black Olive, Mushroom, Corn, Cheese", prices: [{ size: "Small", price: 179 }, { size: "Medium", price: 299 }, { size: "Large", price: 469 }], category: "Veg", section: "Pizza - Signature Range" },
  { id: 13, name: "Veg. Farm House Pizza", description: "Capsicum, Red & Yellow Bell Peppers, Corn, Cheese", prices: [{ size: "Small", price: 329 }, { size: "Medium", price: 519 }], category: "Veg", section: "Pizza - Signature Range" },
  { id: 14, name: "Veg. Cheese Burst Pizza", description: "Mushroom, Onion, Capsicum, Tomato, Black Olive, Pineapple, Jalapeno, Extra Cheese", prices: [{ size: "Small", price: 349 }, { size: "Medium", price: 539 }], category: "Veg", section: "Pizza - Signature Range" },

  // PIZZA - Original Range (Non Veg.)
  { id: 15, name: "Tandoori Chicken Pizza", description: "Tandoori Sauce with Tandoori Chicken", prices: [{ size: "Small", price: 179 }, { size: "Medium", price: 269 }, { size: "Large", price: 479 }], isPopular: true, category: "Non-Veg", section: "Pizza - Original Range" },
  { id: 16, name: "Spicy Chicken Pizza", description: "Makhni Sauce with Spicy Chicken & Red Paprika", prices: [{ size: "Small", price: 179 }, { size: "Medium", price: 269 }, { size: "Large", price: 479 }], category: "Non-Veg", section: "Pizza - Original Range" },
  { id: 17, name: "Butter Chicken Pizza", description: "Makhni Sauce with Butter Chicken", prices: [{ size: "Small", price: 179 }, { size: "Medium", price: 279 }, { size: "Large", price: 499 }], category: "Non-Veg", section: "Pizza - Original Range" },
  { id: 18, name: "Chicken Kema Pizza", description: "Chicken Kema Gravy", prices: [{ size: "Small", price: 189 }, { size: "Medium", price: 289 }, { size: "Large", price: 499 }], category: "Non-Veg", section: "Pizza - Original Range" },

  // PIZZA - Signature Range (Non Veg.)
  { id: 19, name: "Mahaan Go Chicken Pizza", description: "Mango Ginger, Chicken Kema, Onion, Capsicum, Tomato, Jalapeno, Extra Cheese", prices: [{ size: "Small", price: 199 }, { size: "Medium", price: 309 }, { size: "Large", price: 499 }], category: "Non-Veg", section: "Pizza - Signature Range" },
  { id: 20, name: "Mexican Chicken Pizza", description: "Mexican Sauce, Chicken, Onion, Red Paprika, Jalapeno", prices: [{ size: "Small", price: 199 }, { size: "Medium", price: 309 }, { size: "Large", price: 499 }], category: "Non-Veg", section: "Pizza - Signature Range" },
  { id: 21, name: "Chicken Ultimate Pizza", description: "Tandoori Sauce, Double Chicken, Capsicum, Onion, Olives, Cheese", prices: [{ size: "Small", price: 399 }, { size: "Medium", price: 559 }], isPopular: true, category: "Non-Veg", section: "Pizza - Signature Range" },
  { id: 22, name: "Chicken Cheese Burst Pizza", description: "Makhni Sauce, Chicken, Onion, Capsicum, Black Olive, Pineapple, Extra Cheese", prices: [{ size: "Small", price: 399 }, { size: "Medium", price: 559 }], category: "Non-Veg", section: "Pizza - Signature Range" },
  { id: 23, name: "Five Meat Pizza", description: "Chicken, Salami, Bacon, Onion, Capsicum, Black Olives, Mkt. Mix Herbs & Spices", prices: [{ size: "Small", price: 425 }, { size: "Medium", price: 599 }], category: "Non-Veg", section: "Pizza - Signature Range" },

  // Burgers
  { id: 24, name: "Aloo Tikki Burger", prices: [{ size: "Regular", price: 45 }, { size: "Meal", price: 169 }], category: "Veg", section: "Burgers" },
  { id: 25, name: "Desi Style", prices: [{ size: "Regular", price: 69 }, { size: "Meal", price: 189 }], category: "Veg", section: "Burgers" },
  { id: 26, name: "Cheese Burger", prices: [{ size: "Regular", price: 79 }, { size: "Meal", price: 199 }], category: "Veg", section: "Burgers" },
  { id: 27, name: "Veggie Burger", prices: [{ size: "Regular", price: 79 }, { size: "Meal", price: 199 }], category: "Veg", section: "Burgers" },
  { id: 28, name: "Paneer Zinger Burger", prices: [{ size: "Regular", price: 99 }, { size: "Meal", price: 209 }], category: "Veg", section: "Burgers" },
  { id: 29, name: "Jumbo Maharaja Burger", prices: [{ size: "Regular", price: 119 }, { size: "Meal", price: 229 }], category: "Veg", section: "Burgers" },
  { id: 30, name: "5G Burger", prices: [{ size: "Regular", price: 59 }, { size: "Meal", price: 199 }], category: "Non-Veg", section: "Burgers" },
  { id: 31, name: "Classic Chicken Burger", prices: [{ size: "Regular", price: 69 }, { size: "Meal", price: 199 }], category: "Non-Veg", section: "Burgers" },
  { id: 32, name: "Chicken Popcorn Burger", prices: [{ size: "Regular", price: 79 }, { size: "Meal", price: 199 }], category: "Non-Veg", section: "Burgers" },
  { id: 33, name: "Chicken Zinger Burger", prices: [{ size: "Regular", price: 109 }, { size: "Meal", price: 229 }], category: "Non-Veg", section: "Burgers" },
  { id: 34, name: "Chicken Jumbo Burger", prices: [{ size: "Regular", price: 129 }, { size: "Meal", price: 249 }], category: "Non-Veg", section: "Burgers" },

  // Chinese, Soups, Noodles, Rice
  { id: 35, name: "Veg. Manchow", prices: [{ size: "Regular", price: 89 }], category: "Veg", section: "Soup" },
  { id: 36, name: "Lemon Coriander", prices: [{ size: "Regular", price: 89 }], category: "Veg", section: "Soup" },
  { id: 37, name: "Tomato Soup", prices: [{ size: "Regular", price: 59 }], category: "Veg", section: "Soup" },
  { id: 38, name: "Chicken Hot Soup", prices: [{ size: "Half", price: 109 }, { size: "Full", price: 129 }], category: "Non-Veg", section: "Soup" },
  { id: 39, name: "Chicken Sweet Corn", prices: [{ size: "Half", price: 109 }, { size: "Full", price: 129 }], category: "Non-Veg", section: "Soup" },

  { id: 40, name: "Manchurian (Dry or Gravy)", prices: [{ size: "Regular", price: 139 }], category: "Veg", section: "Chinese" },
  { id: 41, name: "Chesse Chilly", prices: [{ size: "Regular", price: 229 }], category: "Veg", section: "Chinese" },
  { id: 42, name: "Spring Roll", prices: [{ size: "Regular", price: 109 }], category: "Veg", section: "Chinese" },
  { id: 43, name: "Gobi Mushroom", prices: [{ size: "Regular", price: 229 }], category: "Veg", section: "Chinese" },
  { id: 44, name: "Crispy Chilly Baby Corn", prices: [{ size: "Regular", price: 169 }], category: "Veg", section: "Chinese" },
  { id: 45, name: "Honey Chilly Potato", prices: [{ size: "Regular", price: 189 }], category: "Veg", section: "Chinese" },
  { id: 46, name: "Chilly Potato", prices: [{ size: "Regular", price: 169 }], category: "Veg", section: "Chinese" },
  { id: 47, name: "Paneer 65", prices: [{ size: "Regular", price: 269 }], category: "Veg", section: "Chinese" },
  { id: 48, name: "Paneer Chilly", prices: [{ size: "Regular", price: 239 }], category: "Veg", section: "Chinese" },

  { id: 49, name: "Chicken Salt 'n Pepper", prices: [{ size: "Half", price: 189 }, { size: "Full", price: 289 }], category: "Non-Veg", section: "Chinese" },
  { id: 50, name: "Chilly Chicken", prices: [{ size: "Half", price: 239 }, { size: "Full", price: 339 }], category: "Non-Veg", section: "Chinese" },
  { id: 51, name: "Lemon Chicken", prices: [{ size: "Half", price: 269 }, { size: "Full", price: 369 }], category: "Non-Veg", section: "Chinese" },
  { id: 52, name: "Chicken Manchurian", prices: [{ size: "Half", price: 269 }, { size: "Full", price: 529 }], category: "Non-Veg", section: "Chinese" },
  { id: 53, name: "Chicken Hong Kong Chicken", prices: [{ size: "Half", price: 289 }, { size: "Full", price: 559 }], category: "Non-Veg", section: "Chinese" },
  { id: 54, name: "Chicken 65", prices: [{ size: "Half", price: 319 }, { size: "Full", price: 549 }], category: "Non-Veg", section: "Chinese" },

  { id: 55, name: "Veg. Noodles", prices: [{ size: "Regular", price: 139 }], category: "Veg", section: "Noodles" },
  { id: 56, name: "Schezwan Noodle", prices: [{ size: "Regular", price: 139 }], category: "Veg", section: "Noodles" },
  { id: 57, name: "Hakka Noodles", prices: [{ size: "Regular", price: 139 }], category: "Veg", section: "Noodles" },
  { id: 58, name: "Chilly Garlic Noodles", prices: [{ size: "Regular", price: 139 }], category: "Veg", section: "Noodles" },

  { id: 59, name: "Egg Noodles", prices: [{ size: "Regular", price: 159 }], category: "Non-Veg", section: "Noodles" },
  { id: 60, name: "Chicken Noodles", prices: [{ size: "Regular", price: 189 }], category: "Non-Veg", section: "Noodles" },
  { id: 61, name: "Chicken Hakka Noodles", prices: [{ size: "Regular", price: 189 }], category: "Non-Veg", section: "Noodles" },

  { id: 62, name: "Veg. Fried Rice", prices: [{ size: "Regular", price: 139 }], category: "Veg", section: "Rice" },
  { id: 63, name: "Schezwan Fried Rice", prices: [{ size: "Regular", price: 139 }], category: "Veg", section: "Rice" },
  { id: 64, name: "Singapore Fried Rice", prices: [{ size: "Regular", price: 149 }], category: "Veg", section: "Rice" },

  { id: 65, name: "Egg Fried Rice", prices: [{ size: "Regular", price: 159 }], category: "Non-Veg", section: "Rice" },
  { id: 66, name: "Chicken Fried Rice", prices: [{ size: "Regular", price: 189 }], category: "Non-Veg", section: "Rice" },

  // Salad, Fish, Nuggets, Momos, Dessert
  { id: 67, name: "Green Salad", prices: [{ size: "Regular", price: 159 }], category: "Veg", section: "Salad" },
  { id: 68, name: "Salad Veg.", prices: [{ size: "Regular", price: 179 }], category: "Veg", section: "Salad" },
  { id: 69, name: "Falafel Veg.", prices: [{ size: "Regular", price: 229 }], category: "Veg", section: "Salad" },
  { id: 70, name: "Healthy Salad", prices: [{ size: "Regular", price: 179 }], category: "Veg", section: "Salad" },

  { id: 71, name: "Chicken (Hawai) Salad", prices: [{ size: "Regular", price: 189 }], category: "Non-Veg", section: "Salad" },
  { id: 72, name: "Chicken Mexican", prices: [{ size: "Regular", price: 189 }], category: "Non-Veg", section: "Salad" },

  { id: 73, name: "Fried Fish (8 Pcs)", prices: [{ size: "Regular", price: 419 }], category: "Non-Veg", section: "Fish" },
  { id: 74, name: "Chilly Fish (8 Pcs)", prices: [{ size: "Regular", price: 429 }], category: "Non-Veg", section: "Fish" },

  { id: 75, name: "Chicken Nuggets (6 Pcs)", prices: [{ size: "Regular", price: 129 }], category: "Non-Veg", section: "Nuggets" },
  { id: 76, name: "Chicken Nuggets (8 Pcs)", prices: [{ size: "Regular", price: 169 }], category: "Non-Veg", section: "Nuggets" },
  { id: 77, name: "Chicken Nuggets (4 Pcs)", prices: [{ size: "Regular", price: 109 }], category: "Non-Veg", section: "Nuggets" },

  { id: 78, name: "Leg (2 Pcs)", prices: [{ size: "Regular", price: 119 }], category: "Non-Veg", section: "Hot 'n Crispy Leg Piece" },
  { id: 79, name: "Italian Pan Chicken", prices: [{ size: "Regular", price: 239 }], category: "Non-Veg", section: "Hot 'n Crispy Leg Piece" },
  { id: 80, name: "Leg (4 Pcs)", prices: [{ size: "Regular", price: 199 }], category: "Non-Veg", section: "Hot 'n Crispy Leg Piece" },
  { id: 81, name: "Leg (12 Pcs)", prices: [{ size: "Regular", price: 589 }], category: "Non-Veg", section: "Hot 'n Crispy Leg Piece" },
  { id: 82, name: "Leg (8 Pcs)", prices: [{ size: "Regular", price: 399 }], category: "Non-Veg", section: "Hot 'n Crispy Leg Piece" },

  { id: 83, name: "Veg. Momos (8 Pcs)", prices: [{ size: "Regular", price: 89 }], category: "Veg", section: "Momos" },
  { id: 84, name: "Paneer Momos (10 Pcs)", prices: [{ size: "Regular", price: 109 }], category: "Veg", section: "Momos" },

  { id: 85, name: "Choco Gulab", prices: [{ size: "Regular", price: 69 }], category: "Veg", section: "Dessert" },
  { id: 86, name: "Choco Lava", prices: [{ size: "Regular", price: 79 }], category: "Veg", section: "Dessert" },
  { id: 87, name: "Choco Lava with Ice Cream", prices: [{ size: "Regular", price: 109 }], category: "Veg", section: "Dessert" },
  { id: 88, name: "Vanilla Ice Cream", prices: [{ size: "Regular", price: 49 }], category: "Veg", section: "Dessert" },
  { id: 89, name: "Flavored Ice Cream", prices: [{ size: "Regular", price: 69 }], category: "Veg", section: "Dessert" },

  // Pizza Toppings
  { id: 90, name: "Cheese", prices: [{ size: "50g", price: 50 }, { size: "100g", price: 100 }], category: "Extra", section: "Pizza Extra Toppings" },
  { id: 91, name: "Vegetables (Any)", prices: [{ size: "50g", price: 50 }, { size: "100g", price: 100 }], category: "Extra", section: "Pizza Extra Toppings" },
  { id: 92, name: "Chicken", prices: [{ size: "50g", price: 50 }, { size: "100g", price: 100 }], category: "Extra", section: "Pizza Extra Toppings" },
  { id: 93, name: "Any Dip", prices: [{ size: "Regular", price: 20 }], category: "Extra", section: "Pizza Extra Toppings" },
  { id: 94, name: "Cheese Burst", prices: [{ size: "100g", price: 100 }, { size: "150g", price: 150 }], category: "Extra", section: "Pizza Extra Toppings" },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  selectedSize: string;
}

const Menu = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Pizza - Original Range",
    "Pizza - Signature Range",
  ]);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const addToCart = (item: MenuItem, size?: string) => {
    const selectedSize = size || selectedSizes[item.id] || item.prices[0].size;
    const priceObj = item.prices.find((p) => p.size === selectedSize);
    if (!priceObj) return;

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.id === item.id && i.selectedSize === selectedSize
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: priceObj.price,
          quantity: 1,
          selectedSize,
        },
      ];
    });
  };

  const removeFromCart = (id: number, size: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.id === id && i.selectedSize === size
      );
      if (existingIndex < 0) return prev;

      const existing = prev[existingIndex];
      if (existing.quantity > 1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity - 1,
        };
        return updated;
      }
      return prev.filter((_, i) => i !== existingIndex);
    });
  };

  const getItemQuantity = (id: number, size: string) => {
    return cart.find((i) => i.id === id && i.selectedSize === size)?.quantity || 0;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrderOnWhatsApp = () => {
    const phone = "919875990099";
    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} (${item.selectedSize}) x${item.quantity} - ₹${
            item.price * item.quantity
          }`
      )
      .join("%0A");
    const message = `Hi! I'd like to place an order:%0A%0A${orderDetails}%0A%0ATotal: ₹${totalPrice}`;
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  const sections = [
    "Pizza - Original Range",
    "Pizza - Signature Range",
    "Burgers",
    "Chinese",
    "Soup",
    "Noodles",
    "Rice",
    "Salad",
    "Fish",
    "Nuggets",
    "Hot 'n Crispy Leg Piece",
    "Momos",
    "Dessert",
    "Pizza Extra Toppings",
  ];

  const groupedMenu = sections.reduce((acc, section) => {
    acc[section] = menuData.filter((item) => item.section === section);
    return acc;
  }, {} as { [key: string]: MenuItem[] });

  return (
    <section id="menu" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title glow-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our Complete Menu</h2>
        <p className="section-subtitle text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-12">
          Handcrafted with love, baked to perfection
        </p>

        {/* Menu Sections */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {sections.map((section) => {
            const items = groupedMenu[section];
            if (!items || items.length === 0) return null;
            const isExpanded = expandedSections.includes(section);

            return (
              <div
                key={section}
                className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg md:text-2xl font-serif font-semibold text-foreground">
                      {section}
                    </h3>
                    <span className="text-xs md:text-sm bg-primary/20 text-primary px-2 md:px-3 py-1 rounded-full font-medium">
                      {items.length} items
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
                  )}
                </button>

                {/* Section Items */}
                {isExpanded && (
                  <div className="p-4 md:p-6">
                    <div className="grid gap-3 md:gap-4">
                      {items.map((item, index) => {
                        const firstSize = item.prices[0].size;
                        const selectedSize = selectedSizes[item.id] || firstSize;
                        const quantity = getItemQuantity(item.id, selectedSize);
                        const currentPrice =
                          item.prices.find((p) => p.size === selectedSize)?.price ||
                          item.prices[0].price;

                        return (
                          <div
                            key={item.id}
                            className="menu-item group flex flex-col sm:flex-row sm:items-start justify-between gap-3 md:gap-4 hover:bg-secondary/30 p-3 md:p-4 rounded-xl transition-all"
                            style={{
                              animationDelay: `${index * 0.05}s`,
                              animationFillMode: "forwards",
                            }}
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h4 className="text-sm md:text-base lg:text-lg font-medium text-foreground">
                                  {item.name}
                                </h4>
                                {item.isPopular && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                                    <Flame className="w-3 h-3" />
                                    Popular
                                  </span>
                                )}
                                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                                  {item.category}
                                </span>
                              </div>
                              {item.description && (
                                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-2">
                                  {item.description}
                                </p>
                              )}

                              {/* Size Selection */}
                              {item.prices.length > 1 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {item.prices.map((priceOption) => (
                                    <button
                                      key={priceOption.size}
                                      onClick={() =>
                                        setSelectedSizes((prev) => ({
                                          ...prev,
                                          [item.id]: priceOption.size,
                                        }))
                                      }
                                      className={`px-3 py-1 text-xs md:text-sm rounded-full border transition-all ${
                                        selectedSize === priceOption.size
                                          ? "bg-primary text-primary-foreground border-primary"
                                          : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50"
                                      }`}
                                    >
                                      {priceOption.size} - ₹{priceOption.price}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 sm:min-w-[160px]">
                              <span className="text-primary font-bold text-base md:text-lg lg:text-xl whitespace-nowrap">
                                ₹{currentPrice}
                              </span>

                              {quantity === 0 ? (
                                <Button
                                  size="sm"
                                  onClick={() => addToCart(item, selectedSize)}
                                  className="rounded-full px-4 h-9 gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
                                >
                                  <Plus className="w-4 h-4" />
                                  <span className="hidden sm:inline">Add</span>
                                </Button>
                              ) : (
                                <div className="flex items-center gap-2 bg-primary/10 rounded-full p-1">
                                  <button
                                    onClick={() => removeFromCart(item.id, selectedSize)}
                                    className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                                  >
                                    <Minus className="w-4 h-4 text-primary" />
                                  </button>
                                  <span className="w-6 text-center font-semibold text-foreground">
                                    {quantity}
                                  </span>
                                  <button
                                    onClick={() => addToCart(item, selectedSize)}
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
                  </div>
                )}
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
                {cart.map((item, index) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${index}`}
                    className="flex items-center justify-between py-3 border-b border-border/50"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.selectedSize} - ₹{item.price} each
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-secondary rounded-full p-1">
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="w-7 h-7 rounded-full bg-background flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => {
                            const menuItem = menuData.find((m) => m.id === item.id);
                            if (menuItem) addToCart(menuItem, item.selectedSize);
                          }}
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
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
