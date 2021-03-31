import React,{useState} from "react"
// import logo from "./logo.svg";
import "./App.css";

function App() {
  // const 
  return (
    <div>
      <div className="row">
        <div className="small-5 small-offset-1 columns ">
          <div className="callout credit">
            <div className="row">
              <div className="small-6 columns">
                <h1 className="credit__bank">My Bank</h1>
              </div>
              <div className="small-6 columns">
                <img
                  className="credit__mc"
                  src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <p className="credit__card-number">9784 9784 9784 9784</p>
                <span className="credit__ccv">455</span>
              </div>
              <div className="small-9 columns">
                <label>
                  Card Holder
                  <p className="credit__name">Cardholder Name</p>
                </label>
              </div>
              <div className="small-3 columns">
                <label>
                  Expires
                  <p className="credit__date">
                    10 / 12
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
