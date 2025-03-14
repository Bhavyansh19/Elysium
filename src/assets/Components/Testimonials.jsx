"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "James Harrington",
    role: "Food Critic, The Epicurean",
    text: "Elysium transcends mere dining to create an experience that lingers in memory long after the last bite. Chef Dubois's artistry is unparalleled.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    size: "col-span-2 row-span-1",
  },
  {
    name: "Sophia Chen",
    role: "CEO, Luminary Ventures",
    text: "The attention to detail at Elysium is extraordinary. From the moment you enter to the final farewell, every element is perfection.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    size: "row-span-2",
  },
  {
    name: "Elizabeth Montgomery",
    role: "Michelin Guide Inspector",
    text: "In a world of culinary pretenders, Elysium stands as the genuine article. The tasting menu is a journey through flavor that must be experienced to be believed. The service staff anticipates your needs with an almost supernatural precision.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    size: "col-span-2 row-span-2",
  },
  {
    name: "Richard Blackwood",
    role: "Master Sommelier",
    text: "The wine pairing program at Elysium is nothing short of revolutionary.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
    size: "row-span-1",
  },
  {
    name: "Olivia Winters",
    role: "Luxury Travel Blogger",
    text: "After dining at Elysium, all other restaurants seem to fade into mediocrity. An unforgettable experience.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5,
    size: "col-span-2 row-span-1",
  },
  {
    name: "Jonathan Pierce",
    role: "Culinary Arts Director",
    text: "Chef Dubois has created more than a restaurant; he has created a temple to gastronomy that honors tradition while boldly innovating.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    rating: 5,
    size: "row-span-2",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-gray-900 p-6 border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between ${testimonial.size}`}
    >
      <div>
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border border-gold-400/30"
          />
          <div>
            <h3 className="text-lg font-serif text-gold-400">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
        <p className="text-white/80 italic mb-4 leading-relaxed">
          "{testimonial.text}"
        </p>
      </div>
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < testimonial.rating ? "text-gold-400" : "text-gray-700"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[url('/img/pattern-dark.jpg')] opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-gold-400 font-serif text-sm uppercase tracking-widest mb-3">
            Guest Experiences
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Voices of <span className="text-gold-400">Distinction</span>
          </h2>
          <div className="w-24 h-0.5 bg-gold-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-block border border-gold-400 text-gold-400 px-8 py-3 hover:bg-gold-400 hover:text-black transition-colors duration-300"
          >
            Read More Reviews
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
