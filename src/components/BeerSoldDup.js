import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function BeerSoldDup({ serving }) {
  const [beers, setBeers] = useState([...serving]);
  const [sold, setSold] = useState([]);
  const [chartX, setChartX] = useState([]);
  const [chartY, setChartY] = useState([]);
  const [newArr, setNewArr] = useState([]);

  function initialCount() {
    let initCount = 0;
    beers.forEach((order) => {
      initCount += order.order.length;
    });
    return initCount;
  }

  const [count, setCount] = useState(initialCount);

  serving.forEach((step1) => {
    const findItem = beers.find((item) => item.id === step1.id);

    if (findItem === undefined) {
      setBeers([...beers, step1]);
      setCount((prevCount) => prevCount + step1.order.length);
      step1.order.forEach((step2) => {
        setNewArr([...newArr, step2]);

        //   const findTing = sold.find((beer) => beer.beer === item);
        //   //const findTing = sold.indexOf(item);
        //   if (findTing === undefined) {
        //     setSold([
        //       ...sold,
        //       {
        //         beer: item,
        //         counter: 1,
        //       },
        //     ]);
        //   } else {
        //     for (let i = 0; i < sold.length; i++) {
        //       if (sold[i].beer === item) {
        //         sold[i].counter++;
        //       }
        //     }
        //   }
      });
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {}, 5000);
    return () => clearInterval(interval);
  }, []);
  // setTimeout(updateData, 20000);
  function updateData() {
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
