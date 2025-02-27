import { useState } from "react";

const BookingForm = () => {
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
        e.preventDefault(); // Prevents default form behavior

        try {
            const response = await fetch("http://localhost:4000/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // Convert data to JSON
            });

            if (!response.ok) {
                throw new Error("Failed to submit booking");
            }

            const result = await response.json();
            console.log("Booking Successful:", result);

            // Show success modal
            setShowModal(true);

            // Reset form
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

    return (
        <section className="relative w-full min-h-screen bg-blue-50 flex flex-col justify-center items-center py-10">
            <h1 className="text-4xl text-violet-500 font-semibold mb-12 tracking-wider">Booking Form</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-blue-50 p-8 border-4 border-violet-500 rounded-lg shadow-lg max-w-2xl w-full"
            >
                {showModal && (
                    <div className="fixed inset-0 bg-blue-50 bg-opacity-75 flex items-center justify-center z-10">
                        <div className="bg-violet-500 text-blue-50 p-6 rounded-lg">
                            <p className="text-xl font-semibold mb-4">Your booking has been successfully made!</p>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    window.location.reload();
                                }}
                                className="px-4 py-2 bg-blue-50 text-violet-500 font-medium rounded-lg hover:bg-[#cbb144]"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}

                {/* Name */}
                <div className="w-full mb-6">
                    <label className="text-violet-500 text-lg font-medium mb-2 block">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Enter your name"
                        className="w-full p-3 bg-blue-50 text-violet-500 border-2 border-violet-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cbb144]"
                        onChange={handleChange}
                    />
                </div>

                {/* Email */}
                <div className="w-full mb-6">
                    <label className="text-violet-500 text-lg font-medium mb-2 block">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        className="w-full p-3 bg-blue-50 text-violet-500 border-2 border-violet-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cbb144]"
                        onChange={handleChange}
                    />
                </div>

                {/* Phone */}
                <div className="w-full mb-6">
                    <label className="text-violet-500 text-lg font-medium mb-2 block">Phone</label>
                    <input
                        type="tel"
                        name="phoneNo"
                        value={formData.phoneNo}
                        placeholder="Enter your contact number"
                        className="w-full p-3 bg-blue-50 text-violet-500 border-2 border-violet-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cbb144]"
                        onChange={handleChange}
                    />
                </div>

                {/* Reservation Date */}
                <div className="w-full mb-6">
                    <label className="text-violet-500 text-lg font-medium mb-2 block">Reservation Date</label>
                    <input
                        type="date"
                        name="resDate"
                        value={formData.resDate}
                        className="w-full p-3 bg-blue-50 text-violet-500 border-2 border-violet-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cbb144]"
                        onChange={handleChange}
                    />
                </div>

                {/* Reservation Time */}
                <div className="w-full mb-6">
                    <label className="text-violet-500 text-lg font-medium mb-2 block">Reservation Time</label>
                    <input
                        type="time"
                        name="resTime"
                        value={formData.resTime}
                        className="w-full p-3 bg-blue-50 text-violet-500 border-2 border-violet-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cbb144]"
                        onChange={handleChange}
                    />
                </div>

                {/* Number of People */}
                <div className="w-full mb-6">
                    <label className="text-violet-500 text-lg font-medium mb-2 block">How many people will you be with?</label>
                    <div className="flex gap-4">
                        {seats.map((seat, id) => (
                            <label key={id} className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="noOfPeople"
                                    value={seat}
                                    checked={formData.noOfPeople == seat}
                                    onChange={handleChange}
                                    className="hidden peer"
                                />
                                <div className="w-12 h-12 flex items-center justify-center border-2 border-violet-500 text-violet-500 rounded-full peer-checked:bg-violet-500 peer-checked:text-blue-50 peer-checked:border-[#cbb144]">
                                    {seat}
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Special Notes */}
                <div className="w-full mb-6">
                    <label className="text-violet-500 text-lg font-medium mb-2 block">Notes</label>
                    <textarea
                        name="specialNotes"
                        rows={4}
                        value={formData.specialNotes}
                        placeholder="Any special requests?"
                        className="w-full p-3 bg-blue-50 text-violet-500 border-2 border-violet-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cbb144] resize-none"
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="w-full">
                    <button
                        type="submit"
                        className="w-full py-3 bg-violet-500 text-blue-50 font-medium rounded-lg hover:bg-[#cbb144] focus:outline-none focus:ring-2 focus:ring-[#cbb144]"
                    >
                        Book Your Seat!
                    </button>
                </div>
            </form>
        </section>
    );
};

export default BookingForm;
