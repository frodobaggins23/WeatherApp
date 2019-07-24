import React from "react";
import Forecast from "./Forecast.js";

const Results = ({ data, resultsLoaded }) => {
  // console.log(data);

  if (resultsLoaded) {
    return <Forecast data={data} />;
  } else {
    return (
      <div className="results">
        <h2>No results </h2>
      </div>
    );
  }
};

export default Results;
