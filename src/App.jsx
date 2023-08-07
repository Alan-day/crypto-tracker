import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Pageswitch from "./Pageswitch/Pageswitch";
import CryptoPage from "./pages/Cryptopage/CryptoPage";
import Stockpage from "./pages/Stockpage/Stockpage";

import Navbar from "./Navbar/Navbar";

import Searchbar from "./Searchbar/Searchbar";

function App() {
  const [stockData, setStockData] = useState("£123.2");
  const [ibmInfo, setIbm] = useState("£234.5");
  const [googleInfo, setGoogle] = useState("£4324.4");
  const [amazonInfo, setAmazon] = useState("£100.5");
  const [teslaInfo, setTesla] = useState("£3244.6");
  const [microsoftInfo, setMicrosoft] = useState("£43.5");
  const [appleInfo, setApple] = useState("£42.4");
  const [stockGraph, setStockGraph] = useState("");

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

  // const ibm = Object.entries(ibmData["Time Series (Daily)"])
  //   .map(([date, values]) => ({
  //     date,
  //     ...values,
  //   }))
  //   .slice(0, 1);

  return (
    <Router>
      <div className="App">
        <h1 className="header">_nology trader</h1>
        <Navbar
          appleData={appleInfo}
          teslaData={teslaInfo}
          ibmData={ibmInfo}
          microsoftData={microsoftInfo}
          amazonData={amazonInfo}
          googleData={googleInfo}
        />
        <div className="pageswitch">
          <Pageswitch />
        </div>
        <Routes>
          <Route path="/crypto" element={<CryptoPage />} />
          <Route path="/" element={<Stockpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
