import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";

export default function QueueHistory({ queue, serving, tick }) {
  const [queueLength, setQueueLength] = useState([]);
  const [labelTime, setLabelTime] = useState([]);

  //console.log("queueLength", queueLength, "FRA BACKEND:", queue.length);

  //setQueueLength([...queueLength, queue.length]);

  useEffect(() => {
    //console.log("queueLength", queueLength, "FRA BACKEND:", queue.length);
    console.log(tick % 5);
    if (tick % 5 === 0) {
      setQueueLength(
        queueLength.length === 15
          ? queueLength.slice(1)
          : [...queueLength, queue.length]
      );
      setLabelTime(
        labelTime.length === 15
          ? labelTime.slice(1)
          : [...labelTime, new Date(Date.now()).toString().split(" ")[4]]
      );
      // function post ( => queue.length )
      function post(queue) {
        console.log("POST", queue.length);

        const data = {
          length: queue.length,
          date: new Date(Date.now()).toString().split(" ")[4].substring(0, 5),
        };
        console.log("POST data object", data);

        const postData = JSON.stringify(data);
        console.log(postData);

        fetch(
          "https://foobar-edfd.restdb.io/rest/foobar-queue?h={%22$groupby%22:[%22$HOUR:date%22],%20%22$aggregate%22:%20[%22AVG:length%22]}",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "x-apikey": "5f9c2a96231ba42851b49f89",
              "cache-control": "no-cache",
            },
            body: postData,
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
      // kald functionen post - som sender data til restdb
      //post(queue);
    }
    //console.log("Inside useEffect", queueLength, labelTime);
  }, [tick]);

  // useEffect(() => {
  //   setQueueLength([...queueLength, queue.length]);
  // });

  const data = {
    labels: labelTime,
    datasets: [
      {
        label: "People in queue",
        data: queueLength,
        backgroundColor: ["rgba(99, 139, 174, 0.2)"],
        borderColor: ["#638bae"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: `${queueLength[queueLength.length - 1]} personer i kø nu`,
      lineHeight: "2",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
            min: 0,
            suggestedMax: 7,
          },
        },
      ],
    },
  };

  return (
    <>
      {/* {queue.map((item) => {
        const time = new Date(item.startTime).toString().split(" ");
        console.log("KØTID - START", time);
        return <p>Starttid: {time[4]}</p>;
      })}
      <p>HELLO</p> */}
      <Line data={data} options={options} />
    </>
  );
}
