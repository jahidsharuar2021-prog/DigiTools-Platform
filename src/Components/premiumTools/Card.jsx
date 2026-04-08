import React from 'react';

const Card = ({ AppsData }) => {
    console.log(AppsData);
  return <div className='grid grid-cols-3 gap-7'>
    
    {AppsData.map(AppData=>{
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex justify-end">
              <span className="badge badge-xs badge-warning">
                {AppData.tag}
              </span>
            </div>

            <div className="text-3xl">{AppData.icon}</div>

            <h2 className="text-2xl font-bold">{AppData.name}</h2>
            <span className="">
              Generate high-quality content, blogs, and <br /> marketing copy in
              seconds with advanced AI.
            </span>

            <p className="text-[#101727] font-bold text-[20px]">
              ${AppData.price}{" "}
              <span className="text-[#627382] text-[16px]">
                /{AppData.period}
              </span>
            </p>

            

             {
             AppData.features.map(feature=>{
                return (
                  <ul className=" flex flex-col  text-xs">
                    <li>
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
                  </ul>
                );
             })
             }
                
            

           


            <div className="mt-6">
              <button className="btn liner-button btn-block">Buy Now</button>
            </div>
          </div>
        </div>


        
      </div>
    );


  })}</div>;
};

export default Card;