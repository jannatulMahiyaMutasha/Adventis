import React from "react";

const Follow = () => {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://tennis-sportclub.axiomthemes.com/wp-content/uploads/2023/03/image-26-copyright.jpg')",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative max-w-xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Sports Club
        </h1>
        <p className="mb-6 text-lg md:text-xl">
          Join exciting sports events, meet new friends, and elevate your game.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md text-white font-semibold"
          onClick={() => alert("Get Started clicked!")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Follow;
