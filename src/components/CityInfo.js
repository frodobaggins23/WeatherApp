import React from "react";

const CityInfo = ({ city }) => {
  return (
    <>
      <h1>{city.name}</h1>
      <img src={`https://www.countryflags.io/${city.country}/shiny/32.png`} />
    </>
  );
};

export default CityInfo;
