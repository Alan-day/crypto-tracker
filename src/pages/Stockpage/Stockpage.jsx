import React from "react";
import Graph from "../../Graph/Graph";
import "./Stockpage.scss"



const Stockpage = ({data}) => {
  return <div>Stockpage

  <Graph data={data} />;
  </div>;
};

export default Stockpage;
