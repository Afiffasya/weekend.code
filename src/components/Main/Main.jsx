import React from "react";
import "./Main.css";
import Logo from "../../assets/logo.svg";
import banner from "../../assets/banner.svg";

const Main = () => {
  return (
    <div className="container-xxl p-0 main">
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg px-4 py-3 py-lg-3 nv">
          <img className="bitmap" src={Logo} alt="logo" />
          <div className="d-flex flex-column align-items-start">
            <span className="good-morning">Good Morning</span>
            <span className="fellas">Fellas</span>
          </div>
        </nav>
      </div>
      <div className="container">
        <h2 className="banner-title text-center">WEEKEND FROM HOME</h2>
        <p className="banner-text text-center">
          Stay active with a little workout.
        </p>
      </div>
      <div className="container banner-img text-center">
        <img className="bannerimg" src={banner} alt="banner" />
        <button className="btn btn-light">Let's Go</button>
      </div>
    </div>
  );
};

export default Main;
