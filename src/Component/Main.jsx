import React, { use } from 'react';
import ProductCart from './ProductCart';

const Main = ({ dataPromise }) => {
  const data = use(dataPromise);
  console.log(data);
  return (
    <div className="max-w-[1200px] mx-auto mt-20">
      <div className="text-center">
        <h2 className="font-bold text-4xl mb-4">Premium Digital Tools</h2>
        <p className="text-gray-400">
          Choose from our curated collection of premium digital products
          designedbr <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="tabs tabs-box justify-center mt-6 mb-6 bg-white">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white rounded-full"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab "
          aria-label="Cart (2)"
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {data.map((item, index) => (
          <ProductCart key={index} item={item}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default Main;