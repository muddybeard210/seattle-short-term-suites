import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const SuiteMainMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: props.mapCoords.lat, lng: props.mapCoords.lng }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: props.mapCoords.lat, lng: props.mapCoords.lng }}
        />
      )}
    </GoogleMap>
  ))
);

export default SuiteMainMap;
