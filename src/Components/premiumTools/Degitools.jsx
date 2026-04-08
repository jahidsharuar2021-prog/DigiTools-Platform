import React, { useState } from 'react';

const Degitools = () => {

const [selectedType, isSelectedType] = useState("Products");

    return (
      <div>
        <div className="hero bg-base-200 min-h-49 md:pt-[100px]">
          <div className="hero-content text-center">
            <div className="">
              <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
              <p className="py-6 text-[#627382]">
                Choose from our curated collection of premium digital products
                designed <br /> to boost your productivity and creativity.
              </p>

              {/* Button div */}
              <div className="flex gap-4 justify-center ">
                <button
                  onClick={() => isSelectedType("Products")}
                  className={` btn ${selectedType === "Products" ? "liner-button text-white" : "btn-ghost"}   rounded-full`}
                >
                  Products
                </button>
                <button
                  onClick={() => isSelectedType("Cart")}
                  className={`btn ${selectedType === "Cart" ? "liner-button text-white" : "btn-ghost"} rounded-full`}
                >
                  Cart (2)
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='m-6 text-2xl font-bold'>{selectedType === "Cart" ? <p>Your Cart</p> : ""}</div>
      </div>
    );
};

export default Degitools;