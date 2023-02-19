import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFastForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";

function Ipod() {
  return (
    <div>
      <div>
        <div>
          <p>Menu</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faFastForward} />
        </div>
        <div>
          <FontAwesomeIcon icon={faStepBackward} />
        </div>
      </div>
    </div>
  );
}

export default Ipod;
