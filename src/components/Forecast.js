import React from "react";
import ForecastItem from "./ForecastItem.js";

const Forecast = ({ data }) => {
  // console.log(data);

  const today = data.list.filter(item => {
    const itemDate = new Date(item.dt * 1000);
    const today = new Date();
    return itemDate.getDate() == today.getDate();
  });

  const tomorrow = data.list.filter(item => {
    const itemDate = new Date(item.dt * 1000);
    const today = new Date();
    return itemDate.getDate() == today.getDate() + 1;
  });

  return (
    <div className="results">
      <h2>{data.city.name}</h2>
      <h4>{data.city.country}</h4>
      <h6>Forecast for today</h6>
      {today.map((item, index) => {
        return <ForecastItem item={item} key={index} />;
      })}
      <h6>Forecast for tomorrow</h6>
      {tomorrow.map((item, index) => {
        return <ForecastItem item={item} key={index} />;
      })}
    </div>
  );
};

export default Forecast;
