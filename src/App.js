import React, { useState, useEffect } from "react";

import { get } from "./modules/rest";

import Storage from "./components/Storage";

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

  //console.log(facts);
  return (
    <div className="App">
      <Storage storage={facts.storage} taps={facts.taps} />
    </div>
  );
}

export default App;
