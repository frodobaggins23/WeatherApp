import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const GoogleMapContainer = withScriptjs(
  withGoogleMap(({ cityCoord }) => {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: parseFloat(cityCoord.lat),
          lng: parseFloat(cityCoord.lon)
        }}
      />
    );
  })
);

export default GoogleMapContainer;
