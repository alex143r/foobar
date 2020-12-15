import React, { useState, useEffect } from "react";

import { get, postSold, getSold } from "./modules/rest";

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
      <Main facts={facts} postSold={postSold} getSold={getSold}></Main>
    </div>
  );
}

export default App;
