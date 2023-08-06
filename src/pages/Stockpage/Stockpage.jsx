import React from "react";
import Graph from "../../Graph/Graph";
import "./Stockpage.scss";
import Sidebar from "./../../Sidebar/Sidebar";
import sidebarData from "./../../data.json";

const Stockpage = ({ data }) => {

  const isStock = true;
  const dataset = {
    labels: data.labels,
    datasets: [
      {
        label: data.label,
        data: data.values,
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const timeSeriesArrayToday = Object.entries(
    sidebarData["Time Series (Daily)"]
  )
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 1);
  
  return (
    <div>
      Stockpage
      <Sidebar sidebarData={timeSeriesArrayToday} isStock={isStock} />
      <Graph data={data} dataset={dataset} />;
    </div>
  );
};

export default Stockpage;
