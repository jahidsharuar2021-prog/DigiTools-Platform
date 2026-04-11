import React from 'react';
import SingleCard from '../Ui/SingleCard';

// import SingleCard from './SingleCard';

const Card = ({ AppsData, setSingleCard, singleCard }) => {
  return (
    <div className="grid sm:grid-cols-1 justify-center  md:grid-cols-3 gap-7">
      {AppsData?.map((AppData) => {
      
        return (
          <SingleCard
            singleCard={singleCard}
            setSingleCard={setSingleCard}
            AppData={AppData}
            key={AppData.id}
          />
        );
      })}
    </div>
  );
};

export default Card;