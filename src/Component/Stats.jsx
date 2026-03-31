import React from 'react';

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-10">
      <div className="max-w-5xl mx-auto flex justify-between text-center  text-white">
        {/* Item 1 */}
        <div className="py-4">
          <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
          <p className="mt-2 text-sm opacity-80">Active Users</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-white/30"></div>

        {/* Item 2 */}
        <div className="py-4">
          <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
          <p className="mt-2 text-sm opacity-80">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-white/30"></div>

        {/* Item 3 */}
        <div className="py-4">
          <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
          <p className="mt-2 text-sm opacity-80">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;