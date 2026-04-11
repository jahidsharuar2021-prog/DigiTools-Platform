import React from 'react';
import user from "../../assets/user.png";
import pakage from "../../assets/package.png";
import rocket from "../../assets/rocket.png";






const ThreeStep = () => {
    return (
      <div className="max-w-7xl mx-auto  mt-30 ">
        <div className="flex flex-col text-center space-y-4 mb-10 mt-30">
          <h1 className="font-extrabold text-4xl">Get Started in 3 Steps</h1>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

          <div className="card bg-base-100 w-96 shadow-sm ">
            <div className="flex flex-row justify-end  ">
              <div className=" flex flex-row justify-center items-center rounded-full bg-[#861bf9] h-10 w-10 text-white">
                01
              </div>
            </div>

            <figure>
              <img src={user} alt="Shoes" className='cursor-pointer' />
            </figure>
            <div className="card-body  text-center">
              <h2 className="text-2xl font-bold cursor-pointer">Create Account</h2>
              <p className="text-[#627382]">
                Sign up for free in seconds. No credit card <br /> required to
                get started.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm ">
            <div className="flex flex-row justify-end  ">
              <div className=" flex flex-row justify-center items-center rounded-full bg-[#861bf9] h-10 w-10 text-white">
                02
              </div>
            </div>

            <figure>
              <img src={pakage} alt="Shoes" className='cursor-pointer' />
            </figure>
            <div className="card-body  text-center">
              <h2 className="text-2xl font-bold cursor-pointer">Choose Products</h2>
              <p className="text-[#627382]">
                Browse our catalog and select the tools <br /> that fit your
                needs.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm ">
            <div className="flex flex-row justify-end  ">
              <div className=" flex flex-row justify-center items-center rounded-full bg-[#861bf9] h-10 w-10 text-white">
                03
              </div>
            </div>

            <figure>
              <img src={rocket} alt="Shoes" className='cursor-pointer' />
            </figure>
            <div className="card-body  text-center">
              <h2 className="text-2xl font-bold cursor-pointer">Start Creating</h2>
              <p className="text-[#627382]">
                Download and start using your premium <br /> tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ThreeStep;