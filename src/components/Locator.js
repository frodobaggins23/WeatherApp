import React, { useState } from "react";

const Locator = ({ fetchData }) => {
  const [query, setquery] = useState({
    q: ""
  });

  return (
    <div className="App__locator">
      <form
        encType="application/x-www-form-urlencoded;charset=UTF-8"
        onSubmit={e => {
          e.preventDefault();
          fetchData(query);
        }}
      >
        <input
          type="text"
          name="query"
          id="location"
          placeholder="type a city..."
          onChange={e => {
            setquery({
              q: e.target.value
            });
          }}
        />
        <button type="submit">
          <img src={require("../img/search.svg")} alt="searchIcon" />
        </button>
      </form>

      <p className="slogan">Reliable weather forecast just one click away...</p>
    </div>
  );
};

export default Locator;
