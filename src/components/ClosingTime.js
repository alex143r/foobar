import React from "react";

export default function ClosingTime({ bar }) {
  let timeDiff;
  if (bar !== undefined) {
    const time = new Date();
    let closingTime = bar.closingTime;

    let timeDiffHrs =
      parseInt(closingTime.split(":")[0]) - parseInt(time.getHours()) - 1;

    let timeDiffMin =
      parseInt(closingTime.split(":")[1]) - parseInt(time.getMinutes());

    if (timeDiffMin < 0) {
      timeDiffMin = 60 - -timeDiffMin;
    }

    let timeDiffSec =
      parseInt(closingTime.split(":")[2]) - parseInt(time.getSeconds());
    if (timeDiffSec < 0) {
      timeDiffSec = 60 - -timeDiffSec;
    }

    timeDiff = timeDiffHrs + ":" + timeDiffMin + ":" + timeDiffSec;
    if (timeDiffHrs >= 22) {
      timeDiff = "closed";
    }
  }

  return <>{bar !== undefined ? <h1>{timeDiff}</h1> : null}</>;
}
