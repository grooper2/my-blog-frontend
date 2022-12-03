import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-one"></div>
      <div className="hero-two"></div>
      <h1 className="header-title">
        <span className="header-primary">Christos Athanasiou Blog</span>
        <span className="header-sub">The free Front-End Library</span>
        <span className="header-button">
          <button className="btnOutline">
            <Link to="Library">Go to Library</Link>
          </button>
        </span>
      </h1>
    </div>
  );
}

export default Hero;
