import React from "react";

const ForecastItem = ({ item }) => {
  const itemDate = new Date(item.dt * 1000);
  console.log(item);

  return (
    <ul>
      <li>Hour: {itemDate.getHours()}</li>
      <li>Temperature (Max): {item.main.temp_max} C </li>
      <li>Temperature (Min): {item.main.temp_min} C </li>
    </ul>
  );
};

export default ForecastItem;
