import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Pageswitch from "./Pageswitch/Pageswitch";
import CryptoPage from "./pages/Cryptopage/CryptoPage";
import Stockpage from "./pages/Stockpage/Stockpage";

function App() {


  return (
    <Router>
  
      <div className="App">
        <h1>_nology trader</h1>

        <Pageswitch
       
        />

        <Routes>
          <Route path="/crypto" element={<CryptoPage />} />
          <Route path="/" element={<Stockpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
