import React, { useState } from "react";

const Searchbar = ({
  handleInputChange,
  handleOptionClick,
  inputValue,
  filteredOptions,
  handleGraph,
}) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search"
      />
      {filteredOptions.length > 0 && (
        <div className="dropdown-content">
          {filteredOptions.map((option) => (
            <div key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
      <button onClick={handleGraph}>Submit</button>
    </div>
  );
};

export default Searchbar;
