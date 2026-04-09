import React, { useState } from 'react';

const SingleCard = ({ AppData }) => {

const [isSelected, setSelected] = useState(false);



  const evenHandler = () => {
    setSelected(true);
    alert(`${AppData.name} card is selected`);
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-end">
            <span className="badge badge-xs badge-warning">{AppData.tag}</span>
          </div>

          <div className="text-3xl">{AppData.icon}</div>

          <h2 className="text-2xl font-bold">{AppData.name}</h2>
          <span>
            Generate high-quality content, blogs, and <br /> marketing copy in
            seconds with advanced AI.
          </span>

          <p className="text-[#101727] font-bold text-[20px]">
            ${AppData.price}{" "}
            <span className="text-[#627382] text-[16px]">
              /{AppData.period}
            </span>
          </p>

          {/* Features list */}
          <ul className="mt-4 flex flex-col gap-2 text-xs">
            {AppData.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button
              onClick={evenHandler}
              className="btn liner-button btn-block text-white"
            >
              {isSelected ? "Purchases" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;