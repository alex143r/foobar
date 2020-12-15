import React, { useState, useEffect } from "react";

import { get } from "./modules/rest";

import Storage from "./components/Storage";
import QueueHistoryData from "./components/QueueHistoryData";
import QueueByHour from "./components/QueueByHour";

import "./App.scss";
//import QueueHistory from "./components/QueueHistory";

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

  //console.log(facts);
  return (
    <div className="App">
      <Storage storage={facts.storage} taps={facts.taps} />
      <QueueHistoryData
        queue={facts.queue}
        time={facts.timestamp}
        serving={facts.serving}
        tick={tick}
      />
      <QueueByHour />
    </div>
  );
}

export default App;
