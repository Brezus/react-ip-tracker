import React from "react";
import InputDisplay from "./InputDisplay";
import "./App.css";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function App() {
  const [ipInfo, setIpInfo] = React.useState("");
  const [ip, setIp] = React.useState("");
  const [isLoading, setIsLoading] = React.useState("false");
  const [latLon, setLatLon] = React.useState(null);
  const [lat, setLat] = React.useState(37.7749);
  const [lng, setLng] = React.useState(-122.4194);
  const [zoom, setZoom] = React.useState(13);

  function getIp(event) {
    // get the ip typed in by user
    setIp(event.target.value);
  }

  async function getAddressInfo() {
    let apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=at_oNvwKc6F4I37eCbKER4WSoYriVKGY&ipAddress=${ip}`;
    // setIsLoading(true);
    try {
      const result1 = await axios.get(apiUrl);
      setIpInfo(result1);
      let secondApiUrl = `http://open.mapquestapi.com/geocoding/v1/address?key=O5jXHb2AGA7PGVJm07TRI8BSGVsaROwa&location=`;
      const result2 = await axios.get(
        secondApiUrl + result1.data.location.region
      );
      // call open maps api passing the location recieved from calling geolocation api with ip address
      setLatLon(result2.data.results[0].locations[0].displayLatLng);
      console.log(result2);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="App">
      <InputDisplay
        getInput={(event) => getIp(event)}
        handleClick={getAddressInfo}
        isLoading={isLoading}
      />
      {latLon && (
        <MapContainer
          center={[latLon.lat, latLon.lng]}
          zoom={zoom}
          //   whenCreated={map => setPosition({ map })}
          style={{ width: "100%", height: "900px" }}
        >
          <TileLayer
            attribution='&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      )}
    </div>
  );
}

export default App;
