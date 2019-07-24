import React from "react";
import Forecast from "./Forecast.js";
import CityInfo from "./CityInfo.js";
import CurrentWeather from "./CurrentWeather.js";
import UVInfo from "./UVInfo.js";

const Results = ({ data, resultsLoaded, fetchFailed }) => {
  console.log(data);

  if (resultsLoaded && !fetchFailed) {
    return (
      <>
        <CityInfo />
        <CurrentWeather />
        <Forecast forecast={data.list} />
        <UVInfo />
      </>
    );
  } else if (fetchFailed) {
    return (
      <div className="results">
        <h4>There is no data for this city. Try different search query </h4>
      </div>
    );
  } else {
    return (
      <div className="results">
        <h4>Select city to see forecast </h4>
      </div>
    );
  }
};

export default Results;
