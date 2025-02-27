"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const form = useRef();
  const seats = [2, 3, 4, 5, 6, 7, 8];
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    resDate: "",
    resTime: "",
    noOfPeople: "",
    specialNotes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }

      const result = await response.json();
      console.log("Booking Successful:", result);

      setShowModal(true);

      await sendEmail(e);

      setFormData({
        name: "",
        email: "",
        phoneNo: "",
        resDate: "",
        resTime: "",
        noOfPeople: "",
        specialNotes: "",
      });
    } catch (error) {
      console.error("Error submitting booking:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qdy460l", "template_p7rww1p", form.current, {
        publicKey: "l__dTFymSZarspOkd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="relative w-full min-h-screen bg-black text-white py-16"
      id="Reservation"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="/src/img/pattern.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-gold-400 font-bold mb-4">
            Reserve Your Experience
          </h1>
          <div className="w-24 h-0.5 bg-gold-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            Secure your place at Elysium for an unforgettable culinary journey.
            For parties larger than 8, please contact us directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src="/src/img/table-setting.jpg"
              alt="Elegant table setting"
              className="w-full h-auto rounded-none"
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-black/80 border border-gold-400/30 p-6">
                <h3 className="font-serif text-gold-400 text-lg mb-2">
                  Opening Hours
                </h3>
                <p className="text-white/80 text-sm">Tuesday - Sunday</p>
                <p className="text-white/80 text-sm">6:00 PM - 11:00 PM</p>
              </div>
              <div className="bg-black/80 border border-gold-400/30 p-6">
                <h3 className="font-serif text-gold-400 text-lg mb-2">
                  Contact
                </h3>
                <p className="text-white/80 text-sm">+91 123 456 7890</p>
                <p className="text-white/80 text-sm">bookatelysium@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="bg-black/80 border border-gold-400/30 p-8 lg:p-10"
            >
              {showModal && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-black border border-gold-400 p-8 max-w-md w-full mx-4"
                  >
                    <h2 className="font-serif text-2xl text-gold-400 mb-4">
                      Reservation Confirmed
                    </h2>
                    <p className="text-white/90 mb-6">
                      Thank you for choosing Elysium. Your reservation has been
                      successfully confirmed. We look forward to providing you
                      with an exceptional dining experience.
                    </p>
                    <div className="w-full h-px bg-gold-400/30 mb-6"></div>
                    <button
                      onClick={() => {
                        setShowModal(false);
                      }}
                      className="w-full py-3 bg-gold-400 text-black font-medium hover:bg-gold-500 transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                </div>
              )}

              {/* Name */}
              <div className="mb-6">
                <label className="font-serif text-gold-400 text-sm mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  className="w-full p-3 bg-transparent text-white border border-gold-400/50 focus:border-gold-400 outline-none transition-colors"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="font-serif text-gold-400 text-sm mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  className="w-full p-3 bg-transparent text-white border border-gold-400/50 focus:border-gold-400 outline-none transition-colors"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="font-serif text-gold-400 text-sm mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  placeholder="Enter your contact number"
                  className="w-full p-3 bg-transparent text-white border border-gold-400/50 focus:border-gold-400 outline-none transition-colors"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Date and Time in one row */}
              <div className="grid grid-cols-1 md-grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="font-serif text-gold-400 text-sm mb-2 block">
                    Date
                  </label>
                  <select
                    name="resDate"
                    value={formData.resDate}
                    className="w-full p-3 bg-transparent text-white border border-gold-400/50 focus:border-gold-400 outline-none transition-colors"
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select Date
                    </option>
                    {Array.from({ length: 14 }).map((_, i) => {
                      const date = new Date();
                      date.setDate(date.getDate() + i);
                      const formattedDate = date.toISOString().split("T")[0];
                      return (
                        <option key={formattedDate} value={formattedDate}>
                          {formattedDate}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label className="font-serif text-gold-400 text-sm mb-2 block">
                    Time
                  </label>
                  <select
                    name="resTime"
                    value={formData.resTime}
                    className="w-full p-3 bg-transparent text-white border border-gold-400/50 focus:border-gold-400 outline-none transition-colors"
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select Time
                    </option>
                    {[
                      "11:00 AM",
                      "11:30 AM",
                      "12:00 PM",
                      "12:30 PM",
                      "1:00 PM",
                      "1:30 PM",
                      "2:00 PM",
                      "2:30 PM",
                      "3:00 PM",
                      "3:30 PM",
                      "4:00 PM",
                      "4:30 PM",
                      "5:00 PM",
                      "5:30 PM",
                      "6:00 PM",
                      "6:30 PM",
                      "7:00 PM",
                      "7:30 PM",
                      "8:00 PM",
                      "8:30 PM",
                      "9:00 PM",
                      "9:30 PM",
                      "10:00 PM",
                      "10:30 PM",
                      "11:00 PM",
                      "11:30 PM",
                      "12:00 PM",
                    ].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Number of People */}
              <div className="mb-6">
                <label className="font-serif text-gold-400 text-sm mb-2 block">
                  Number of Guests
                </label>
                <div className="flex flex-wrap gap-3">
                  {seats.map((seat) => (
                    <label key={seat} className="cursor-pointer">
                      <input
                        type="radio"
                        name="noOfPeople"
                        value={seat}
                        checked={formData.noOfPeople == seat}
                        onChange={handleChange}
                        className="hidden peer"
                        required
                      />
                      <div className="w-10 h-10 flex items-center justify-center border border-gold-400/50 text-white peer-checked:bg-gold-400 peer-checked:text-black peer-checked:border-gold-400 transition-colors">
                        {seat}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              <div className="mb-8">
                <label className="font-serif text-gold-400 text-sm mb-2 block">
                  Special Requests
                </label>
                <textarea
                  name="specialNotes"
                  rows={4}
                  value={formData.specialNotes}
                  placeholder="Please share any dietary restrictions, allergies, or special occasions"
                  className="w-full p-3 bg-transparent text-white border border-gold-400/50 focus:border-gold-400 outline-none transition-colors resize-none"
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gold-400 text-black font-medium hover:bg-gold-500 transition-colors"
              >
                Confirm Reservation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
