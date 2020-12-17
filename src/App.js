import React, { useState, useEffect } from "react";

import { get } from "./modules/rest";
import Storage from "./components/Storage";
import QueueHistory from "./components/QueueHistory";
import QueueByHour from "./components/QueueByHour";
import Main from "./components/Main";
import "./App.scss";

import { Oval } from "svg-loaders-react";

function App() {
  const [facts, setFacts] = useState([]);
  const [tick, setTick] = useState(0);
  const [queueHistoryGraph, setQueueHistoryGraph] = useState("both");

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
      <h1 id="title">FooBar - Dashboard</h1>
      {facts.length !== 0 ? (
        <>
          <Main facts={facts}></Main>
          <Storage storage={facts.storage} taps={facts.taps} />
          <section className="queue-section">
            <h1>Queue</h1>
            <div className="chart-btns">
              <button
                className={
                  queueHistoryGraph === "QueueHistory"
                    ? "button-active"
                    : "button-default"
                }
                onClick={() => setQueueHistoryGraph("QueueHistory")}
              >
                Live Data
              </button>
              <button
                className={
                  queueHistoryGraph === "QueueByHour"
                    ? "button-active"
                    : "button-default"
                }
                onClick={() => setQueueHistoryGraph("QueueByHour")}
              >
                Avg / hour
              </button>
              <button
                className={
                  queueHistoryGraph === "both"
                    ? "button-active"
                    : "button-default"
                }
                onClick={() => setQueueHistoryGraph("both")}
              >
                Both
              </button>
            </div>

            <div className="chart-container">
              {queueHistoryGraph === "QueueHistory" ? (
                <QueueHistory queue={facts.queue} tick={tick} />
              ) : queueHistoryGraph === "QueueByHour" ? (
                <QueueByHour />
              ) : queueHistoryGraph === "both" ? (
                <>
                  <QueueHistory queue={facts.queue} tick={tick} />
                  <QueueByHour />
                </>
              ) : null}
            </div>
          </section>
        </>
      ) : (
        <Oval
          stroke="#638bae"
          width="100"
          height="100"
          style={{ width: "100%" }}
        />
      )}
    </div>
  );
}

export default App;
