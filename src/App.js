import React from "react";
import InputDisplay from "./InputDisplay";
import "./App.css";
import LeafletMap from "./components/LeafletMap";

function App() {
  const [ipInfo, setIpInfo] = React.useState("");
  const [ip, setIp] = React.useState("");
  const [isLoading, setIsLoading] = React.useState("false");

  function getIp(event) {
    setIp(event.target.value);
  }

  async function getAddressInfo() {
    let apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=at_oNvwKc6F4I37eCbKER4WSoYriVKGY&ipAddress=${ip}`;
    setIsLoading(true);
    try {
      const promise = await fetch(apiUrl);
      if (!promise.ok) {
        throw new Error(`Error! status: ${promise.status}`);
      } else {
        const response = promise.json();
        setIpInfo(response);
        console.log(ipInfo);
      }
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
      <LeafletMap />
    </div>
  );
}

export default App;
