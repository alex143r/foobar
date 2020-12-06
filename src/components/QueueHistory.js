import React from "react";
import { Line } from "react-chartjs-2";

export default function QueueHistory({ queue }) {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Q trend",
        data: ["0", "2", "3", "6", "8", "10"],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  const queueData = data.labels;
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  if (queue !== undefined) {
    const prevNr = queueData[queueData.length - 1];

    if (prevNr !== queue.length) {
      queueData.push(queue.length);
    }
  }

  return (
    <>
      {queue !== undefined ? (
        <>
          <Line data={data} options={options} />
        </>
      ) : null}
    </>
  );
}
