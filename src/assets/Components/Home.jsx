"use client";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [error, setError] = useState("");

  const handleAdminLogin = () => {
    if (adminPass === import.meta.env.VITE_ADMIN_PASS) {
      sessionStorage.setItem("admin_auth", "true");
      setAdminPass("");
      setError("");
      setShowAdmin(false);
      navigate("/admin");
    } else {
      setError("Wrong password");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black" id="Home">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/img/bg.jpg"
          alt="Elysium Restaurant"
          className="absolute w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1
            onDoubleClick={() => setShowAdmin(true)}
            className="font-serif text-7xl font-bold text-white cursor-default"
          >
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
          <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex space-x-6"
            >
              <div className="text-center">
                <p className="text-gold-400 font-serif text-sm mb-1">
                  MICHELIN
                </p>
                <p className="text-white text-xs">★★★</p>
              </div>
              <div className="text-center">
                <p className="text-gold-400 font-serif text-sm mb-1">
                  ESTABLISHED
                </p>
                <p className="text-white text-xs">2010</p>
              </div>
              <div className="text-center">
                <p className="text-gold-400 font-serif text-sm mb-1">CUISINE</p>
                <p className="text-white text-xs">HAUTE FRENCH</p>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-gold-400 text-black"
              onClick={() =>
                document.getElementById("Reservation")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Reserve a Table
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-gold-400 text-gold-400"
              onClick={() =>
                document.getElementById("Menu")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Explore Menu
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ✅ Admin Modal */}
      {showAdmin && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative bg-gray-900 border border-gold-400 p-6 w-80">
            <button
              onClick={() => setShowAdmin(false)}
              className="absolute top-2 right-2 text-gray-400"
            >
              ✕
            </button>

            <h2 className="text-gold-400 mb-4">Admin Access</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAdminLogin();
              }}
            >
              <input
                type="password"
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
                className="w-full px-3 py-2 bg-black border border-gray-600 text-white mb-2"
              />

              {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

              <button
                type="submit"
                className="w-full bg-gold-400 text-black py-2 mt-3"
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
