import React from "react";

const ForecastItem = ({ item }) => {
  const itemDate = new Date(item.dt * 1000);
  const hourPrefixer = itemDate.getHours() < 10 ? "0" : "";

  return (
    <tr>
      <td>
        {hourPrefixer}
        {itemDate.getHours()}:00
      </td>
      <td>{Math.round(item.main.temp)} °C </td>
      <td className="hideOnMobile">
        <img
          src={`http://openweathermap.org/img/wn/${
            item.weather[0].icon
          }@2x.png`}
          alt=""
        />
      </td>
      <td>{item.weather[0].description} </td>

      <td className="hideOnMobile">{Math.round(item.main.pressure)} hPa </td>
    </tr>
  );
};

export default ForecastItem;
