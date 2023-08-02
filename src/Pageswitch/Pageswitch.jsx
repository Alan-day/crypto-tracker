import React from "react";
import { Link } from "react-router-dom";

const Pageswitch = ({ handleStockChange, handleCryptoChange }) => {
  return (
    <div className="pageswitch-container">
      <Link to="/crypto">
        <button className="pageswitch-container__button">Cryptocurrency</button>
      </Link>
      <Link to="/">
        <button className="pageswitch-container__button">Stocks</button>
      </Link>
    </div>
  );
};

export default Pageswitch;
