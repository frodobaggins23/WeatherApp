import React, { useState } from "react";

const CurrentWeather = ({ id }) => {
  const [isLoading, setisLoading] = useState(true);

  if (isLoading) {
    return (
      <>
        <h2>Current Weather</h2>
        <p>Data are loading...</p>
      </>
    );
  } else {
    return (
      <>
        <h2>Current Weather</h2>
      </>
    );
  }
};

export default CurrentWeather;
