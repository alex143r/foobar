import React, { useState, useEffect } from "react";

export default function BeerGraph({ serving, storage }) {
  const [lager, setLager] = useState([...storage]);
  const [sold, setSold] = useState([...lager]);
  const init = false;

  /*

  for (let i = 0; i < sold.length; i++) {
    if (lager[i].amount === sold[i].amount) {
    }
    if (lager[i].amount < sold[i].amount) {
      sold[i].counter = sold[i].amount - lager[i].amount;
      sold[i].amount = lager[i].amount;
    }
    if (lager[i].amount > sold[i].amount) {
      sold[i].amount = lager[i].amount;
    }
  }
  console.log(sold);

  /*if (init === false) {
    for (let i = 0; i < sold.length; i++) {
      sold[i].counter = 0;
    }
    init = true;
  }*/

  /*for (let i = 0; i < prev.length; i++) {
    console.log(beer[i]);
    console.log(prev[i]);
    beer[i].concat({ counter: 0 });
    if (beer[i].amount === prev[i].amount) {
      console.log("=");
    }
    if (beer[i].amount > prev[i].amount) {
      console.log(">");
    }
    if (beer[i].amount < prev[i].amount) {
      console.log("<");
    }
  }*/

  useEffect(() => {
    const interval = setInterval(() => {
      //setLager(storage);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <h1>yo</h1>;
}
