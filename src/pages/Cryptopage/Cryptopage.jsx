import React from "react";
import Graph from "../../Graph/Graph";

const CryptoPage = ({ data }) => {
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

  return (
    <>
      <Graph data={data} dataset={dataset} />

      <div>CryptoPage</div>
    </>
  );
};

export default CryptoPage;
