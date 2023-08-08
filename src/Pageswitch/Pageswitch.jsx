import React from "react";
import { Link } from "react-router-dom";

const Pageswitch = () => {
  return (
    <div className="pageswitch-container">
      <Link to="/crypto">
        <button className="pageswitch-container--button">Cryptocurrency</button>
      </Link>
      <Link to="/">
        <button className="pageswitch-container--button">Stocks</button>
      </Link>
    </div>
  );
};

export default Pageswitch;
