import React from 'react';
import SingleCard from '../Ui/SingleCard';

// import SingleCard from './SingleCard';

const Card = ({ AppsData }) => {
 
  
    
  return (
    <div className="grid sm:grid-cols-1 justify-center  md:grid-cols-3 gap-7">
      {AppsData?.map((AppData) => {
       console.log(AppData);
        return <SingleCard AppData={AppData} key={AppData.id} />;
      })}
    </div>
  );
};

export default Card;