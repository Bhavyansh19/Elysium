import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Home";
import BookingForm from "./assets/Components/BookingForm";
import About from "./assets/Components/About.jsx";
import Testimonials from "./assets/Components/Testimonials.jsx";
import Footer from "./assets/Components/Footer.jsx";
import Admin from "./assets/Components/Admin.jsx"; // Import Admin page

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <main className="relative min-h-screen w-screen overflow-x-hidden">
                        <Home />
                        <About />
                        <BookingForm />
                        <Testimonials />
                        <Footer />
                    </main>
                } />
                <Route path="/Admin" element={<Admin />} /> {/* Admin Route */}
            </Routes>
        </Router>
    );
};

export default App;
