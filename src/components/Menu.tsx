import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const menuItems = [
  {
    category: "Signature Coffees",
    items: [
      { name: "Brew & Bean Special", price: "$5.50", description: "Our signature blend with notes of chocolate and caramel" },
      { name: "Golden Sunrise", price: "$4.75", description: "Light roast with citrus undertones" },
      { name: "Midnight Roast", price: "$5.25", description: "Dark roast for the bold coffee lover" }
    ]
  },
  {
    category: "Artisan Pastries",
    items: [
      { name: "Croissant Delight", price: "$3.25", description: "Buttery, flaky pastry baked fresh daily" },
      { name: "Blueberry Muffin", price: "$2.95", description: "Bursting with fresh blueberries" },
      { name: "Chocolate Éclair", price: "$4.50", description: "Classic French pastry with rich chocolate" }
    ]
  },
  {
    category: "Specialty Drinks",
    items: [
      { name: "Vanilla Bean Latte", price: "$4.95", description: "Smooth espresso with real vanilla bean" },
      { name: "Caramel Macchiato", price: "$5.15", description: "Sweet caramel with bold espresso" },
      { name: "Matcha Green Tea", price: "$4.25", description: "Premium Japanese matcha powder" }
    ]
  }
]

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted beverages and freshly baked goods made with love and the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-amber-800">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <span className="text-amber-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu