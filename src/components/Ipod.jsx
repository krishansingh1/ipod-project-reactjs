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
    <div id="wheel-contianer">
      <div id="wheel">
        <div className="wheel-icon">
          <p>Menu</p>
        </div>
        <div className="wheel-icon">
          <FontAwesomeIcon icon={faFastForward} />
        </div>
        <div className="wheel-icon">
          <FontAwesomeIcon icon={faFastBackward} />
        </div>
        <div className="wheel-icon">
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </div>
      </div>
    </div>
  );
}

export default Ipod;
