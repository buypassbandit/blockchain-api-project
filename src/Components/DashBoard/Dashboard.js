import React, { useState, useEffect, useCallback } from "react";
import styles from "./Dashboard.module.css";
import errorImage from "../../Assets/error.png";

//Dashboard Component
const Dashboard = () => {
  //State to update The Fetched CryptoCurrency Data
  const [filteredData, setFilteredData] = useState([]);
  //State to Update Any Fetch Errors
  const [error, setError] = useState();

  //Using useCallback because of useEffect dependency
  const dataFetcher = useCallback(async () => {
    //Fetch API Function
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc"
    );
    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    //Fetched response from the specific url
    const responseData = await response.json();

    const data = [];

    //Loop through response data to assign it to new name and append it to new data array
    for (const key in responseData) {
      data.push({
        id: Math.random().toFixed(10),
        name: responseData[key].name,
        symbol: responseData[key].symbol,
        image: responseData[key].image,
        low: responseData[key].low_24h,
        high: responseData[key].high_24h,
        price: responseData[key].current_price,
        marketCap: responseData[key].market_cap,
        circulatingSupply: responseData[key].circulating_supply,
        volume: responseData[key].total_volume,
        priceChange: responseData[key].market_cap_change_percentage_24h,
      });
    }
    //Filtered data updating through state updating function
    setFilteredData(data);
  }, []);

  //useEffect to run the API Function every second so that it can fetch data every secons
  useEffect(() => {
    const interval = setInterval(() => {
      dataFetcher().catch((error) => {
        setError(error.message);
      });
    }, 5000);

    //Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, [dataFetcher]);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.noteFlex}>
          <div className={styles.noteDescription}>
            <img className={styles.noteLogo} src={errorImage} alt="noteLogo" />
            <h2>
              Note: Data may delay or vary because of Response Time & API Limit
              from Backend
            </h2>
          </div>
        </div>

        {!error ? (
          <div id={"dashboard"} className={styles.dashboard}>
            <h1>Dashboard</h1>
            <div className={styles.dashboardHeading}>
              <h2>Name</h2>
              <h2>Price (INR)</h2>
              <h2>Price Change (24hrs)</h2>
              <h2>Low</h2>
              <h2>High</h2>
              <h2>Market Cap</h2>
              <h2>Circulating Supply</h2>
              <h2>Volume (24hrs)</h2>
            </div>
            {/* Mapping Filtered data from the state to JSX  */}
            {filteredData.map((value) => {
              return (
                <div
                  key={value.id}
                  id={value.id}
                  className={styles.dashboardValues}
                >
                  <h3>
                    {value.name}{" "}
                    <span className={styles.symbolSpan}>{value.symbol}</span>
                  </h3>
                  <img
                    className={styles.coinImage}
                    src={value.image}
                    alt="coins"
                  />

                  <h3>{value.price}</h3>
                  <h3
                    className={
                      value.priceChange < 0
                        ? styles.negativeColor
                        : styles.positiveColor
                    }
                  >
                    {value.priceChange}
                  </h3>
                  <h3>{value.low}</h3>
                  <h3>{value.high}</h3>
                  <h3>{value.marketCap}</h3>
                  <h3>{value.circulatingSupply}</h3>
                  <h3>{value.volume}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.error}>
            <img
              className={styles.errorLogo}
              src={errorImage}
              alt="errorLogo"
            />
            <h2 className={styles.errorText}>{error}....</h2>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
