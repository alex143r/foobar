import React, { useState } from "react";

export default function BeerSold({ serving }) {
  const [beers, setBeers] = useState([...serving]);

  function initialCount() {
    let initCount = 0;
    beers.forEach((order) => {
      initCount += order.order.length;
    });
    return initCount;
  }

  const [count, setCount] = useState(initialCount);

  serving.forEach((order) => {
    const findItem = beers.find((item) => item.id === order.id);

    if (findItem === undefined) {
      setBeers([...beers, order]);
      setCount((prevCount) => prevCount + order.order.length);
    }
  });
  return <h1>{count}</h1>;
}
