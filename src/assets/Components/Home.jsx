"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-black" id="Home">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/src/img/bg.jpg"
          alt="Elysium Restaurant"
          className="absolute w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="text-gold-400">ELYSIUM</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto italic">
            Where culinary artistry meets divine ambiance
          </p>

          <div className="w-24 h-0.5 bg-gold-400 mx-auto mb-8"></div>

          <p className="text-white/80 mb-12 max-w-xl mx-auto">
            Experience the epitome of gastronomic excellence in an atmosphere of
            unparalleled luxury. Each dish tells a story of passion, precision,
            and the finest ingredients from around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link>
              <motion.button
                onClick={() => {
                  const section = document.getElementById("Reservation");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gold-400 text-black font-medium rounded-none hover:bg-gold-500 transition-all duration-300"
              >
                Reserve a Table
              </motion.button>
            </Link>
            <Link>
              <motion.button
                onClick={() => {
                  const section = document.getElementById("Menu");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-transparent border border-gold-400 text-gold-400 font-medium rounded-none hover:bg-gold-400/10 transition-all duration-300"
              >
                Explore Menu
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex space-x-6"
        >
          <div className="text-center">
            <p className="text-gold-400 font-serif text-sm mb-1">MICHELIN</p>
            <p className="text-white text-xs">★★★</p>
          </div>
          <div className="text-center">
            <p className="text-gold-400 font-serif text-sm mb-1">ESTABLISHED</p>
            <p className="text-white text-xs">2010</p>
          </div>
          <div className="text-center">
            <p className="text-gold-400 font-serif text-sm mb-1">CUISINE</p>
            <p className="text-white text-xs">HAUTE FRENCH</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
