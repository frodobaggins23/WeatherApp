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
    const fetchURL = new URL("http://api.openweathermap.org/data/2.5/forecast");
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

  console.log(fetchedData);
  return (
    <div className="App">
      <div className="App__logo">
        <h1>ForecastMe</h1>
        <p>Reliable weather forecast just one click away...</p>
      </div>
      <h4>Reliable weather forecast just one click away...</h4>
      <Locator fetchData={fetchData} />
      <Results
        data={fetchedData}
        units={units}
        APPID={APPID}
        resultsLoaded={resultsLoaded}
        fetchFailed={fetchFailed}
      />
    </div>
  );
}

export default App;
