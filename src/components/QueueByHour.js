import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

export default function QueueByHour() {
  const [queueAverage, setQueueAverage] = useState([]);
  const [hour, setHour] = useState([]);

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
          handleData(data);
        });
    }
    fetchData();
  }, []);

  function handleData(data) {
    for (const property in data) {
      console.log(`${property}: ${data[property]["AVG length"]}`);
      setQueueAverage((queueAverage) =>
        queueAverage.concat(data[property]["AVG length"].toFixed(2))
      );
      setHour((hour) => hour.concat(property));
    }
  }

  const data = {
    labels: hour,
    datasets: [
      {
        label: "Average by hour",
        data: queueAverage,
        backgroundColor: "rgba(99, 139, 174, 1)",
        borderColor: ["#638bae"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: `Queue by hour`,
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
      <Bar data={data} options={options} />
    </>
  );
}
