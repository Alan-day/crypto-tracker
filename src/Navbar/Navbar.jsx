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
            <li className="navbar-container--1">APPL: {appleData}</li>
            <li className="navbar-container--2">IBM: {ibmData}</li>
            <li className="navbar-container--3">MSFT: {microsoftData}</li>
            <li className="navbar-container--4">AMZN: {amazonData}</li>
            <li className="navbar-container--5">GOOGL: {googleData}</li>
            <li className="navbar-container--6">TESL: {teslaData}</li>
            <li className="navbar-container--1">APPL: {appleData}</li>
            <li className="navbar-container--2">IBM: {ibmData}</li>
            <li className="navbar-container--3">MSFT: {microsoftData}</li>
            <li className="navbar-container--4">AMZN: {amazonData}</li>
            <li className="navbar-container--5">GOOGL: {googleData}</li>
            <li className="navbar-container--6">TESL: {teslaData}</li>
            <li className="navbar-container--1">APPL: {appleData}</li>
            <li className="navbar-container--2">IBM: {ibmData}</li>
            <li className="navbar-container--3">MSFT: {microsoftData}</li>
            <li className="navbar-container--4">AMZN: {amazonData}</li>
            <li className="navbar-container--5">GOOGL: {googleData}</li>
            <li className="navbar-container--6">TESL: {teslaData}</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
