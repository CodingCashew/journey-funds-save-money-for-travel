import React from "react";
// import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function PieChart({expenses}: any) {
  //   const data = {
  //     labels: ['Red', 'Orange', 'Blue'],
  //     // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  //     datasets: [
  //         {
  //           label: 'Popularity of colours',
  //           data: [55, 23, 96],
  //           backgroundColor: [
  //             'red'
  //             'blue'
  //             'green'
  //           ],
  //           borderWidth: 1,
  //         }
  //     ]
  // }
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple', 'orange'],
        borderColor: "white",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
