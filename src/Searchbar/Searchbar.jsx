import React, { useState } from "react";

const Searchbar = ({ options }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value.trim().toLowerCase();
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) => option.toLowerCase().startsWith(value))
    );
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setFilteredOptions([]);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
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
    </div>
  );
};

export default Searchbar;
