import React from 'react';
import { toast } from 'react-toastify';
import { RiShoppingCart2Line } from 'react-icons/ri';

const SelectedCart = ({ cart, setCart }) => {
  // console.log(cart);
  const delet = (item) => {
    let newarray = cart.filter((i) => i.id !== item.id)
    setCart(newarray)
    toast.success("Item removed from cart")
  }
  
  return (
    <>
      {cart.length === 0 ? (
        <div className="bg-green-100 rounded-4xl p-10 mb-4 flex flex-col items-center gap-4 mt-10">
          <h2 className="text-2xl font-bold text-gray-700">
            Your Cart is Empty
          </h2>
          <span className='text-8xl'>
            <RiShoppingCart2Line />
          </span>
          <p className="text-gray-800">
            Looks like you haven't added any products to your cart yet.
          </p>{' '}
        </div>
      ) : (
        <div className=" p-6 bg-slate-50 mb-10">
          <div className="grid grid-cols-1  gap-8 p-6 bg-slate-50 mb-10">
            {cart.map(item => (
              <div className="flex justify-between items-center bg-white rounded-[2.5rem] py-2 px-8 border border-gray-100 shadow-sm">
                <div
                  key={item.id}
                  className=" relative flex hover:shadow-md transition-all justify-start gap-8 items-center"
                >
                  {/* Icon */}
                  <div className="  ">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-6 h-6 opacity-70"
                    />
                  </div>

                  <div className="flex-grow">
                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">
                      {item.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-[#1E293B]">
                        ${item.price}
                      </span>
                      <span className="text-gray-400 text-sm ml-1"></span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      delet(item);
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center font-bold text-2xl bg-green-100 rounded-[2.5rem] py-4 px-8 border border-gray-100 shadow-sm">
            <h2>Total</h2>
            <h2>${cart.reduce((total, item) => total + item.price, 0)}</h2>
          </div>
          <div>
            <button
              onClick={() => {
                setCart([]);
              }}
              className="btn text-xl text-white w-full mt-10 p-6 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedCart;