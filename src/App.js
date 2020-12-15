import React, { useState, useEffect } from "react";

import { get, postSold, getSold } from "./modules/rest";
import Storage from "./components/Storage";
//import QueueHistoryData from "./components/QueueHistoryData";
import QueueHistory from "./components/QueueHistory";
import QueueByHour from "./components/QueueByHour";
import Main from "./components/Main";
import "./App.scss";
import QueueNr from "./components/QueueNr";

function App() {
  const [facts, setFacts] = useState([]);
  const [tick, setTick] = useState(0);
  const [queueHistoryGraph, setQueueHistoryGraph] = useState("QueueHistory");

  useEffect(() => {
    get(setFacts);
    const interval = setInterval(() => {
      get(setFacts);
      setTick((tick) => tick + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  console.log(Main);

  return (
    <div className="App">
      <h1 id="title">FooBar - Dashboard</h1>
      {facts.length !== 0 ? (
        <>
          <Main facts={facts} postSold={postSold} getSold={getSold}></Main>
          <Storage storage={facts.storage} taps={facts.taps} />
          <section className="queue-section">
            <h1>Queue</h1>
            {/* <QueueHistory
              queue={facts.queue}
              time={facts.timestamp}
              serving={facts.serving}
              tick={tick}
            /> */}
            {/* <div className="queue-grid">
              <QueueHistory
                queue={facts.queue}
                time={facts.timestamp}
                serving={facts.serving}
                tick={tick}
              />
              <div className="QueueNr">
                <QueueNr queue={facts.queue} />
              </div>
            </div> */}
            <button
              onClick={() =>
                setQueueHistoryGraph(
                  queueHistoryGraph === "QueueHistory"
                    ? "QueueByHour"
                    : "QueueHistory"
                )
              }
            >
              Show{" "}
              {queueHistoryGraph === "QueueByHour"
                ? "Live data"
                : "Average queue by hour"}
            </button>
            {queueHistoryGraph === "QueueHistory" ? (
              <QueueHistory
                queue={facts.queue}
                time={facts.timestamp}
                serving={facts.serving}
                tick={tick}
              />
            ) : queueHistoryGraph === "QueueByHour" ? (
              <QueueByHour />
            ) : queueHistoryGraph === "both" ? (
              <>
                <QueueHistory
                  queue={facts.queue}
                  time={facts.timestamp}
                  serving={facts.serving}
                  tick={tick}
                />
                <QueueByHour />
              </>
            ) : null}
          </section>
          <section className="staff-section">
            <h1>Staff</h1>
          </section>
        </>
      ) : (
        <h1>no</h1>
      )}
    </div>
  );
}

export default App;
