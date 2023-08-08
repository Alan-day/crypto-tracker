import React, { useEffect, useState } from "react";
import Graph from "../../Graph/Graph";
import "./Stockpage.scss";
import Sidebar from "./../../Sidebar/Sidebar";
import sidebarData from "./../../data.json";
import Searchbar from "../../Searchbar/Searchbar";
import datagram from "./../../dropdwon.json";
import stockyData from "./../../data.json";
import { elements } from "chart.js";

const Stockpage = ({ handleGraph }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [dropdown, setDropdown] = useState("");
  const isStock = true;
  const [newData, setNewData] = useState(stockyData);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("IBM");

  const label = Object.entries(newData["Meta Data"])
    .map(([key, value]) => ({ key, value }))
    .filter((item) => item.key === "2. Symbol")
    .map((item) => ({
      Symbol: item.value,
      newData,
    }))
    .slice(0, 2);

  const timeSeriesArrayToday = Object.entries(newData["Time Series (Daily)"])
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 1);

  const timeSeriesArray = Object.entries(newData["Time Series (Daily)"])
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 7);

  const label_header = label.map((dataPoint) => dataPoint.Symbol);
  const labels = timeSeriesArray.map((dataPoint) => dataPoint.date);
  const values = timeSeriesArray.map((dataPoint) => dataPoint["4. close"]);
  const maxValue = timeSeriesArrayToday["2. high"];
  const minValue = timeSeriesArrayToday["3. low"];

  console.log(label_header);
  const data = {
    labels,
    label,
    values,
    minValue,
    maxValue,
  };

  const handleInputChange = (event) => {
    const value = event.target.value.trim().toUpperCase();
    setSearchPhrase(value);
    // setFilteredOptions(
    //   options.filter((option) => option.toLowerCase().startsWith(value))
    // );
  };

  const handleOptionClick = (option) => {
    setSearchPhrase(option);
    setSelectedOption(option);
    setFilteredOptions([]);
  };

  const resultsData = async () => {
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchPhrase}&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const dropdownData = await response.json();
    setDropdown(dropdownData);
  };

  const newGraph = async () => {
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${selectedOption}&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const incomingData = await response.json();
    //setNewData(incomingData); // only used when got API access
  };

  useEffect(() => {
    resultsData();

    if (dropdown && dropdown.bestMatches && dropdown.bestMatches.length > 0) {
      const symbolValues = dropdown.bestMatches.map(
        (match) => match["1. symbol"]
      );
      setFilteredOptions(symbolValues);
    }
    newGraph();
  }, [selectedOption, searchPhrase]);

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

  console.log(dropdown);
  return (
    <div className="stockpage-container">
      <div className=" stockpage-container__searchbar">
        <Searchbar
          handleInputChange={handleInputChange}
          inputValue={searchPhrase}
          handleOptionClick={handleOptionClick}
          filteredOptions={filteredOptions}
          handleGraph={handleGraph}
        />
      </div>
      <Sidebar sidebarData={timeSeriesArrayToday} isStock={isStock} />
      <h1>{label_header}</h1>
      <Graph data={data} dataset={dataset} />
    </div>
  );
};

export default Stockpage;
