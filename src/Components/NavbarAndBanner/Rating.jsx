import React from 'react';

const Rating = () => {
    return (
      <div
        className="mt-20 h-[250px] md:p-21

       bg-gradient-to-r from-blue-500  to-purple-500"
       
      >
        <div className="max-w-7xl mx-auto  ">
          <div
            className="w-full mx-auto place-items-center  grid sm:grid-cols-1 gap-2 md:grid-cols-3   
          text-[#FFFFFF] "
          >
            <div>
              <h1 className="font-extrabold text-4xl">50K+</h1>
              <p className="font-medium text-2xl">Active Users</p>
            </div>
            <div>
              <h1 className="font-extrabold text-4xl">200+</h1>
              <p className="font-medium text-2xl">Premium Tools</p>
            </div>
            <div>
              <h1 className="font-extrabold text-4xl">4.9+</h1>
              <p className="font-medium text-2xl">Rating</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Rating;