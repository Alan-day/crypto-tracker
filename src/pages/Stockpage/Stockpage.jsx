import React, { useEffect, useState } from "react";
import Graph from "../../Graph/Graph";
import "./Stockpage.scss";
import Sidebar from "./../../Sidebar/Sidebar";
import sidebarData from "./../../data.json";
import Searchbar from "../../Searchbar/Searchbar";
import datagram from "./../../dropdwon.json";
import stockyData from "./../../data.json";

const Stockpage = ({ handleGraph }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [dropdown, setDropdown] = useState("");
  const isStock = true;
  const [symbols, setSymbols] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("IBM");

  const label = Object.entries(stockyData["Meta Data"])
    .map(([key, value]) => ({ key, value }))
    .filter((item) => item.key === "2. Symbol")
    .map((item) => ({
      Symbol: item.value,
      stockyData,
    }))
    .slice(0, 2);

  const timeSeriesArrayToday = Object.entries(stockyData["Time Series (Daily)"])
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 1);

  const timeSeriesArray = Object.entries(stockyData["Time Series (Daily)"])
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 7);

  const labels = timeSeriesArray.map((dataPoint) => dataPoint.date);
  const values = timeSeriesArray.map((dataPoint) => dataPoint["4. close"]);
  const maxValue = timeSeriesArrayToday["2. high"];
  const minValue = timeSeriesArrayToday["3. low"];


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
    setFilteredOptions([]);
  };

  const resultsData = async () => {
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchPhrase}&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const dropdownData = await response.json();
    setDropdown(dropdownData);
  };

  useEffect(() => {
    resultsData();

    if (dropdown && dropdown.bestMatches && dropdown.bestMatches.length > 0) {
      const symbolValues = dropdown.bestMatches.map(
        (match) => match["1. symbol"]
      );
      setFilteredOptions(symbolValues);
    }
  }, [searchPhrase]);

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
    <div>
      Stockpage
      <Searchbar
        handleInputChange={handleInputChange}
        inputValue={searchPhrase}
        handleOptionClick={handleOptionClick}
        filteredOptions={filteredOptions}
        handleGraph={handleGraph}
      />
      <Sidebar sidebarData={timeSeriesArrayToday} isStock={isStock} />
      <Graph data={data} dataset={dataset} />;
    </div>
  );
};

export default Stockpage;
