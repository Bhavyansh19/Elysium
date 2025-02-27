"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black text-white" id="About">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="/src/img/restaurant-interior.jpg"
          alt="Elysium Interior"
          className="absolute w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.7)" }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold tracking-tight">
            Our <span className="text-gold-400">Story</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl text-gold-400 mb-6">
              A Legacy of Excellence
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Founded in 2010 by world-renowned chef Jean-Pierre Dubois, Elysium
              was born from a vision to create a dining experience that
              transcends the ordinary and elevates gastronomy to an art form.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              Our restaurant takes its name from the paradise of Greek
              mythology—a place of perfect happiness and bliss. This is the
              feeling we strive to create for every guest who walks through our
              doors.
            </p>
            <p className="text-white/80 leading-relaxed">
              With three Michelin stars and numerous international accolades,
              Elysium has established itself as a destination for those seeking
              the pinnacle of culinary excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src="/src/img/chef.jpg"
                alt="Chef Jean-Pierre Dubois"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold-400 p-4 text-black">
              <p className="font-serif text-lg">Jean-Pierre Dubois</p>
              <p className="text-sm">Executive Chef & Founder</p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl text-gold-400 mb-6">
              Our Philosophy
            </h2>
            <p className="text-white/80 mb-10 leading-relaxed">
              At Elysium, we believe that dining is not merely about
              sustenance—it is an experience that engages all the senses. Every
              dish is a carefully composed symphony of flavors, textures, and
              visual elements, designed to create moments of pure gastronomic
              pleasure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 border border-gold-400/30"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10 text-gold-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gold-400 mb-3">
                Exceptional Ingredients
              </h3>
              <p className="text-white/70">
                We source only the finest ingredients from trusted producers who
                share our commitment to quality and sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 border border-gold-400/30"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10 text-gold-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gold-400 mb-3">
                Culinary Innovation
              </h3>
              <p className="text-white/70">
                Our team of chefs constantly pushes boundaries, blending
                traditional techniques with modern creativity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 border border-gold-400/30"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10 text-gold-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gold-400 mb-3">
                Impeccable Service
              </h3>
              <p className="text-white/70">
                Our staff is trained to provide attentive, personalized service
                that anticipates your every need without intrusion.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
