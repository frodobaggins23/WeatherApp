import React, { useState } from "react";
import "./App.scss";
import Locator from "./components/Locator.js";
import Results from "./components/Results.js";

function App() {
  const [resultsLoaded, setresultsLoaded] = useState(false);
  const [fetchedData, setfetchedData] = useState("");
  const [fetchFailed, setfetchFailed] = useState(false);
  const [units, setunits] = useState({ units: "metric" });
  const [APPID, setAPPID] = useState({
    APPID: "07a3607ed9bf985e730a1f342b737165"
  });

  const fetchData = query => {
    const fetchURL = new URL(
      "https://api.openweathermap.org/data/2.5/forecast"
    );
    const params = { ...query, ...units, ...APPID };

    fetchURL.search = new URLSearchParams(params);
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => {
        setfetchedData(data);
        setresultsLoaded(true);
        setfetchFailed(false);
      })
      .catch(() => setfetchFailed(true));
  };

  !fetchFailed && fetchedData.cod == "404" && setfetchFailed(true);

  return (
    <div className="App">
      <div className="App__logo">
        <a href="/">
          <img src={require("./img/forecastMe.svg")} alt="Project logo" />
        </a>
        <a href="/">
          <h1>ForecastMe</h1>
        </a>
      </div>

      <Locator fetchData={fetchData} />

      <div className="App__resultsContainer">
        {!fetchFailed && (
          <Results
            data={fetchedData}
            units={units}
            APPID={APPID}
            resultsLoaded={resultsLoaded}
            fetchFailed={fetchFailed}
          />
        )}
        {fetchFailed && (
          <div className="error-message">
            <img src={require("./img/error.svg")} alt="" />
            <h3>Error fetching data. Did not you mispell the city name?</h3>
          </div>
        )}
      </div>
      <div className="App__footer">
        <p>created by Jakub Čejchan for dear guys at Inventi</p>
        <p>
          this app is using{" "}
          <a href="https://openweathermap.org/" target="_blanks">
            openweathermaps
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
