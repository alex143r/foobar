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
  console.log(chartX);
  function initialCount() {
    let initCount = 0;
    beers.forEach((order) => {
      initCount += order.order.length;
    });
    return initCount;
  }

  const [count, setCount] = useState(initialCount);
  const [count2, setCount2] = useState(initialCount);

  serving.map((step1) => {
    const findItem = beers.find((item) => item.id === step1.id);

    if (findItem === undefined) {
      setBeers([...beers, step1]);
      setCount((prevCount) => prevCount + step1.order.length);

      step1.order.map((step2) => {
        console.log(step2);
        // setNewArr([...newArr, step2]);
        //setCount2((prevCount2) => prevCount2 + 1);
        //newArr.push(step2);
        //setNewArr((prev) => ({ beers: newArr.concat(step2) }));
        //  const findTing = sold.name.indexOf(step2);
        //  console.log(findTing);
        const newBeerId = sold
          .map((beer) => {
            return beer.beer;
          })
          .indexOf(step2);
        sold[newBeerId].counter = sold[newBeerId].counter + 1;
        //  sold[newBeerId].counter++;

        //   if (findTing < 0) {
        //setNewArr((previous) => [...previous, step2]);
        // } else {
        //  }
      });
    }
  });
  console.log(sold);
  useEffect(() => {
    const interval = setInterval(() => {
      sold.map((beer) => {
        setChartY((previous) => [previous, beer.counter]);
        return chartY;
      });
      console.log(chartY);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  //console.log(serving);
  //console.log(newArr);
  const data = {
    labels: chartX,
    datasets: [
      {
        label: "# of Votes",
        data: chartY,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
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
