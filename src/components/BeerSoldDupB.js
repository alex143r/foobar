import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
//import { getSold } from "../modules/rest";

export default function BeerSoldDupB({ serving, storage }) {
  const [served, setServed] = useState([]);
  const [chartX, setChartX] = useState([]);
  const [chartY, setChartY] = useState([]);
  const [arr, setArr] = useState(initArr);

  function initArr() {
    const newArr = storage.map((beer) => ({ beer: beer.name, counter: 0 }));
    storage.map((beer) => {
      setChartX((prev) => [...prev, beer.name]);
      return chartX;
    });
    return newArr;
  }
  console.log(served);
  console.log(serving);
  console.log(arr);

  serving.map((order) => {
    const findOrder = served.find((item) => item.id === order.id);
    if (findOrder === undefined) {
      setServed([...served, order]);
      order.order.map((orderBeer) => {
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
      // setArr(
      //   arr.map((beer) =>
      //     beer.beer === orderBeer
      //       ? Object.assign({}, beer, { counter: beer.counter + 1 })
      //       : beer
      //   )
      // );
      // console.log(arr);

      // const newState = arr.map((beer) => {
      //   const newBeer = { ...beer };
      //   if (orderBeer === newBeer.beer) {
      //     newBeer.counter = arr[beerId].counter + 1;
      //     console.log(orderBeer, newBeer);
      //   }
      //   return newBeer;
      // });
      // setArr(newState);

      // const newArr = arr.map((beer) => {
      //   const newBeer = { ...beer };
      //   if (beer.beer === orderBeer) {
      //     console.log(newBeer, orderBeer);
      //     newBeer.counter = beer.counter + 1;
      //   }
      //   return newBeer;
      // });
      // setArr(newArr);

      // const newArr = arr.map((beer) => {
      //   return beer.beer === orderBeer
      //     ? Object.assign({}, beer, { counter: beer.counter + 1 })
      //     : beer;
      // });
      // const beerId = arr
      //   .map((beer) => {
      //     return beer.beer;
      //   })
      //   .indexOf(orderBeer);
      // console.log(orderBeer);
      // const newRe = [
      //   ...arr.slice(0, beerId),
      //   { ...arr[beerId], counter: arr[beerId].counter++ },
      //   ...arr.slice(beerId + 1),
      // ];
      // setArr(newRe);
      //setArr(newArr);
      //  console.log(arr);
      // return arr;

      // console.log(serving);
      // order.order.map((orderBeer) => {
      //   const newState = arr.map((beer) => {
      //     const newBeer = { ...beer };

      //     if (beer.beer === orderBeer) {
      //       console.log(newBeer, orderBeer);
      //       newBeer.counter = newBeer.counter + 1;
      //     }
      //     return newBeer;
      //   });
      //   console.log(arr);
      // const newArr = [...arr];
      // const beerIndex = arr
      //   .map((beer) => {
      //     return beer.beer;
      //   })
      //   .indexOf(beer);
      //   console.log(beerIndex);
      //   console.log(sold[beerIndex]);

      //setWorkers(newArr);
      // var newState = arr.map((u) => {
      //   return u.beer === beer
      //     ? Object.assign({}, u, { counter: u.counter + 1 })
      //     : u;
      // });

      //setArr(newState);

      //newArr[1].counter = arr[1].counter + 1;
      //setArr(newArr);
      //});

      setChartY([]);
      arr.map((beer) => {
        setChartY((prev) => [...prev, beer.counter / 2]);
        return chartY;
      });

      // order.order.map((beer) => {
      //   const beerId = sold
      //     .map((beer) => {
      //       return beer.beer;
      //     })
      //     .indexOf(beer);
      //   console.log(sold);
      //   //sold[beerId].counter = sold[beerId].counter + 1;
      //   //https://stackoverflow.com/questions/39889009/replace-object-in-array-on-react-state
      //   let newArr = [...sold];
      //   console.log(newArr[beerId].counter);
      //   newArr[beerId].counter = sold[beerId].counter + 1;
      //   setSold(newArr);
      //   console.log(newArr[beerId].counter);
      //   console.log(newArr);
      //   return sold;
      // });
    }
    return arr;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      //postArray();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // function clicked(e) {
  //   checkRest(arr);
  // }
  // function checkRest(arr) {
  //   let date = new Date();
  //   date =
  //     date.getDate().toString() +
  //     date.getMonth().toString() +
  //     date.getFullYear().toString();
  //   const payload = { name: date, array: arr };
  // postSold(payload);

  //   callback
  //     .map((array) => {
  //       return array.name;
  //     })
  //     .indexOf(date)
  // );

  // function postArr(payload) {
  //   // console.log(jsonArr);
  //   //   post(payload);
  // }

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
