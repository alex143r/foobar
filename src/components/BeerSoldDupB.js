import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
//import { getSold } from "../modules/rest";

export default function BeerSoldDupB({ serving, storage, postSold, getSold }) {
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
    if (serving[serving.length - 1].id === undefined) {
      console.log("broken");
      console.log(serving);
    }
    if (serving[serving.length - 1].id !== undefined) {
      if (served[served.length - 1].id !== serving[serving.length - 1].id) {
        console.log(serving[serving.length - 1]);
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

  // console.log("use");
  // serving.map((order) => {
  //   const findOrder = served.find((item) => item.id === order.id);
  // if (findOrder === undefined) {
  //   order.order.map((orderBeer) => {
  //     const beerId = arr
  //       .map((beer) => {
  //         return beer.beer;
  //       })
  //       .indexOf(orderBeer);
  //     const newState = [...arr];
  //     console.log(newState);

  //     newState[beerId].counter = arr[beerId].counter + 1;
  //     setArr(newState);
  //     return arr;
  //   });
  // }
  // });
  // console.log(served);
  // console.log(serving);
  // if (served[served.length - 1].id !== serving[serving.length - 1].id) {
  //   serving.map((order) => {
  //     setServed([...served, order]);
  //     console.log(served);
  //   });
  // }

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

  // setChartY([]);
  // arr.map((beer) => {
  //   setChartY((prev) => [...prev, beer.counter / 2]);
  //   return chartY;
  // });

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

  function clicked(e) {
    checkRest(arr);
  }
  function checkRest(arr) {
    let date = new Date();
    date =
      date.getDate().toString() +
      date.getMonth().toString() +
      date.getFullYear().toString();
    const payload = { name: date, array: arr };
    const getThing = getSold((callback) => {
      return callback.map((item) => item.name);
    });
    console.log(getThing);
    postArr(payload);
  }
  function postArr(payload) {
    postSold(payload);
  }

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
  };
  return (
    <div>
      <Bar className="Graph" data={data} options={options} />
      <button onClick={clicked}></button>
    </div>
  );
}
