import React, { useState } from "react";

export default function Bartenders({ bartenders }) {
  const [work, setWork] = useState([...bartenders]);
  console.log(work);
  return (
    <div className="Bartenders" key={1}>
      <div>
        <h2>name</h2>
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
        <h2>name</h2>
        {bartenders.map((bartender) => {
          return <p> {bartender.status.toLowerCase()}</p>;
        })}
      </div>
      <div>
        <h2>name</h2>
        {bartenders.map((bartender) => {
          return <p> {bartender.name}</p>;
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
