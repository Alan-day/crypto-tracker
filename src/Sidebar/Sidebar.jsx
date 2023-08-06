import React from "react";
import { useEffect, useState } from "react";
import data from "./../data.json";
import "./Sidebar.scss";

const Sidebar = ({ sidebarData, isStock }) => {
  //   const APIdata = async () => {
  //     const url = `https://www.alphavantage.co./query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo`;
  //     const response = await fetch(url);
  //     const stock = await response.json();
  //     setStockData(stock);
  //   };

  return (
    <div className="sidebar-container">
    {isStock ? (
      sidebarData.map((dataPoint) => (
        <div key={dataPoint.date}>
          <h1>{dataPoint.date}</h1>
          <h1> Open {dataPoint["1. open"]}</h1>
          <h1> High {dataPoint["2. high"]}</h1>
          <h1> Low {dataPoint["3. low"]}</h1>
          <h1>Close {dataPoint["4. close"]}</h1>
          <h1>Volume {dataPoint["5. volume"]}</h1>
        </div>
      ))
    ) : (
      sidebarData.map((dataPoint) => (
        <div key={dataPoint.date}>
          <h1>{dataPoint.date}</h1>
          <h1> Open {dataPoint["1a. open (GBP)"]}</h1>
          <h1> High {dataPoint["2a. high (GBP)"]}</h1>
          <h1> Low {dataPoint["3a. low (GBP)"]}</h1>
          <h1>Close {dataPoint["4a. close (GBP)"]}</h1>
          <h1>Volume {dataPoint["5. volume"]}</h1>
        </div>
      ))
    )}
  </div>
);
};

export default Sidebar;
