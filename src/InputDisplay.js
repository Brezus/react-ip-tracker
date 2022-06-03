import React from "react";
import IpInfo from "./IpInfo";

export default function InputDisplay(props) {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(/images/pattern-bg.png)` }}
    >
      <div className="input-cont">
        <input
          onChange={props.getInput}
          className="ipTrackr"
          type="text"
          id="ipTrackr"
          name="ipTrackr"
          placeholder="Search for any IP address or domain"
        />
        <button onClick={props.handleClick} type="submit">
          <img className="arrow" src="/images/icon-arrow.svg" alt="arrow" />
        </button>
      </div>
      <IpInfo />
    </header>
  );
}
