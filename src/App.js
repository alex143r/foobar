import React, { useState, useEffect } from "react";

import { get, postSold, getSold } from "./modules/rest";
import Storage from "./components/Storage";
import QueueHistoryData from "./components/QueueHistoryData";
import QueueByHour from "./components/QueueByHour";
import Main from "./components/Main";
import "./App.scss";

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
      <Main facts={facts} postSold={postSold} getSold={getSold}></Main>
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
