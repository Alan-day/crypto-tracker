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

const Graph = ({ data }) => {
  const dataset = {
    labels: data.labels,
    datasets: [
      {
        label: data.label,
        data: data.sales,
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
        min: data.minValue,
        max: data.maxValue,
      },
    },
  };

  return (
    <>
      <div className="graph-container">
        <Line data={dataset} options={options}></Line>
      </div>
    </>
  );
};

export default Graph;
