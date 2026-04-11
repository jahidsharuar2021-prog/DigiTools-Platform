import React, { use } from 'react';
import Degitools from './Degitools';


const Cards = ({ fetchPromise }) => {
  const AppsData = use(fetchPromise);

  return (
    <>
      <Degitools AppsData={AppsData} />
    </>
  );
};

export default Cards;