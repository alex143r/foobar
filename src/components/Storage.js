import React from "react";

import TapLevel from "./TapLevel";
import ListContainer from "./ListContainer";

export default function Storage({ taps, storage }) {
  return (
    <section className="storage-section">
      <h1>Storage</h1>
      <ListContainer storage={storage} taps={taps} />
    </section>
  );
}
