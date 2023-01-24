import { RecentlyListedImg } from "../components/recentlyListedImg";

import Slider from 'react-slick'
import "./recentlylisted.css";
import bed from "../images/bed.jpg";
import bath from "../images/bath.jpg";
import view from "../images/viewlistings.jpg";
export default function RecentlyListed() {

  const settings = {

    dots:false,
    infinite:true,
    speed:500,
    slidesToShow: 4,
    slidesToScroll:4
  }
  return (

   



    <div className="recentlyListed">
      <h1>Recently listed properties</h1>
<div className="slider2">
<Slider {...settings}>
        {RecentlyListedImg.map((data) => (
          <div>
            <img src={data.img} alt="img"></img>
            <p className="title">
              <b>{data.title}</b>
            </p>
            <p className="address">{data.address}</p>

            <button className="bed">
              <img src={bed} alt="img"></img> {data.beds}
            </button>
            <span></span>
            <button className="bath">
              <img src={bath}alt="img"></img> {data.bath}
            </button>
            <p className="amenities">{data.amenities}</p>
          </div>
        ))}


</Slider>

</div>
     
      <div className="view">
        <img src={view}alt="img"></img>
      </div>
    </div>
  );
}