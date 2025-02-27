"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AdminPanel = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:4000/getbookings")
      .then((response) => response.json())
      .then((data) => {
        setReservations(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reservations:", error);
        setIsLoading(false);
      });
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = Number.parseInt(hours, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  // Filter reservations by date
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const filteredReservations = reservations
    .filter((res) => {
      const resDate = new Date(res.resdate);
      resDate.setHours(0, 0, 0, 0);

      if (filter === "today") {
        return resDate.getTime() === today.getTime();
      } else if (filter === "upcoming") {
        return resDate.getTime() > today.getTime();
      } else if (filter === "past") {
        return resDate.getTime() < today.getTime();
      }
      return true;
    })
    .filter((res) => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        res.name.toLowerCase().includes(searchLower) ||
        res.email.toLowerCase().includes(searchLower) ||
        res.phoneno.includes(searchTerm)
      );
    });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-serif text-gold-400 mb-2">
              Elysium Reservations
            </h1>
            <p className="text-gray-400">
              Manage and monitor all restaurant bookings
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search by name, email or phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 text-white w-full sm:w-64"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 text-white"
            >
              <option value="all">All Reservations</option>
              <option value="today">Today</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-gold-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="bg-gray-800 border border-gray-700 rounded-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 bg-gray-900 text-left text-xs font-medium text-gold-400 uppercase tracking-wider">
                        Guest
                      </th>
                      <th className="px-6 py-4 bg-gray-900 text-left text-xs font-medium text-gold-400 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-4 bg-gray-900 text-left text-xs font-medium text-gold-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 bg-gray-900 text-left text-xs font-medium text-gold-400 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-4 bg-gray-900 text-left text-xs font-medium text-gold-400 uppercase tracking-wider">
                        Party Size
                      </th>
                      <th className="px-6 py-4 bg-gray-900 text-left text-xs font-medium text-gold-400 uppercase tracking-wider">
                        Special Requests
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {filteredReservations.length > 0 ? (
                      filteredReservations.map((res, index) => (
                        <tr key={index} className="hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">{res.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">{res.email}</div>
                            <div className="text-sm text-gray-400">
                              {res.phoneno}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {formatDate(res.resdate)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {formatTime(res.restime)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            {res.noofpeople}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm max-w-xs truncate">
                              {res.specialnotes || "—"}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-6 py-12 text-center text-gray-400"
                        >
                          No reservations found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              Showing {filteredReservations.length} of {reservations.length}{" "}
              total reservations
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AdminPanel;
