import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

export default function LoadingMessage() {
  return (
    <div id="loadingMessage">
      <FontAwesomeIcon className="icon" icon={faCloudRain} size="lg" spin />
      <h3 style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
        loading...
      </h3>
      <FontAwesomeIcon className="icon" icon={faCloudRain} size="lg" spin />
    </div>
  );
}
