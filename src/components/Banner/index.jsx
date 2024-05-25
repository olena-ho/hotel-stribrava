import "./style.css";
import React from "react";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__stripe">
        <div className="container">
          <h1>Hotel Stribrava</h1>
          <p className="lead">
            Rodinny hotel v malebne krajine Ceskeho stredohori.
          </p>
        </div>
      </div>
    </div>
  );
};
