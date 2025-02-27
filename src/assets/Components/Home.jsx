import React from "react";

const Home = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center">
            {/* Background Image */}
            <img src="/src/img/bg.jpg" alt="bg" className="absolute w-full h-full object-cover z-0" />

            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 z-0"></div>

            {/* Text Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                <h1 className="text-6xl font-bold mb-6">Welcome to Elysium</h1>
                <p className="text-2xl mb-8 max-w-lg">
                    Experience the finest dining with exquisite dishes and a luxurious ambiance.
                </p>
            </div>
        </div>
    );
};

export default Home;
