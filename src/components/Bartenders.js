import React, { useEffect, useState } from "react";

export default function Bartenders({ bartenders }) {
  const [workers, setWorkers] = useState(initBartenders);

  function initBartenders() {
    const newArr = bartenders.map((bartender) => ({
      name: bartender.name,
      servingCustomer:
        bartender.servingCustomer !== null ? [bartender.servingCustomer] : [],
      count: 0,
    }));
    return newArr;
  }

  useEffect(() => {
    bartenders.map((bartender) => {
      const nameId = workers
        .map((bartender) => {
          return bartender.name;
        })
        .indexOf(bartender.name);
      workers.map((worker) => {
        if (worker.name === bartender.name) {
          if (
            worker.servingCustomer[worker.servingCustomer.length - 1] !==
              bartender.servingCustomer &&
            bartender.servingCustomer !== null
          ) {
            //https://stackoverflow.com/questions/39889009/replace-object-in-array-on-react-state
            let newArr = [...workers];
            newArr[nameId].servingCustomer = [
              ...newArr[nameId].servingCustomer,
              bartender.servingCustomer,
            ];
            setWorkers(newArr);
          }
        }
      });
    });
  });

  return (
    <div className="Bartenders" key={1}>
      <div>
        <h2>Name</h2>
        {bartenders.map((bartender, i) => {
          return <p key={i}> {bartender.name}</p>;
        })}
      </div>
      <div>
        <h2>Serving</h2>
        {bartenders.map((bartender, i) => {
          return (
            <p key={i}>
              {bartender.servingCustomer !== null
                ? "#" + bartender.servingCustomer
                : "-"}
            </p>
          );
        })}
      </div>
      <div>
        <h2>Status</h2>
        {bartenders.map((bartender, i) => {
          return <p key={i}> {bartender.status.toLowerCase()}</p>;
        })}
      </div>
      <div>
        <h2>Expedited</h2>
        {workers.map((worker, i) => {
          return <p key={i}>{worker.servingCustomer.length}</p>;
        })}
      </div>
    </div>
  );
}
