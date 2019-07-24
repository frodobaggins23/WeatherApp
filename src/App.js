import React, { useState, useEffect } from "react";
import "./App.scss";
import Locator from "./components/Locator.js";
import Results from "./components/Results.js";

function App() {
  const [api, setapi] = useState(null);
  const [resultsLoaded, setresultsLoaded] = useState(false);
  const [fetchedData, setfetchedData] = useState(null);

  console.log(fetchedData);
  return (
    <div className="App">
      <h1>ForecastMe</h1>
      <h4>Reliable weather forecast just one click away...</h4>
      <Locator
        fetchHandler={data => {
          setfetchedData(data);
          setresultsLoaded(true);
        }}
      />
      <Results data={fetchedData} resultsLoaded={resultsLoaded} />
    </div>
  );
}

export default App;
