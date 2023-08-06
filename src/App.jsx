import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Pageswitch from "./Pageswitch/Pageswitch";
import CryptoPage from "./pages/Cryptopage/CryptoPage";
import Stockpage from "./pages/Stockpage/Stockpage";
import StockData from "./StockData";
import Navbar from "./Navbar/Navbar";

import data from "./data.json";
import crypto from "./cryptoData.json";
function App() {
  const [stockData, setStockData] = useState("");
  const [ibmInfo, setIbm] = useState("");
  const [googleInfo, setGoogle] = useState("");
  const [amazonInfo, setAmazon] = useState("");
  const [teslaInfo, setTesla] = useState("");
  const [microsoftInfo, setMicrosoft] = useState("");
  const [appleInfo, setApple] = useState("");

  console.log(crypto);

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

  const label = Object.entries(data["Meta Data"])
    .map(([key, value]) => ({ key, value }))
    .filter((item) => item.key === "2. Symbol")
    .map((item) => ({
      Symbol: item.value,
      data,
    }))
    .slice(0, 2);

  const labels = timeSeriesArray.map((dataPoint) => dataPoint.date);
  const values = timeSeriesArray.map((dataPoint) => dataPoint["4. close"]);
  const maxValue = timeSeriesArrayToday["2. high"];
  const minValue = timeSeriesArrayToday["3. low"];

  const cryptoTimeSeriesArrayToday = Object.entries(
    crypto["Time Series (Digital Currency Daily)"]
  )
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 1);

  const cryptoTimeSeriesArray = Object.entries(
    crypto["Time Series (Digital Currency Daily)"]
  )
    .map(([date, values]) => ({
      date,
      ...values,
    }))
    .slice(0, 7);

  const cryptoLabels = cryptoTimeSeriesArray.map((dataPoint) => dataPoint.date);
  const cryptoValues = cryptoTimeSeriesArray.map(
    (dataPoint) => dataPoint["4a. close (GBP)"]
  );
  const cryptoMaxValue = cryptoTimeSeriesArrayToday["2a. high (GBP)"];
  const cryptoMinValue = cryptoTimeSeriesArrayToday["3a. low (GBP)"];

  const apiData = {
    labels,
    label,
    values,
    minValue,
    maxValue,
  };

  const cryptoApiData = {
    cryptoLabels,
    label,
    cryptoValues,
    cryptoMinValue,
    cryptoMaxValue,
  };

  const APIdata = async () => {
    const url = `https://www.alphavantage.co./query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const stock = await response.json();
    setStockData(stock);
  };

  const appleData = async () => {
    const url = `https://www.alphavantage.co./query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const stock = await response.json();
    setApple(stock);
  };

  const ibmData = async () => {
    const url = `https://www.alphavantage.co./query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const stock = await response.json();
    setIbm(stock);
  };

  const googleData = async () => {
    const url = `https://www.alphavantage.co./query?function=TIME_SERIES_DAILY&symbol=GOOGL&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const stock = await response.json();
    setGoogle(stock);
  };

  const amazonData = async () => {
    const url = `https://www.alphavantage.co./query?function=TIME_SERIES_DAILY&symbol=AMZN&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const stock = await response.json();
    setAmazon(stock);
  };

  const microsoftData = async () => {
    const url = `https://www.alphavantage.co./query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const stock = await response.json();
    setMicrosoft(stock);
  };

  const teslaData = async () => {
    const url = `https://www.alphavantage.co./query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const stock = await response.json();
    setTesla(stock);
  };
  useEffect(() => {}, []);

  // const ibm = Object.entries(ibmData["Time Series (Daily)"])
  //   .map(([date, values]) => ({
  //     date,
  //     ...values,
  //   }))
  //   .slice(0, 1);

  return (
    <Router>
      <div className="App">
        <h1>_nology trader</h1>
        <Navbar />
        <Pageswitch />

   
        <Routes>
          <Route path="/crypto" element={<CryptoPage data={cryptoApiData} />} />
          <Route path="/" element={<Stockpage data={apiData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
