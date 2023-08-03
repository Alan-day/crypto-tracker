import React from "react";
import Graph from "../../Graph/Graph";
import "./Stockpage.scss"



const Stockpage = ({apiData}) => {
  return <div>Stockpage

  <Graph data={apiData} />;
  </div>;
};

export default Stockpage;
