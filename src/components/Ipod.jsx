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
        <div className="wheel-icons">
          <p>Menu</p>
        </div>
        <div className="wheel-icons" id="forward-icon">
          <FontAwesomeIcon icon={faFastForward} />
        </div>
        <span id="menu-selector"></span>
        <div className="wheel-icons" id="backward-icon">
          <FontAwesomeIcon icon={faFastBackward} />
        </div>
        <div className="wheel-icons" id="play-pause-icon">
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </div>
      </div>
    </div>
  );
}

export default Ipod;
