import React, { use } from 'react';
import Card from './card';

const Cards = ({ fetchPromise,index }) => {
  const AppsData = use(fetchPromise);

  return (
    <>
      <Card AppsData={AppsData} key={index}  />


      
    </>
  );
};

export default Cards;