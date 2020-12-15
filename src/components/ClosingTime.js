import React from "react";

export default function ClosingTime({ bar }) {
  let timeDiff;

  const time = new Date();
  let closingTime = bar.closingTime;

  let timeDiffHrs = checkLength(
    closingTime.split(":")[0] - time.getHours() - 1
  );

  let timeDiffMin = closingTime.split(":")[1] - time.getMinutes();

  if (timeDiffMin < 0) {
    timeDiffMin = 60 - -timeDiffMin;
  }

  let timeDiffSec = closingTime.split(":")[2] - time.getSeconds();

  if (timeDiffSec < 0) {
    timeDiffSec = 60 - -timeDiffSec;
  }
  timeDiffHrs = checkLength(timeDiffHrs);
  timeDiffMin = checkLength(timeDiffMin);
  timeDiffSec = checkLength(timeDiffSec);

  if (timeDiffHrs < 0 || timeDiffHrs > 7) {
    timeDiff = "closed";
  } else {
    timeDiff = timeDiffHrs + ":" + timeDiffMin + ":" + timeDiffSec;
  }

  function checkLength(number) {
    if (number.toString().length < 2) {
      number = "0" + number;
      return number;
    } else {
      return number;
    }
  }
  return (
    <>
      {timeDiffHrs > 0 && timeDiffHrs < 14 ? (
        <>
          <h3>Lukker om</h3> <h1> {timeDiff} </h1>
        </>
      ) : (
        "closed"
      )}
    </>
  );
}
