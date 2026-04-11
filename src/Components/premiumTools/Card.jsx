import React from 'react';
import SingleCard from '../Ui/SingleCard';

// import SingleCard from './SingleCard';

const Card = ({ AppsData, setSingleCard, singleCard }) => {
  return (
    <div className="max-w-7xl mx-auto  mx-auto grid  justify-center gap-7  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
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