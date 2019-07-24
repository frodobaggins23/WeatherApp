import React, { useState } from "react";
import Forecast from "./Forecast.js";
import CityInfo from "./CityInfo.js";
import CurrentWeather from "./CurrentWeather.js";
import UVInfo from "./UVInfo.js";

const Results = ({ data, resultsLoaded, fetchFailed }) => {
  console.log(data);
  const [cityID, setCityID] = useState("");
  const [cityCoord, setCityCoord] = useState({
    lat: "",
    lon: ""
  });

  if (resultsLoaded && cityID != data.city.id) {
    setCityID(data.city.id);
    setCityCoord({
      lat: data.city.coord.lat,
      lon: data.city.coord.lon
    });
  }

  if (resultsLoaded && !fetchFailed) {
    return (
      <>
        <CityInfo city={data.city} />
        <CurrentWeather id={cityID} />
        <Forecast forecast={data.list} />
        <UVInfo coord={cityCoord} />
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
