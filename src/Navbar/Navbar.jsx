import React from "react";
import "./Navbar.scss";
import { useState, useEffect } from "react";

const Navbar = ({
  appleData,
  ibmData,
  microsoftData,
  amazonData,
  googleData,
  teslaData,
}) => {
  return (
    <>
      <div className="navbar-container">
        <nav>
          <ul>
            <li>APPL:{appleData}</li>
            <li>IBM:{ibmData}</li>
            <li>MSFT:{microsoftData}</li>
            <li>AMZN:{amazonData}</li>
            <li>GOOGL:{googleData}</li>
            <li>TESL:{teslaData}</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
