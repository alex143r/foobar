import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function BeerSold({ serving }) {
  const [beers, setBeers] = useState([...serving]);
  const [sold, setSold] = useState([]);
  const [chartX, setChartX] = useState([]);
  const [chartY, setChartY] = useState([]);
  console.log(serving);
  console.log(sold);

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
      order.order.forEach((item) => {
        const findTing = sold.find((beer) => beer.beer === item);
        //const findTing = sold.indexOf(item);
        if (findTing === undefined) {
          console.log("set");
          setSold([
            ...sold,
            {
              beer: item,
              counter: 1,
            },
          ]);
        } else {
          console.log("add");

          for (let i = 0; i < sold.length; i++) {
            if (sold[i].beer === item) {
              sold[i].counter++;
            }
          }
        }
      });
    }
  });
  console.log(chartX);
  useEffect(() => {
    const interval = setInterval(() => {}, 5000);
    return () => clearInterval(interval);
  }, []);
  setTimeout(updateData, 5000);
  function updateData() {
    console.log("yo1");

    for (let i = 0; i < sold.length; i++) {
      setChartX([...chartX, sold[i].beer]);
      setChartY([...chartY, sold[i].counter]);
    }
  }

  const data = {
    labels: chartX,
    datasets: [
      {
        label: "# of Votes",
        data: chartY,
        backgroundColor: ["blue", "blue", "blue"],
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
