import React from 'react';

const StockData = () => {
  const jsonData = {
    "Meta Data": {
      "1. Information": "Daily Time Series with Splits and Dividend Events",
      "2. Symbol": "IBM",
      "3. Last Refreshed": "2023-08-02",
      "4. Output Size": "Compact",
      "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
      "2023-08-02": {
        "1. open": "142.78",
        "2. high": "144.3",
        "3. low": "142.31",
        "4. close": "144.17",
        "5. adjusted close": "144.17",
        "6. volume": "4959381",
        "7. dividend amount": "0.0000",
        "8. split coefficient": "1.0"
      }
    }
  };

  const metaData = jsonData["Meta Data"];
  const dailyData = jsonData["Time Series (Daily)"]["2023-08-02"];

  return (
    <div>
      {/* Display Meta Data */}
      <h2>Meta Data</h2>
      <p>Information: {metaData["1. Information"]}</p>
      <p>Symbol: {metaData["2. Symbol"]}</p>
      <p>Last Refreshed: {metaData["3. Last Refreshed"]}</p>
      <p>Output Size: {metaData["4. Output Size"]}</p>
      <p>Time Zone: {metaData["5. Time Zone"]}</p>

      {/* Display Time Series (Daily) data for a specific date (e.g., 2023-08-02) */}
      <h2>Time Series (Daily) for 2023-08-02</h2>
      <p>Open: {dailyData["1. open"]}</p>
      <p>High: {dailyData["2. high"]}</p>
      <p>Low: {dailyData["3. low"]}</p>
      <p>Close: {dailyData["4. close"]}</p>
      <p>Adjusted Close: {dailyData["5. adjusted close"]}</p>
      <p>Volume: {dailyData["6. volume"]}</p>
      <p>Dividend Amount: {dailyData["7. dividend amount"]}</p>
      <p>Split Coefficient: {dailyData["8. split coefficient"]}</p>
    </div>
  );
};

export default StockData;
