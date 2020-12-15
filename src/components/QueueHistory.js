import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function QueueHistory({ queue, tick }) {
  //HOOKS
  const [queueLength, setQueueLength] = useState([]);
  const [labelTime, setLabelTime] = useState([]);

  //useEffect kaldes ved første render og afhænger herefter af tick (defineret i App.js)
  //tick bruges for at sikre en regelmæssig/lineær opdatering af data.
  useEffect(() => {
    //Her bruges remainder operator til at opdatere data, hver femte gang, App.js fetcher data
    if (tick % 5 === 0) {
      setQueueLength((queueLength) =>
        queueLength.length === 15
          ? queueLength.slice(1)
          : [...queueLength, queue.length]
      );
      setLabelTime((labelTime) =>
        labelTime.length === 15
          ? labelTime.slice(1)
          : [...labelTime, new Date(Date.now()).toString().split(" ")[4]]
      );
      //Poster nuværende kølængde og tidspunkt til restdb (Bruges i QueueByHour komponent)
      function post(queue) {
        //Data object, der postes
        const data = {
          length: queue.length,
          date: new Date(Date.now())
            .toString() // ""
            .split(" ") // ["",""]
            [4] // [12:43:21]
            .substring(0, 5), // 12:43
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
      //udkommenteret, da der er data i databasen til at vise funktionaliteten
      //post(queue);
    }
  }, [tick]);

  //data og options objects bruges til at bygge chart vha. chartjs
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
    maintainAspectRation: false,
    responsive: true,
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

  return <Line data={data} options={options} />;
}
