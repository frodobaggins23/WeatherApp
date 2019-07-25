import React, { useState } from "react";

const Locator = ({ fetchData }) => {
  const [query, setquery] = useState({
    q: ""
  });

  return (
    <div className="locator">
      <form
        encType="application/x-www-form-urlencoded;charset=UTF-8"
        onSubmit={e => {
          e.preventDefault();
          fetchData(query);
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
              setquery({
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
