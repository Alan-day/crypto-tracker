import React from "react";
import { Line } from "react-chartjs-2";
import "./Graph.scss";
import {
  Chart as chartjs,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
} from "chart.js";

chartjs.register(
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend
);

const Graph = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday"],
    datasets: [
      {
        label: "sales of the week",
        data: [3, 6, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },

    scales: {
      y: {
        min: 3,
        max: 6,
      },
    },
  };

  return (
    <>
      <div className="graph-container">
        <Line data={data} options={options}></Line>
      </div>
    </>
  );
};

export default Graph;
