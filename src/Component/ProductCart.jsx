import React from 'react';
import { LiaArrowRightSolid } from 'react-icons/lia';

const ProductCart = ({item}) => {
  return (
    <div>
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col relative hover:shadow-md transition-shadow">
        {item.tag ? (
          <span
            className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold ${
              item.tagType === 'best-seller'
                ? 'bg-orange-100 text-orange-600'
                : item.tagType === 'popular'
                  ? 'bg-purple-100 text-purple-600'
                  : 'bg-green-100 text-green-600'
            }`}
          >
            {item.tag}
          </span>
        ) : null}

        <div className="mb-6 h-12 w-12 flex items-center justify-center rounded-2xl bg-gray-50">
          <img src={item.icon} alt={item.name} className="w-6 h-6 opacity-70" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {item.description}
        </p>

        <div className="mb-6">
          <span className="text-3xl font-bold text-gray-900">
            ${item.price}
          </span>
          <span className="text-gray-400 text-sm ml-1">
            {item.period === 'one-time' ? '/One-Time' : '/Mo'}
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8 flex-grow">
          {item.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              
              <LiaArrowRightSolid />
              {feature}
            </li>
          ))}
        </ul>

        <button className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-2xl transition-all active:scale-[0.98]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCart;