import React from 'react';
import banner from '../assets/products/banner.png';
import { VscTriangleRight } from 'react-icons/vsc';

const Banner = () => {
  return (
    <div className=" py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <p className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-4">
            🔵 New: AI-Powered Tools Available
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-medium">
              Explore Products
            </button>

            <button className="flex items-center gap-2 border border-purple-400 text-purple-600 px-6 py-3 rounded-full">
              <VscTriangleRight /> Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={banner}
            alt="banner"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;