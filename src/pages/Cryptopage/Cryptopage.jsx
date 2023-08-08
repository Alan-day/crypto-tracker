import { React, useState, useEffect } from "react";
import Graph from "../../Graph/Graph";
import Sidebar from "../../Sidebar/Sidebar";
import sidebarData from "./../../cryptoData.json";
import cryptoData from "./../../cryptoData.json";
import Searchbar from "../../Searchbar/Searchbar";

const CryptoPage = ({ handleGraph }) => {
  const [newData, setNewData] = useState(cryptoData);
  const isStock = false;
  const [searchPhrase, setSearchPhrase] = useState("");
  const [dropdown, setDropdown] = useState("");
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

  const cryptoTimeSeriesArrayToday = Object.entries(
    cryptoData["Time Series (Digital Currency Daily)"]
  )
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 1);

  const cryptoTimeSeriesArray = Object.entries(
    cryptoData["Time Series (Digital Currency Daily)"]
  )
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 7);

  const cryptoLabel = Object.entries(cryptoData["Meta Data"])
    .map(([key, value]) => ({ key, value }))
    .filter((item) => item.key === "3. Digital Currency Name")
    .map((item) => ({
      Symbol: item.value,
      cryptoData,
    }))
    .slice(0, 3);

  const symbol = cryptoLabel.map((dataPoint) => dataPoint.Symbol);
  const cryptoLabels = cryptoTimeSeriesArray.map((dataPoint) => dataPoint.date);
  const cryptoValues = cryptoTimeSeriesArray.map(
    (dataPoint) => dataPoint["4a. close (GBP)"]
  );
  const cryptoMaxValue = cryptoTimeSeriesArrayToday["2a. high (GBP)"];
  const cryptoMinValue = cryptoTimeSeriesArrayToday["3a. low (GBP)"];

  const cryptoApiData = {
    cryptoLabels,
    // label,
    cryptoValues,
    cryptoMinValue,
    cryptoMaxValue,
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
    labels: cryptoApiData.cryptoLabels,
    datasets: [
      {
        label: cryptoApiData.cryptoLabels,
        data: cryptoApiData.cryptoValues,
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const timeSeriesArrayToday = Object.entries(
    sidebarData["Time Series (Digital Currency Daily)"]
  )
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 1);

  return (
    <>
      <Searchbar
        handleInputChange={handleInputChange}
        inputValue={searchPhrase}
        handleOptionClick={handleOptionClick}
        filteredOptions={filteredOptions}
        handleGraph={handleGraph}
      />
      <h1>{symbol}</h1>
      <Graph data={cryptoApiData} dataset={dataset} />

      <Sidebar sidebarData={timeSeriesArrayToday} isStock={isStock} />
    </>
  );
};

export default CryptoPage;
