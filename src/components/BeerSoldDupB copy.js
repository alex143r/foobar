import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function BeerSoldDupB({ serving, storage }) {
  const [beers, setBeers] = useState([...serving]);

  const [chartX, setChartX] = useState([]);
  const [chartY, setChartY] = useState([]);
  const [sold, setSold] = useState([]);

  if (sold.length === 0) {
    storage.map((beer) => {
      setChartX((prev) => [...prev, beer.name]);

      setSold((prev) => [...prev, { beer: beer.name, counter: 0 }]);
      return chartX, sold;
    });
  }
  //console.log(chartX);
  function initialCount() {
    let initCount = 0;
    beers.forEach((order) => {
      initCount += order.order.length;
    });
    return initCount;
  }

  const [count, setCount] = useState(initialCount);
  const [count2, setCount2] = useState(initialCount);

  serving.map((order) => {
    const findOrder = beers.find((item) => item.id === order.id);

    if (findOrder === undefined) {
      setBeers([...beers, order]);
      setCount((prevCount) => prevCount + order.order.length);

      order.order.map((beer) => {
        // const newSoldItem=
        // setNewArr([...newArr, step2]);
        //setCount2((prevCount2) => prevCount2 + 1);
        //newArr.push(step2);
        //setNewArr((prev) => ({ beers: newArr.concat(step2) }));
        //  const findTing = sold.name.indexOf(step2);
        //  console.log(findTing);

        const beerId = sold
          .map((beer) => {
            return beer.beer;
          })
          .indexOf(beer);

        sold[beerId].counter = sold[beerId].counter + 1;
        return sold;
        //  sold[newBeerId].counter++;

        //   if (findTing < 0) {
        //setNewArr((previous) => [...previous, step2]);
        // } else {
        //  }
      });
      setChartY([]);
      sold.map((beer) => {
        setChartY((prev) => [...prev, beer.counter]);

        return chartY;
      });
    }
  });

  const data = {
    labels: chartX,
    datasets: [
      {
        label: "Beer sold",
        data: chartY,
        backgroundColor: "lightblue",

        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {},
        },
      ],
    },
  };
  return (
    <div>
      <Bar className="Graph" data={data} options={options} />
    </div>
  );
}
