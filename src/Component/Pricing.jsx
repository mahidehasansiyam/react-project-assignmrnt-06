import React from 'react';

const Pricing = () => {
  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-16 text-lg">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* first card */}
          <div className="bg-[#F8FAFC] rounded-[2.5rem] p-10 border border-gray-100 flex flex-col text-left h-full">
            <h3 className="text-2xl font-bold text-[#1E293B] mb-2">Starter</h3>
            <p className="text-gray-500 text-sm mb-8">
              Perfect for getting started
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold text-[#1E293B]">$0</span>
              <span className="text-gray-400 text-lg">/Month</span>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center text-gray-600 text-sm">
                 Access to 10 free tools
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                 Basic templates
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                 Community support
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                 1 project per month
              </li>
            </ul>

            <button className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-2xl transition-colors">
              Get Started Free
            </button>
          </div>

           {/* pro card */}
          <div className="bg-[#7C3AED] rounded-[2.5rem] p-10 flex flex-col text-left relative  shadow-2xl shadow-purple-200">
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#92400E] px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap border border-[#FDE68A]">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <p className="text-purple-100 text-sm mb-8">
              Best for professionals
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-purple-200 text-lg">/Month</span>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center text-white text-sm">
                 Access to all premium
                tools
              </li>
              <li className="flex items-center text-white text-sm">
                 Unlimited templates
              </li>
              <li className="flex items-center text-white text-sm">
                 Priority support
              </li>
              <li className="flex items-center text-white text-sm">
                 Unlimited projects
              </li>
              <li className="flex items-center text-white text-sm">
                 Cloud sync
              </li>
              <li className="flex items-center text-white text-sm">
                 Advanced analytics
              </li>
            </ul>

            <button className="w-full py-4 bg-white text-[#7C3AED] font-bold rounded-2xl hover:bg-gray-50 transition-colors">
              Start Pro Trial
            </button>
          </div>

          {/* Third Card */}
          <div className="bg-[#F8FAFC] rounded-[2.5rem] p-10 border border-gray-100 flex flex-col text-left h-full">
            <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
              Enterprise
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              For teams and businesses
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold text-[#1E293B]">$99</span>
              <span className="text-gray-400 text-lg">/Month</span>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-center text-gray-600 text-sm">
                 Everything in Pro
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                 Team collaboration
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                 Custom
                integrations
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                 Dedicated support
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                 SLA guarantee
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                 Custom branding
              </li>
            </ul>

            <button className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-2xl transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;