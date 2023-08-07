import React from "react";
import Graph from "../../Graph/Graph";
import Sidebar from "../../Sidebar/Sidebar";
import sidebarData from "./../../cryptoData.json";

const CryptoPage = ({ data }) => {
  const isStock = false;

  const dataset = {
    labels: data.cryptoLabels,
    datasets: [
      {
        label: data.cryptoLabels,
        data: data.cryptoValues,
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const timeSeriesArrayToday = Object.entries(
    sidebarData["Time Series (Digital Currency Daily)"]
  )
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 1);

  console.log(timeSeriesArrayToday);

  return (
    <>
      <Graph data={data} dataset={dataset} />
      <Sidebar sidebarData={timeSeriesArrayToday} isStock={isStock} />

    </>
  );
};

export default CryptoPage;
