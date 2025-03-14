"use client";
import { motion } from "framer-motion";

const menuCategories = [
  {
    name: "Appetizers",
    description: "Exquisite beginnings to awaken your palate",
    items: [
      {
        name: "Caviar Constellation",
        description:
          "Imperial Ossetra caviar, champagne gelée, mother of pearl spoon",
        price: "€95",
        featured: true,
      },
      {
        name: "Foie Gras Terrine",
        description: "House-made brioche, fig compote, aged balsamic reduction",
        price: "€78",
      },
      {
        name: "Truffle Velouté",
        description: "Wild mushroom espuma, black truffle shavings, chive oil",
        price: "€65",
      },
      {
        name: "Lobster Medallions",
        description: "Citrus-infused, avocado mousse, edible gold leaf",
        price: "€82",
      },
    ],
  },
  {
    name: "Main Courses",
    description: "Masterfully crafted entrées of unparalleled excellence",
    items: [
      {
        name: "Wagyu Tenderloin",
        description:
          "A5 Japanese Wagyu, truffle pomme purée, bordelaise reduction",
        price: "€175",
        featured: true,
      },
      {
        name: "Dover Sole Meunière",
        description:
          "Wild-caught, brown butter emulsion, preserved lemon, capers",
        price: "€145",
      },
      {
        name: "Rack of Lamb",
        description:
          "Herb-crusted New Zealand lamb, smoked eggplant, rosemary jus",
        price: "€135",
      },
      {
        name: "Truffle Risotto",
        description:
          "Carnaroli rice, seasonal truffles, 36-month aged Parmesan",
        price: "€110",
      },
    ],
  },
  {
    name: "Desserts",
    description: "Divine conclusions to an unforgettable experience",
    items: [
      {
        name: "Grand Cru Soufflé",
        description: "Valrhona chocolate, gold leaf, vanilla bean ice cream",
        price: "€45",
        featured: true,
      },
      {
        name: "Crème Brûlée Royale",
        description: "Madagascar vanilla, caramelized sugar, fresh berries",
        price: "€38",
      },
      {
        name: "Exotic Fruit Pavlova",
        description: "Passion fruit, mango, coconut sorbet, edible flowers",
        price: "€42",
      },
      {
        name: "Artisanal Cheese Selection",
        description:
          "Curated selection of five rare cheeses, house-made preserves",
        price: "€55",
      },
    ],
  },
];

const MenuCategory = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl text-gold-400 mb-3">
          {category.name}
        </h2>
        <p className="text-white/70 italic">{category.description}</p>
        <div className="w-16 h-0.5 bg-gold-400/50 mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {category.items.map((item, itemIndex) => (
          <motion.div
            key={itemIndex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * itemIndex }}
            viewport={{ once: true }}
            className={`${
              item.featured ? "border border-gold-400/30 p-6" : "p-2"
            }`}
          >
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-serif text-xl text-white">{item.name}</h3>
              <span className="text-gold-400 font-medium">{item.price}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
            {item.featured && (
              <div className="mt-3 flex items-center">
                <span className="text-xs uppercase tracking-wider text-gold-400 border border-gold-400/50 px-2 py-0.5">
                  Chef's Selection
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Menu = () => {
  return (
    <div className="bg-black text-white min-h-screen" id="Menu">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="/img/menu-header.jpg"
          alt="Elysium Culinary Creations"
          className="absolute w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold tracking-tight mb-4">
              Our <span className="text-gold-400">Menu</span>
            </h1>
            <p className="text-white/80 max-w-xl mx-auto px-4">
              A symphony of flavors crafted with precision and passion
            </p>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-serif italic text-lg mb-4">
            "Cuisine is the art of instantaneously delighting all of our
            senses."
          </p>
          <p className="text-white/60 text-sm">
            Our menu changes seasonally to showcase the finest ingredients at
            their peak.
            <br />
            All dishes are prepared à la minute and served with precision.
          </p>
        </div>

        {menuCategories.map((category, index) => (
          <MenuCategory key={index} category={category} index={index} />
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center border-t border-gold-400/20 pt-16"
        >
          <h2 className="font-serif text-2xl text-gold-400 mb-6">
            Tasting Experience
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            For the ultimate Elysium experience, our Chef's Grand Tasting Menu
            offers a curated journey through our finest creations, with optional
            wine pairings selected by our Master Sommelier.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="border border-gold-400/30 p-8 max-w-sm">
              <h3 className="font-serif text-xl text-gold-400 mb-2">
                Chef's Grand Tasting
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Nine exquisite courses showcasing our chef's artistry
              </p>
              <p className="text-gold-400 font-medium">€295 per person</p>
            </div>
            <div className="border border-gold-400/30 p-8 max-w-sm">
              <h3 className="font-serif text-xl text-gold-400 mb-2">
                Wine Pairing Journey
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Expertly paired wines to complement each course
              </p>
              <p className="text-gold-400 font-medium">€195 per person</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="text-white/60 text-sm">
            Please inform your server of any dietary restrictions or allergies.
            <br />A discretionary 15% service charge will be added to your bill.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
