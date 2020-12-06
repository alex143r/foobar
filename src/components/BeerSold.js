import React from "react";
//let beerCounter = 0;
// let beerSold = 0;
const served = [];
let beerSold = 0;

export default function BeerSold({ serving }) {
  if (serving !== undefined) {
    serving.forEach((order) => {
      const findItem = served.find((item) => item.id === order.id);
      if (findItem === undefined) {
        served.push(order);
        order.order.forEach((beer) => {
          beerSold++;
        });
      }
    });
  }

  return <>{serving !== undefined ? <h1>{beerSold}</h1> : <h1>-</h1>}</>;

  //const served = [{ id: "" }];

  //if (serving !== undefined) {
  //console.log(served);

  /*serving.forEach((s) => {
      for (let i = 0; i < serving.length; i++) {
        if (s.id === served.id) {
          break;
        } else {
          //served.push(serving[i].id);
        }
      }
    });*/

  // if (served.length < 1) {
  // } else {
  //   console.log(served);
  //   console.log(serving);

  //   //https://stackoverflow.com/questions/55694104/push-object-in-array-of-objects-but-only-if-the-object-property-is-unique/55694280
  //   let filtered = serving.filter((a) => !served.find((b) => b.id === a.id));
  //   let newServe = [...served, ...filtered];
  //   console.log(newServe);

  // serving.forEach((s) => {
  //   let duplicate = false;

  //   for (let i = 0; i < served.length; i++) {
  //     if (s.id === served[i].id) {
  //       duplicate = true;
  //     }
  //     if (duplicate === false) {
  //       served.push(s);
  //     }
  //   }
  // });

  //console.log(served);
  //       } else {
  //       }
  //     }
  //   });*/
  // }

  // //   for (let i = 0; i < served.length; i++) {
  // //     if (serving.id !== served[i].id) {
  // //       served.push(serving);
  // //     }
  // //   }

  // //  console.log(serving);
  // //      served.push(serving);
  // //  console.log(served);
  // //for (let i = 0; i < serving.order.length; i++) {
  // // console.log(serving.order);
  // //console.log(serving.order[i]);
  // //served.push(serving.order);
  // //console.log(served);
  // //beerCounter++;
  // // }

  // console.log(served);

  //console.log(beerCounter);
  //}
  //return <>{serving !== undefined ? <h1>yo</h1> : <h1>-</h1>}</>;
}
