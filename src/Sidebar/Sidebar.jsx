import React from "react";
import { useEffect, useState } from "react";
import data from "./../data.json";
import "./Sidebar.scss";

const Sidebar = () => {
  const [stockData, setStockData] = useState(data);

  //   const APIdata = async () => {
  //     const url = `https://www.alphavantage.co./query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo`;
  //     const response = await fetch(url);
  //     const stock = await response.json();
  //     setStockData(stock);
  //   };

  const timeSeriesArrayToday = Object.entries(data["Time Series (Daily)"])
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 1);

  const timeSeriesArray = Object.entries(data["Time Series (Daily)"])
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 7);

    
  //   const metaData = Object.entries(data["Meta Data"])
  //     .map(([key, value]) => ({ key, value })) // Create an array of objects with key and value
  //     .filter((item) => item.key === "2. Symbol") // Filter the array to get only the "Symbol" entry
  //     .map((item) => ({
  //       Symbol: item.value, // Extract the value (symbol) from the filtered item
  //       data,
  //     }))
  //     .slice(0, 2);
  //   console.log(metaData);

  return (
    <div className="sidebar-container">
      {timeSeriesArrayToday.map((dataPoint) => (
        <div key={dataPoint.date}>
          <h1>{dataPoint.date}</h1>
          <h1> Open {dataPoint["1. open"]}</h1>
          <h1> High {dataPoint["2. high"]}</h1>
          <h1> Low {dataPoint["3. low"]}</h1>
          <h1>Close {dataPoint["4. close"]}</h1>
          <h1>Volume {dataPoint["5. volume"]}</h1>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
