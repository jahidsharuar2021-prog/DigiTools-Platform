import React from 'react';
import "../../App.css";
import banner from "../../assets/banner.png"
import rectangle from "../../assets/products/Rectangle 4.png"
import play from "../../assets/play.png"

const Hero = () => {
    return (
      <div className="max-w-7xl mx-auto ">
        <div className="hero-content  flex-col lg:flex-row-reverse gap-16 ">
          <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />

          <div className="max-w-[640px] max-h-[406px]">
            <button className="btn btn-outline  rounded-full">
              <img src={rectangle} alt="" /> New: AI-Powered Tools Available
            </button>
            <h1 className="text-4xl font-extrabold mt-5">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br /> Explore Products
            </p>
            <div className="flex gap-4">
              <button className=" btn text-[#FFFFFF] bg-gradient-to-r from-purple-500  to-blue-500 rounded-full">
                Explore Products
              </button>
              <button className="btn btn-outline rounded-full">
                <img src={play} alt="" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;