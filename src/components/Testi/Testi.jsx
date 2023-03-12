import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Testi.css";
import testi from "../../assets/testi.svg";
import oval from "../../assets/testi2.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://challenge.fe.weekendinc.com/testimonial")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const isMobile = window.innerWidth < 450;

  const options = {
    center: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2.25,
    slidesToScroll: 1,
  };
  return (
    <div className="container-xxl p-0 Testi">
      <div className="container-xxl position-relative p-0 testi-img">
        <img src={testi} alt="testi" />
      </div>
      <div className="container-xxl text">
        <span style={{ color: "#0B24FB", fontWeight: "600" }}>
          Deffinition;{" "}
        </span>
        <span>
          a practice or exercise to test or improve one's fitness for athletic
          competition, ability, or performance to exhaust (something, such as a
          mine) by working to devise, arrange, or achieve by resolving
          difficulties. Merriam-Webster.com Dictionary.
        </span>
        <br></br>
        <span className="team">-weekend team</span>
      </div>
      <div className="container-xxl">
        <p className="testi-title">Testimonial</p>
        <img className=" oval" src={oval} alt="oval" />
        <div className="container slide">
          <Slider {...options}>
            {data.map((data, index) => (
              <div className="card card-testi" key={data.id}>
                <div className="card-body">
                  <div className="card-title">{data.by}</div>
                  <div className="card-text">{data.testimony}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testi;
