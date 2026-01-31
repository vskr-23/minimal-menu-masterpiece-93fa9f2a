const menuItems = [
  {
    name: "Margherita",
    description: "Fresh tomatoes, mozzarella, basil, olive oil",
    price: "₹249",
  },
  {
    name: "Pepperoni Feast",
    description: "Double pepperoni, mozzarella, oregano",
    price: "₹349",
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, onions, cilantro",
    price: "₹399",
  },
  {
    name: "Veggie Supreme",
    description: "Bell peppers, olives, mushrooms, onions, corn",
    price: "₹299",
  },
  {
    name: "Paneer Tikka",
    description: "Spiced paneer, capsicum, onions, mint sauce",
    price: "₹329",
  },
  {
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, chicken",
    price: "₹449",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-4 subtle-glow">Our Menu</h2>
        <p className="text-center text-muted-foreground mb-12">
          Handcrafted with love, baked to perfection
        </p>
        
        <div className="grid gap-4">
          {menuItems.map((item, index) => (
            <div 
              key={item.name}
              className="menu-card flex items-center justify-between"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <h3 className="text-xl font-serif font-medium text-foreground">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.description}
                </p>
              </div>
              <span className="text-primary font-semibold text-lg whitespace-nowrap ml-4">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
