import React from "react";

export default function Bartenders({ bartenders }) {
  return (
    <>
      {bartenders !== undefined ? (
        <>
          <div>
            <h3>{bartenders[0].name}</h3>
            <h3>{bartenders[1].name}</h3>
            <h3>{bartenders[2].name}</h3>
          </div>
          <div>
            <p>{bartenders[0].servingCustomer}</p>
            <p>{bartenders[1].servingCustomer}</p>
            <p>{bartenders[2].servingCustomer}</p>
          </div>
          <div>
            <p>{bartenders[0].statusDetail}</p>
            <p>{bartenders[1].statusDetail}</p>
            <p>{bartenders[2].statusDetail}</p>
          </div>
          <div>
            <p>0</p>
            <p>1</p>
            <p>2</p>
          </div>
        </>
      ) : (
        <h1>-</h1>
      )}
    </>
  );
}
