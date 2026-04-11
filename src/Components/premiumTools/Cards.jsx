import React, { use, useState } from 'react';
import Degitools from './Degitools';


const Cards = ({ fetchPromise }) => {
  const AppsData = use(fetchPromise);
   const [singleCard, setSingleCard] = useState([]);
    


  return (
    <>
      <Degitools singleCard={singleCard} setSingleCard={setSingleCard} AppsData={AppsData} />
    </>
  );
};

export default Cards;