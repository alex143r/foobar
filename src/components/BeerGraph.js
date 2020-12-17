import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function BeerGraph({ serving, storage }) {
  const [chartX, setChartX] = useState([]);
  const [chartY, setChartY] = useState([]);
  const [served, setServed] = useState([...serving]);
  const [arr, setArr] = useState(initArr);

  function initArr() {
    const newArr = storage.map((beer) => ({ beer: beer.name, counter: 0 }));
    const nextState = storage.map((beer) => beer.name);
    setChartX(nextState);
    return newArr;
  }
  useEffect(() => {
    if (serving.length > 0) {
      if (serving[serving.length - 1].id !== undefined) {
        if (served[served.length - 1].id !== serving[serving.length - 1].id) {
          setServed([...served, serving[serving.length - 1]]);
          serving[serving.length - 1].order.map((orderBeer) => {
            const beerId = arr
              .map((beer) => {
                return beer.beer;
              })
              .indexOf(orderBeer);
            const newState = [...arr];
            newState[beerId].counter = arr[beerId].counter + 1;
            setArr(newState);
            return arr;
          });
        }
      }
    }
  }, [served, serving, arr]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newState = arr.map((beer) => {
        return beer.counter;
      });
      console.log(newState);
      console.log(arr);
      setChartY(newState);
    }, 5000);
    return () => clearInterval(interval);
  }, [chartY, arr]);

  const data = {
    labels: chartX,
    datasets: [
      {
        label: "Beer sold",
        data: chartY,
        backgroundColor: "#638bae",

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
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <div className="Graph" style={{ padding: "1rem 2rem" }}>
      <Bar data={data} options={options} chartY={chartY} />
    </div>
  );
}
