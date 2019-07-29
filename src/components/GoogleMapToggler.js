import React, { useState } from "react";
import GoogleMapContainer from "./GoogleMapContainer.js";

const GoogleMapToggler = ({ cityCoord }) => {
  const [showMap, setshowMap] = useState(false);

  return (
    <>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          showMap ? setshowMap(false) : setshowMap(true);
        }}
      >
        Show on map
      </a>
      {showMap && (
        <GoogleMapContainer
          cityCoord={cityCoord}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_GOOGLE_KEY
          }`}
          loadingElement={<div style={{ width: `100%`, height: `50vh` }} />}
          containerElement={<div style={{ width: `100%`, height: `50vh` }} />}
          mapElement={<div style={{ width: `100%`, height: `50vh` }} />}
        />
      )}
    </>
  );
};

export default GoogleMapToggler;
