import { useEffect, useState } from "react";

const AdminPanel = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/getbookings")
            .then((response) => response.json())
            .then((data) => setReservations(data))
            .catch((error) => console.error("Error fetching reservations:", error));
    }, []);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit", month: "short", year: "numeric"
        }); // Example: 26 Feb 2025
    };

    const formatTime = (timeString) => {
        const [hours, minutes] = timeString.split(":");
        const hour = parseInt(hours, 10);
        const ampm = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12; // Convert 0 to 12
        return `${formattedHour}:${minutes} ${ampm}`;
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-semibold text-center text-violet-500 mb-6">
                Restaurant Reservations
            </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr className="bg-violet-500 text-black">
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Email</th>
                        <th className="py-2 px-4 border">Phone</th>
                        <th className="py-2 px-4 border">Date</th>
                        <th className="py-2 px-4 border">Time</th>
                        <th className="py-2 px-4 border">People</th>
                        <th className="py-2 px-4 border">Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reservations.map((res, index) => (
                        <tr key={index} className="border">
                            <td className="py-2 px-4 border">{res.name}</td>
                            <td className="py-2 px-4 border">{res.email}</td>
                            <td className="py-2 px-4 border">{res.phoneno}</td>
                            <td className="py-2 px-4 border">{formatDate(res.resdate)}</td>
                            <td className="py-2 px-4 border">{formatTime(res.restime)}</td>
                            <td className="py-2 px-4 border">{res.noofpeople}</td>
                            <td className="py-2 px-4 border">{res.specialnotes}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;