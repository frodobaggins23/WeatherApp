import React, { useState, useEffect } from "react";

const CurrentWeather = ({ id, units, APPID }) => {
  const [isLoading, setisLoading] = useState(true);
  const [fetchedData, setfetchedData] = useState("");

  useEffect(() => {
    console.log("*****fetching*****");
    const fetchURL = new URL("http://api.openweathermap.org/data/2.5/weather");
    const params = { ...id, ...units, ...APPID };
    fetchURL.search = new URLSearchParams(params);
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => setfetchedData(data))
      .then(() => setisLoading(false))
      .catch(() => console.log("fetch failed"));
  }, [id]);

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
        <p>Temp:{fetchedData.main.temp}</p>
        <p>Pressure:{fetchedData.main.pressure}</p>
      </>
    );
  }
};

export default CurrentWeather;