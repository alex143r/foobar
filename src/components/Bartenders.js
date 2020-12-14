import React, { useState } from "react";

export default function Bartenders({ bartenders }) {
  const [workers, setWorkers] = useState([]);

  if (workers.length === 0) {
    bartenders.map((bartender) => {
      setWorkers((prev) => [
        ...prev,
        {
          name: bartender.name,
          servingCustomer:
            bartender.servingCustomer !== null
              ? [bartender.servingCustomer]
              : [],
          count: 0,
        },
      ]);
      return workers;
    });
  }

  if (workers.length > 0) {
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
            console.log(bartender.servingCustomer);
            newArr[nameId].servingCustomer = [
              ...newArr[nameId].servingCustomer,
              bartender.servingCustomer,
            ];
            setWorkers(newArr);
          }
        }
      });
    });
  }
  console.log(workers);

  return (
    <div className="Bartenders" key={1}>
      <div>
        <h2>Name</h2>
        {bartenders.map((bartender) => {
          return <p> {bartender.name}</p>;
        })}
      </div>
      <div>
        <h2>Serving</h2>
        {bartenders.map((bartender) => {
          return (
            <p>
              {bartender.servingCustomer !== null
                ? "#" + bartender.servingCustomer
                : "-"}
            </p>
          );
        })}
      </div>
      <div>
        <h2>Status</h2>
        {bartenders.map((bartender) => {
          return <p> {bartender.status.toLowerCase()}</p>;
        })}
      </div>
      <div>
        <h2>Expedited</h2>
        {workers.map((worker) => {
          return <p>{worker.servingCustomer.length}</p>;
        })}
      </div>
    </div>
  );

  // return (
  //   <>
  //     <div>
  //       <h2>Name</h2>
  //       <p>{bartenders[0].name}</p>
  //       <p>{bartenders[1].name}</p>
  //       <p>{bartenders[2].name}</p>
  //     </div>
  //     <div>
  //       <h2>Ekspederer</h2>
  //       <p>{bartenders[0].servingCustomer}</p>
  //       <p>{bartenders[1].servingCustomer}</p>
  //       <p>{bartenders[2].servingCustomer}</p>
  //     </div>
  //     <div>
  //       <h2>Name</h2>
  //       <p>{bartenders[0].status}</p>
  //       <p>{bartenders[1].status.toLowerCase()}</p>
  //       <p>{bartenders[2].statusDetail}</p>
  //     </div>
  //     <div>
  //       <h2>Name</h2>
  //       <p>0</p>
  //       <p>1</p>
  //       <p>2</p>
  //     </div>
  //   </>
  // );
}
