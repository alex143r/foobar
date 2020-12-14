import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function BeerSoldDupB({ serving, storage }) {
  const [beers, setBeers] = useState([...serving]);

  const [chartX, setChartX] = useState([]);
  const [chartY, setChartY] = useState([]);
  const [sold, setSold] = useState([]);
  const [count, setCount] = useState(initialCount);

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

  serving.map((order) => {
    const findOrder = beers.find((item) => item.id === order.id);

    if (findOrder === undefined) {
      setBeers([...beers, order]);
      setCount((prevCount) => prevCount + order.order.length);

      order.order.map((beer) => {
        const beerId = sold
          .map((beer) => {
            return beer.beer;
          })
          .indexOf(beer);

        var stateCopy = Object.assign([], sold);
        stateCopy = stateCopy.slice();
        stateCopy[beerId] = Object.assign({}, stateCopy[beerId]);
        stateCopy[beerId].counter = sold[beerId].counter + 1;

        setSold(stateCopy);
        //sold[beerId].counter = sold[beerId].counter + 1;
        return sold;
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
