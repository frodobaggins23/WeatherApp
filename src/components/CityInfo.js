import React from "react";

const CityInfo = ({ city }) => {
  return (
    <>
      <h2>Location info</h2>
      <h5>{city.name}</h5>
      <h5>{city.country}</h5>
      <h5>
        Lat: {city.coord.lat} Lon: {city.coord.lon}
      </h5>
      <a href="#">Show on map</a>
    </>
  );
};

export default CityInfo;
