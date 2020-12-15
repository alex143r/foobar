import React, { useState, useEffect } from "react";

import { get, postSold, getSold } from "./modules/rest";
import Storage from "./components/Storage";
import QueueHistoryData from "./components/QueueHistoryData";
import QueueByHour from "./components/QueueByHour";
import Main from "./components/Main";
import "./App.scss";
import QueueNr from "./components/QueueNr";

function App() {
  const [facts, setFacts] = useState([]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    get(setFacts);
    const interval = setInterval(() => {
      get(setFacts);
      setTick((tick) => tick + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {facts.length !== 0 ? (
        <>
          <Main facts={facts} postSold={postSold} getSold={getSold}></Main>
          <Storage storage={facts.storage} taps={facts.taps} />
          <section className="queue-section">
            <h1>Queue</h1>
            {/* <QueueNr /> */}
            <QueueHistoryData
              queue={facts.queue}
              time={facts.timestamp}
              serving={facts.serving}
              tick={tick}
            />
          </section>
          <section className="staff-section">
            <h1>Staff</h1>
          </section>
        </>
      ) : (
        <h1>no</h1>
      )}

      {/* <div style={{ width: "90vw", margin: "auto" }}>
        <QueueHistoryData
          queue={facts.queue}
          time={facts.timestamp}
          serving={facts.serving}
          tick={tick}
        />
      </div> */}
      {/* <QueueByHour /> */}
    </div>
  );
}

export default App;
