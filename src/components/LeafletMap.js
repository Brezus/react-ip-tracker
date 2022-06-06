// import React from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMapEvents,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

// export default function LeafletMap(props) {
//   const [lat, setLat] = React.useState(37.7749);
//   const [lng, setLng] = React.useState(-122.4194);
//   const [zoom, setZoom] = React.useState(13);

//   return (
//     <MapContainer
//       center={[lat, lng]}
//       zoom={zoom}
//       //   whenCreated={map => setPosition({ map })}
//       style={{ width: "100%", height: "900px" }}
//     >
//       <TileLayer
//         attribution='&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[lat, lng]}>
//         <Popup>bruh</Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// // make fetch api to get data on the result of ipInfo
// // fetch data from http://open.mapquestapi.com/geocoding/v1/address?key=O5jXHb2AGA7PGVJm07TRI8BSGVsaROwa&location=ipInfo.address
// // pass it the result of the address recieved from the ipInfo.CityName
// // then save those results in a state specifically the lattitude and longitude returned
// // then save that lat and lon in an array
// // pass that array as props to leaflet component
