import React from 'react';
import { IoIosContact } from 'react-icons/io';
import { IoCubeOutline } from 'react-icons/io5';
import { AiOutlineThunderbolt } from 'react-icons/ai';

const Steps = () => {
  return (
    <section className="bg-slate-50 py-24 px-6 font-sans mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Card 01 */}
          <div className="bg-white rounded-[2.5rem] p-12 border border-gray-100 shadow-sm relative flex flex-col items-center">
            <span className="absolute top-8 right-8 bg-black text-white text-[10px] font-black w-7 h-7 flex items-center justify-center rounded-full">
              01
            </span>
            <div className="w-24 h-24 text-5xl bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
              <IoIosContact />
            </div>
            <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
              Create Account
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-12 border border-gray-100 shadow-sm relative flex flex-col items-center">
            <span className="absolute top-8 right-8 bg-black text-white text-[10px] font-black w-7 h-7 flex items-center justify-center rounded-full">
              02
            </span>
            <div className="w-24 h-24 text-5xl bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
              <IoCubeOutline />
            </div>
            <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
              Choose Products
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-12 border border-gray-100 shadow-sm relative flex flex-col items-center">
            <span className="absolute top-8 right-8 bg-black text-white text-[10px] font-black w-7 h-7 flex items-center justify-center rounded-full">
              03
            </span>
            <div className="w-24 h-24 text-5xl bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
              <AiOutlineThunderbolt />
            </div>
            <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
              Start Creating
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;