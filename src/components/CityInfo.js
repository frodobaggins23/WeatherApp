import React from "react";

const CityInfo = ({ city }) => {
  return (
    <>
      <h2>{city.name}</h2>
      <img src={`https://www.countryflags.io/${city.country}/shiny/32.png`} />
    </>
  );
};

export default CityInfo;
