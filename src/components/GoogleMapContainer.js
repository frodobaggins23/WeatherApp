import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

// const Map = props => {
//   console.log("*******props********:", props);
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 50.075539, lng: 14.4378 }}
//     />
//   );
// };

const GoogleMapContainer = withScriptjs(
  withGoogleMap(({ cityCoord }) => {
    console.log("*******props********:", cityCoord);
    console.log("*******lat********:", parseFloat(cityCoord.lat));
    console.log("*******lon********:", parseFloat(cityCoord.lon));
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
