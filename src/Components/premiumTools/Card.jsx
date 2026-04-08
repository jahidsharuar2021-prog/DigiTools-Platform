import React from 'react';
import SingleCard from './SingleCard';

const Card = ({ AppsData }) => {
  
    
  return <div className='grid grid-cols-3 gap-7'>
    
    {AppsData.map(AppData=>{
 

    return <SingleCard AppData={AppData} key={AppData.id} />;


  })}</div>;
};

export default Card;