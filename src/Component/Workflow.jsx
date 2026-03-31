import React from 'react';

const Workflow = () => {
  return (
    <section className="bg-[#7C3AED] py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
          Ready To Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="text-purple-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {/* Primary Button (White) */}
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#7C3AED] font-bold rounded-full hover:bg-gray-50 transition-colors active:scale-[0.98]">
            Explore Products
          </button>

          {/* Secondary Button (Outlined) */}
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent text-white font-bold rounded-full border border-white/60 hover:border-white transition-all active:scale-[0.98]">
            View Pricing
          </button>
        </div>

        {/* Footer Subtext */}
        <p className="text-purple-200 text-sm opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Workflow;