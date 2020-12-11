import React, { useState, useEffect } from "react";

import { get } from "./modules/rest";

import Main from "./components/Main";
import "./App.scss";

function App() {
  const [facts, setFacts] = useState([]);
  useEffect(() => {
    get(setFacts);
    const interval = setInterval(() => {
      get(setFacts);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {facts.length === undefined ? <Main facts={facts}> </Main> : <h1>no</h1>}
    </div>
  );
}

export default App;
