import React, { useState } from "react";
import "./App.css";
import Logo from "./patricialogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeClosed = <FontAwesomeIcon icon={faEyeSlash} />;

const App = () => {
  const [numberShown, setNumberShown] = useState(false);
  const toggleNumberVisiblity = () => {
    setNumberShown(numberShown ? false : true);
  };
  return (
    <div className="credit-card">
      <div className="credit-card__logo">
        <img src={Logo} alt="" />
        <div className="eye">
          <i onClick={toggleNumberVisiblity}>{numberShown ? eye : eyeClosed}</i>
        </div>
      </div>

      {numberShown ? (
        <div className="credit-card__number">
          <div className="number-4">9784</div>
          <div className="number-4">9784</div>
          <div className="number-4">9784</div>
          <div className="number-4">9784</div>
        </div>
      ) : (
        <div className="credit-card__number">
          {" "}
          <div className="number-4">9784</div>
          <div className="number-4">****</div>
          <div className="number-4">****</div>
          <div className="number-4">****</div>
        </div>
      )}

      <div className="credit-card__info">
        <div className="credit-card__info_name">
          <div className="credit-card__info_label">Cardholder Name</div>
        </div>

        <div className="credit-card__info_expiry">
          <div className="credit-card__info_label">
            <div className="credit-card__info_left">
              <div>VALID</div>
              <div>THRU</div>
            </div>
          </div>
          <div>10/12</div>
        </div>
        <div className="credit-card__info_expiry">
          <div className="credit-card__info_label credit-card__info_left">CVV</div>
          <div>{numberShown ? 455 : "***"}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
