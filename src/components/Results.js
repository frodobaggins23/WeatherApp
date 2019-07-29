import React, { useState } from "react";
import Forecast from "./Forecast.js";
import CityInfo from "./CityInfo.js";
import CurrentWeather from "./CurrentWeather.js";
import UVInfo from "./UVInfo.js";
import GoogleMapToggler from "./GoogleMapToggler.js";

const Results = ({ data, units, APPID, resultsLoaded, fetchFailed }) => {
  console.log(data);

  const [cityID, setCityID] = useState({ id: "" });
  const [cityCoord, setCityCoord] = useState({
    lat: "",
    lon: ""
  });

  if (resultsLoaded && cityID.id != data.city.id) {
    setCityID({ id: data.city.id });
    setCityCoord({
      lat: data.city.coord.lat,
      lon: data.city.coord.lon
    });
  }

  if (resultsLoaded && !fetchFailed) {
    return (
      <>
        <div className="cityInfo">
          <CityInfo city={data.city} />
        </div>
        <div className="cityMap">
          <GoogleMapToggler cityCoord={cityCoord} />
        </div>

        <div className="container">
          <div className="container__main">
            <Forecast forecast={data.list} city={data.city} />
          </div>
          <div className="container__secondary">
            <CurrentWeather id={cityID} units={units} APPID={APPID} />
            <UVInfo cityCoord={cityCoord} units={units} APPID={APPID} />
          </div>
        </div>
      </>
    );
  } else if (fetchFailed) {
    return (
      <div className="error">
        <h4>There is no data for this city. Try different search query </h4>
      </div>
    );
  } else {
    return (
      <div className="notLoaded">
        <img src={require("../img/weather.svg")} />
        <h4>Select city to see forecast </h4>
      </div>
    );
  }
};

export default Results;
