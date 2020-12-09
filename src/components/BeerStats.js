import React, { useState } from "react";

export default function BeerStats({ serving }) {
  const [beers, setBeers] = useState([...serving]);
  const [beerStats, setBeerStats] = useState([]);
  /*
  const [githop, setGithop] = useState([]);
  const [holla, setHolla] = useState([]);
  const [steam, setSteam] = useState([]);
  const [fairy, setFairy] = useState([]);
  const [sleigh, setSleigh] = useState([]);
  const [fairy, setFairy] = useState([]);

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
      order.order.forEach((name) => {
        // const findBeer = beerStats.find((i) => i === name);
        const findBeer = beerStats.includes("Hollaback Lager");
        console.log(findBeer);
        console.log(beerStats[name]);

        console.log(name);

        if (beerStats[name] === name) {
          console.log("add");
          setBeers([...beers[name], name]);
        } else {
          beerStats[name] = [];
          console.log(beerStats);
        }
      });
      setBeers([...beers, order]);
      /* setCount((prevCount) => prevCount + order.order.length);*/
    }
  });
  return <h1>{beers[1].name} </h1>;
}
