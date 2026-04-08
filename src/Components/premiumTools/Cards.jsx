import React, { use } from 'react';
import Card from './card';

const Cards = ({ fetchPromise }) => {
  const AppsData = use(fetchPromise);

  return (
    <>
      <Card AppsData={AppsData} />


      
    </>
  );
};

export default Cards;