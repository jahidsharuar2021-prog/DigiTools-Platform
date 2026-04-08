import React from 'react';

const WorkSection = () => {
    return (
      <div
        className="hero
      mt-16
       bg-gradient-to-r from-blue-500  to-purple-500
        md: min-h-[487px]"
      >
        <div className="hero-content text-center">
          <div className="text-[#FFFFFF]">
            <h1 className="text-5xl font-bold">
              Ready to Transform Your Workflow?
            </h1>
            <p className="py-6">
              Join thousands of professionals who are already using Digitools to
              work smarter. <br /> Start your free trial today.
            </p>
            <div className="flex gap-4 justify-center mb-3">
              <button className="btn bg rounded-full  hover:bg-gray-200">
                <span
                  className="bg-gradient-to-r  from-purple-500  to-blue-500 bg-clip-text text-transparent
                "
                >
                  Explore Products
                </span>
              </button>
              <button
                className="btn 
            cursor-pointer
            bg-[#8020f9]
            shadow-none
             hover:bg-blue-400
              rounded-full
               text-white
              "
              >
                View Pricing
              </button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    );
};

export default WorkSection;