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

  //const [serving, setServing] = useState([]);
  const newServ = [facts.serving];

  return (
    <div className="App">
      <Main facts={facts} ns={newServ}></Main>
    </div>
  );
}

export default App;
