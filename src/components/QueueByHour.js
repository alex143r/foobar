import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";

export default function QueueByHour() {
  const [queueAverage, setQueueAverage] = useState([]);
  const [hour, setHour] = useState([]);
  const [fullData, setFullData] = useState([]);

  //const [interval, setInterval] = [];

  const url =
    "https://foobar-edfd.restdb.io/rest/foobar-queue?h={%22$groupby%22:[%22$HOUR:date%22],%20%22$aggregate%22:%20[%22AVG:length%22]}";
  const key = "5f9c2a96231ba42851b49f89";

  useEffect(() => {
    function fetchData() {
      fetch(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": key,
          "cache-control": "no-cache",
        },
      })
        .then((e) => e.json())
        .then((data) => {
          //setQueueAverage([e]);
          handleData(data);
          //console.log("DATA???", data);
        });
    }
    console.log("HELLO");
    fetchData();
  }, []);

  function handleData(data) {
    console.log("handleData", data);

    for (const property in data) {
      //console.log(data, property);
      //console.log(`${property}: ${data[property]["AVG length"]}`);
      setQueueAverage((queueAverage) =>
        queueAverage.concat(data[property]["AVG length"].toFixed(2))
      );
      setHour((hour) => hour.concat(property));
    }
  }

  console.log(queueAverage, "STATE", hour);

  //const filteredByHour = hour.filter((hour) => hour >= 12 && hour <= 22);
  //console.log(filteredByHour);

  //const findIndexStart = hour.findIndex((hour) => hour == 12);
  //const findIndexEnd = hour.findIndex((hour) => hour == 22);
  //console.log(findIndexStart, findIndexEnd, "index");

  const data = {
    labels: hour,
    datasets: [
      {
        label: "Kø-gennemsnit pr. time",
        data: queueAverage,
        backgroundColor: ["rgba(99, 139, 174, 0.2)"],
        borderColor: ["#638bae"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: `INDSÆT TEXT HER`,
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
      {/* <button
        onClick={() => {
          setHour((hour) => {
            hour.slice(hour.indexOf("17"), hour.indexOf("21"));
            console.log(hour);
          });
          setQueueAverage((queueAverage) => {
            queueAverage.slice(
              queueAverage.indexOf("17"),
              queueAverage.indexOf("21")
            );
          });
        }}
      >
        Interval
      </button> */}
      <Line data={data} options={options} />
      <Bar data={data} options={options} />
    </>
  );
}

// fetch data fra restdb: https://foobar-edfd.restdb.io/rest/foobar-queue?h={%22$groupby%22:[%22$HOUR:date%22],%20%22$aggregate%22:%20[%22AVG:length%22]}
// api-key

// function fetchData() {
//   fetch(
//     "https://foobar-edfd.restdb.io/rest/foobar-queue?h={%22$groupby%22:[%22$HOUR:date%22],%20%22$aggregate%22:%20[%22AVG:length%22]}"
//   )
//     .then((res) => res.json)
//     .then((data) => console.log(data));
// }

//console.log("QueueByHour Running");

// Hvornår skal den fetche data? Evt når siden loader:

//ikke behov for live opdatering i dette tilfælde?

// Bar-chart
