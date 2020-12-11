import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function BeerStats({ serving }) {
  const [beers, setBeers] = useState([...serving]);
  const [beerStats, setBeerStats] = useState([]);

  /*
  const [name, setGithop] = useState([]);
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
        const findBeer = beerStats.indexOf(name);
        // console.log(findBeer);

        //setBeerStats([...beerStats, name]);

        const findItem = beerStats.find((beer) => beer === name);
        // console.log(findItem);
        //console.log(beerStats);

        //        console.log(name);
        //console.log(beerStats);

        beerStats.forEach((beer) => {
          console.log(beer);
          //eturn beer;
        });

        /*
        if (beerStats[name] === name) {
          console.log("same");
          beerStats[name].push(name);
        }*/
        beerStats[name] = [];
        //console.log(beerStats);

        if (findBeer >= 0) {
          //beerStats[name]++;
          //          setBeerStats((prevCount.this) => prevCount.this + 1);
          // setCount((prevCount) => prevCount + order.order.length);
          /*setBeerStats({
            [name]: {
              counter: 10,
            },
          });*/
        }

        /*if (findBeer < 0) {
          console.log(beerStats);
          setBeerStats({
            [name]: {
              counter: 10,
            },
          });

          //beerStats[name] = 0;
          //setBeerStats([...beerStats, name]);
          //          setBeerStats({ counter: 0 });

          //setBeerStats({});
          //        setBeers([...beers, order]);

          console.log(beerStats);
        }*/
        /*setBeerStats([
          ...beerStats,
          {
            name: name,
            counter: 1,
          },
        ]);*/
        /*
        let beerCount = 0;
        beerStats[name] = [];
        beerStats[name].push(beerCount);*/
        /*
        const findBeer = beerStats.indexOf(name);
        console.log(findBeer);
        console.log(beerStats[name]);

        console.log(name);

        if (findBeer >= 0) {
          console.log("add");
          setBeers([...beers[name], name]);
        } else {
          beerStats[name] = [];
          console.log(beerStats);
        }*/
      });
      setBeers([...beers, order]);
      /* setCount((prevCount) => prevCount + order.order.length);*/
    }
  });

  const data = {
    labels: ["gitHop", "pizza", "2"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
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
    <>
      <Bar data={data} options={options} />
    </>
  );
}
