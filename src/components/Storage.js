import React from "react";

import TapLevel from "./TapLevel";
import ListContainer from "./ListContainer";

export default function Storage({ taps, storage }) {
  return (
    <>
      {storage !== undefined ? (
        <ListContainer storage={storage} taps={taps} />
      ) : (
        "Loading"
      )}
    </>
  );
}
