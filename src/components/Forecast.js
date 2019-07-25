import React from "react";
import ForecastItem from "./ForecastItem.js";

const Forecast = ({ forecast, city }) => {
  const today = new Date();
  const daysInWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const getDayInWeek = day => {
    if (day < 7) {
      return daysInWeek[day];
    } else {
      return daysInWeek[0];
    }
  };

  const todayForecast = forecast.filter(item => {
    const itemDate = new Date(item.dt * 1000);
    return itemDate.getDate() == today.getDate();
  });

  const day1Forecast = forecast.filter(item => {
    const itemDate = new Date(item.dt * 1000);
    return itemDate.getDate() == today.getDate() + 1;
  });

  const day2Forecast = forecast.filter(item => {
    const itemDate = new Date(item.dt * 1000);
    return itemDate.getDate() == today.getDate() + 2;
  });

  return (
    <div className="main__results">
      <h2>2-day forecast</h2>
      <p>What the weather will be like for next two days in {city.name}</p>

      {todayForecast.length > 0 && todayForecast !== null && (
        <>
          <h4>
            Today {getDayInWeek(today.getDay())} {today.getDate()}.
            {today.getMonth()}
          </h4>
          <table>
            <thead>
              <th>Time</th>
              <th>Temperature</th>
              <th colSpan="2">Weather</th>
              <th className="hideOnMobile">Pressure</th>
            </thead>

            {todayForecast.map((item, index) => {
              return <ForecastItem item={item} key={index} />;
            })}
          </table>
        </>
      )}

      <h4>
        {getDayInWeek(today.getDay() + 1)} {today.getDate() + 1}.
        {today.getMonth()}{" "}
      </h4>

      <table>
        <thead>
          <th>Time</th>
          <th>Temperature</th>
          <th colSpan="2">Weather</th>
          <th className="hideOnMobile">Pressure</th>
        </thead>

        {day1Forecast.map((item, index) => {
          return <ForecastItem item={item} key={index} />;
        })}
      </table>

      <h4>
        {getDayInWeek(today.getDay() + 2)} {today.getDate() + 2}.
        {today.getMonth()}{" "}
      </h4>
      <table>
        <thead>
          <th>Time</th>
          <th>Temperature</th>
          <th colSpan="2">Weather</th>
          <th className="hideOnMobile">Pressure</th>
        </thead>

        {day2Forecast.map((item, index) => {
          return <ForecastItem item={item} key={index} />;
        })}
      </table>
    </div>
  );
};

export default Forecast;
