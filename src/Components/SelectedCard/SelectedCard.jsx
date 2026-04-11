import React from 'react';

const SelectedCard = ({ singleCard, setSingleCard }) => {


  const handlwCardDelete=(card)=>{
     const filterCard = singleCard.filter(unikcard=>unikcard.name!==card.name);
    setSingleCard(filterCard);
  }

   const handleChecker=()=>{
    setSingleCard([]);
   }

  const totalPrice=singleCard.reduce((sum,item)=>sum+item.price,0)
  const formatPrice = totalPrice.toFixed(2);


  return (
    <div className=" max-w-7xl mx-auto p-10 min-h-[250px]">
      {singleCard.length === 0 ? (
        <div className="mt-10">
          <div className=" flex flex-col text-center space-y-2">
            <p className="text-2xl font-bold">No cards selected yet</p>
            <p className="font-semibold text-[#627382]">
              Go to Products tab to select cards
            </p>
          </div>
        </div>
      ) :
      
      
      
      (
        singleCard.map((card) => {
          return (
            <div
              key={card.id}
              className="maindiv flex justify-between mb-6 p-5 bg-[#F9FAFC] items-center "
            >
              <div className="flex gap-3">
                <p className="text-3xl">{card.icon}</p>
                <div>
                  <p className="text-[20px] font-semibold">{card.name}</p>
                  <p className="font-medium text-[#627382] ">${card.price}</p>
                </div>
              </div>
              <button
                className="btn text-[#FF3980] font-bold cursor-pointer"
                onClick={() => handlwCardDelete(card)}
              >
                remove
              </button>
            </div>
          );
        })
      )}





      <div className="p-10">
        <div className="flex justify-between mb-7">
          <p className="font-bold text-[#627382] text-[20px]">Total</p>
          <p className="font-bold ">${formatPrice}</p>
        </div>
        <button className="btn rounded-full text-white bg-[#8020f9] w-full"
        onClick={()=>handleChecker()}
        
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;