import React, { useState, useEffect } from "react";

const UVInfo = ({ cityCoord, units, APPID }) => {
  const [isLoading, setisLoading] = useState(true);
  const [fetchedData, setfetchedData] = useState("");

  useEffect(() => {
    console.log("*****UV*****");
    const fetchURL = new URL("http://api.openweathermap.org/data/2.5/uvi");
    const params = { ...cityCoord, ...units, ...APPID };
    fetchURL.search = new URLSearchParams(params);
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => setfetchedData(data))
      .then(() => setisLoading(false))
      .catch(() => console.log("fetch failed"));
  }, [cityCoord]);

  if (isLoading) {
    return (
      <>
        <h2>UV Info</h2>
        <p>Data are loading...</p>
      </>
    );
  } else {
    return (
      <>
        <h2>UV Info</h2>
        <p>UV value: {fetchedData.value}</p>
      </>
    );
  }
};

export default UVInfo;
