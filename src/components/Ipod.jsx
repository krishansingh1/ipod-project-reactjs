import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFastForward,
  faFastBackward,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Ipod() {
  return (
    <div id="wheel-container">
      <div id="wheel">
        <p>Menu</p>
        <div id="forward-icon">
          <FontAwesomeIcon icon={faFastForward} />
        </div>
        <div id="menu-selector"></div>
        <div id="backward-icon">
          <FontAwesomeIcon icon={faFastBackward} />
        </div>
        <div id="play-pause-icon">
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </div>
      </div>
    </div>
  );
}

export default Ipod;
