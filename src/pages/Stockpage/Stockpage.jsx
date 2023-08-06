import React, { useState } from "react";
import Graph from "../../Graph/Graph";
import "./Stockpage.scss";
import Sidebar from "./../../Sidebar/Sidebar";
import sidebarData from "./../../data.json";
import Searchbar from "../../Searchbar/Searchbar";

const Stockpage = ({ data }) => {
  const [searchPhrase, setSearchPhrase] = useState("");


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

  const options = [];

 
  const timeSeriesArrayToday = Object.entries(
    sidebarData["Time Series (Daily)"]
  )
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 1);



  const resultsData = async () => {
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchPhrase}&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const dropdownData = await response.json();
    // setDropdownValue(dropdownData);
  };

  return (
    <div>
      Stockpage
      <Searchbar

        options={options}
      />
      <Sidebar
        sidebarData={timeSeriesArrayToday}
        isStock={isStock}
        inputValue={searchPhrase}
      />
      <Graph data={data} dataset={dataset} />;
    </div>
  );
};

export default Stockpage;
