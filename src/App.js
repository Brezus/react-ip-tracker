import React from "react";
import InputDisplay from "./InputDisplay";
import "./App.css";

function App() {
  const [ipInfo, setIpInfo] = React.useState("");
  const [ip, setIp] = React.useState("");
  const [isLoading, setIsLoading] = React.useState("false");

  function getIp(event) {
    setIp(event.target.value);
  }

  let apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=1691556&ipAddress=${ip}`;

  async function getAddressInfo() {
    try {
      const promise = await fetch(apiUrl);
      const response = promise.json();
      setIpInfo(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <div className="App">
      <InputDisplay getInput={(event) => getIp(event)} />
    </div>
  );
}

export default App;
