import React from "react";
import Graph from "../../Graph/Graph";
import "./Stockpage.scss"



const Stockpage = ({data}) => {






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



  return <div>Stockpage



  <Graph data={data} dataset={dataset} />;
  </div>;
};

export default Stockpage;
