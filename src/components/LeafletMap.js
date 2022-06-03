import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function LeafletMap() {
  const [lat, setLat] = React.useState(37.7749);
  const [lng, setLng] = React.useState(-122.4194);
  const [zoom, setZoom] = React.useState(13);

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      style={{ width: "100%", height: "900px" }}
    >
      <TileLayer
        attribution='&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

get make fetch api to get data on the result of 


