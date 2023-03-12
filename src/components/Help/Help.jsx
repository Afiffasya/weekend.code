import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Help.css";
import help from "../../assets/help.svg";
import help1 from "../../assets/help1.svg";

const Help = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://challenge.fe.weekendinc.com/help-tips")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container-xxl p-0 Help">
        <div className=" help-text">
          <h1>POV</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <h1 className="Resource">Reasource</h1>
          <p>
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </p>
        </div>
        <h1 className="Resource help-text">Help & Tips</h1>
        <div>
          {screenSize >= 450 && (
            <img className="helpimg" src={help} alt="logo" />
          )}
        </div>
        <div className="container card-helptips">
          {data.map((data, index) => (
            <div
              className="card card-help"
              key={data.id}
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card-body body-help">
                <div className="card-titlee">{data.title}</div>
                <button className="help-button">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="help-text">
          <h1>You're all set</h1>
          <p>
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
        </div>
        <img className="helpimg1" src={help1} alt="logo" />
        <footer>
          <div
            className="text-white
            d-flex
            justify-content-around
            align-items-center
          "
          >
            <span className="copyright">
              wknd@<span className="num">2020</span>
            </span>
            <span className="version">alpha version 0.1</span>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Help;
