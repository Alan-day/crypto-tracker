import React, { useEffect, useState } from "react";
import Graph from "../../Graph/Graph";
import "./Stockpage.scss";
import Sidebar from "./../../Sidebar/Sidebar";
import sidebarData from "./../../data.json";
import Searchbar from "../../Searchbar/Searchbar";
import datagram from "./../../dropdwon.json";

const Stockpage = ({ data, handleGraph}) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [dropdown, setDropdown] = useState("");
  const isStock = true;
  const [symbols, setSymbols] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("IBM");


  
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



  const timeSeriesArrayToday = Object.entries(
    sidebarData["Time Series (Daily)"]
  )
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 1);
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
