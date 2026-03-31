import React, { use, useState } from 'react';
import ProductCart from './ProductCart';
import SelectedCart from './SelectedCart';

const Main = ({ dataPromise,click,setClick,cart,setCart }) => {
  const data = use(dataPromise);
  // console.log(data);
  const [selected, setSelected] = useState('Products')
  // console.log(selected);
  return (
    <div className="max-w-[1200px] mx-auto mt-20">
      <div className="text-center">
        <h2 className="font-bold text-4xl mb-4">Premium Digital Tools</h2>
        <p className="text-gray-400">
          Choose from our curated collection of premium digital products
          designedbr <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="tabs tabs-box justify-center gap-4 mt-6 mb-6 bg-white">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab ${selected === 'Products' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]' : 'bg-gray-400'}   text-white rounded-full`}
          aria-label="Products"
          onClick={() => setSelected('Products')}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab ${selected === 'Cart' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]' : 'bg-gray-400'}   text-white rounded-full`}
          aria-label={`Carts (${cart.length})`}
          onClick={() => setSelected('Cart')}
        />
      </div>

      {selected === 'Products' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <ProductCart
              key={index}
              item={item}
              click={click}
              setClick={setClick}
              cart={cart}
              setCart={setCart}
            ></ProductCart>
          ))}
        </div>
      )}
      {selected === 'Cart' && <SelectedCart cart={cart} setCart={setCart}></SelectedCart>}
    </div>
  );
};

export default Main;