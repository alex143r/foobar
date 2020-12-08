import React, { useState } from "react";

export default function BeerStats({ serving }) {
  const [beers, setBeers] = useState([...serving]);
  const [beerNames, setBeersNames] = useState([]);

  /*
  function initialCount() {
    let initCount = 0;
    beers.forEach((order) => {
      initCount += order.order.length;
    });
    return initCount;
  }
*/
  //const [count, setCount] = useState(initialCount);

  serving.forEach((order) => {
    const findItem = beers.find((item) => item.id === order.id);

    if (findItem === undefined) {
      setBeers([...beers, order]);
      /* setCount((prevCount) => prevCount + order.order.length);*/
    }
  });
  return <h1>{beers[1].name} </h1>;
}
