
import "./testimony.css";
import { useState, useEffect } from "react";
import axios from "axios";


import Slider from "react-slick";

export default function Testimony() {
  const [data, setData] = useState([
    "caption:",
    "image:",
    "name:",
    "location:",
  ]);

  useEffect(() => {
    axios.get("http://localhost:4000").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimony">
      <h1>What our tenants say about us</h1>

    

      <div className="slider">
        <Slider {...settings}>
          {data.map((myData) => (
            <div className="soloTestimony">
              <p className="caption">{myData.caption}</p>

              <div className="imgNameLoc">
                <img src={myData.image} className="myImg" alt="img"></img>

                <div className="nameLoc">
                  <p className="reviewName">{myData.name},</p>
                  <p>{myData.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    
    </div>
  );
}
