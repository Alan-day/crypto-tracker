import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Pageswitch from "./Pageswitch/Pageswitch";
import CryptoPage from "./pages/Cryptopage/CryptoPage";
import Stockpage from "./pages/Stockpage/Stockpage";
import StockData from "./StockData";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [stockData, setStockData] = useState("");

  // const APIdata = async () => {
  //   const url = `https://www.alphavantage.co./query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.REACT_APP_API_KEY}`;
  //   const response = await fetch(url);
  //   const stock = await response.json();
  //   setStockData(stock);
  // };

  // useEffect(() => {
  //   APIdata();
  // }, []);

  const apiData = {
    labels: [stockData, "Tuesday", "Wednesday"],
    sales: [3, 6, 9],
    label: stockData.MetaData,
    minValue: 3,
    maxValue: 9,
  };

  return (
    <Router>
      <div className="App">
        <h1>_nology trader</h1>

        <Pageswitch />
        <StockData />

        <Sidebar />
        <Routes>
          <Route path="/crypto" element={<CryptoPage />} />
          <Route path="/" element={<Stockpage apiData={apiData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
