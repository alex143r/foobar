import React, { useState, useEffect } from "react";

export default function ClosingTime({ bar }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  function calculateTimeLeft() {
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
    let timeLeft = {
      timeDiff: timeDiff,
      timeDiffHrs: timeDiffHrs,
      timeDiffMin: timeDiffMin,
      timeDiffSec: timeDiffSec,
    };
    return timeLeft;
  }
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <>
      {timeLeft.timeDiffHrs > 0 && timeLeft.timeDiffHrs < 14 ? (
        <>
          <h3>Closing in</h3> <h1>{timeLeft.timeDiff} </h1>
        </>
      ) : (
        <h2>closed</h2>
      )}
    </>
  );
}
