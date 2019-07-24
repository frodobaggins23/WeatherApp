import React, { useState } from "react";

const Locator = ({ fetchHandler, setfetchFailed }) => {
  const [params, setparams] = useState({
    q: "",
    units: "metric",
    APPID: "07a3607ed9bf985e730a1f342b737165"
  });

  return (
    <div className="locator">
      <form
        encType="application/x-www-form-urlencoded;charset=UTF-8"
        onSubmit={e => {
          e.preventDefault();
          const fetchURL = new URL(
            "http://api.openweathermap.org/data/2.5/forecast"
          );
          fetchURL.search = new URLSearchParams(params);
          fetch(fetchURL)
            .then(response => response.json())
            .then(data => fetchHandler(data))
            .catch(() => setfetchFailed(true));
        }}
      >
        <label htmlFor="location">
          {" "}
          Type a city...
          <input
            type="text"
            name="query"
            id="location"
            onChange={e => {
              setparams({
                ...params,
                q: e.target.value
              });
            }}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Locator;
