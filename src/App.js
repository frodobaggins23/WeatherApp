import React, { useState } from "react";
import "./App.scss";
import Locator from "./components/Locator.js";
import Results from "./components/Results.js";

function App() {
  const [resultsLoaded, setresultsLoaded] = useState(false);
  const [fetchedData, setfetchedData] = useState("");
  const [fetchFailed, setfetchFailed] = useState(false);

  !fetchFailed && fetchedData.cod == "404" && setfetchFailed(true);

  console.log(fetchedData);
  return (
    <div className="App">
      <h1>ForecastMe</h1>
      <h4>Reliable weather forecast just one click away...</h4>
      <Locator
        fetchHandler={data => {
          setfetchedData(data);
          setresultsLoaded(true);
          setfetchFailed(false);
        }}
        setfetchFailed={setfetchFailed}
      />
      <Results
        data={fetchedData}
        resultsLoaded={resultsLoaded}
        fetchFailed={fetchFailed}
      />
    </div>
  );
}

export default App;
