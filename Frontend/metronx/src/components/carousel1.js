import styles from "./carousel.module.css";
import { useEffect, useState } from "react";
import { SliderImages } from "../components/carouselImg";
import Gift from "../images/Gift.jpg";
import Vector from "../images/Vector.jpg";
import Magnifying from "../images/magnifying.jpg";

export default function Carousel1() {
  const [currentImg, setCurrentImg] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
 
  const slideRight = () =>
    setCurrentImg(currentImg === SliderImages.length - 1 ? 0 : currentImg + 1);

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 1500);
  });
  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div
        className={styles.innerCar}
        style={{ backgroundImage: `url(${SliderImages[currentImg].img})` }}
      >
        <div className={styles.center}>
          <div className={styles.headerSearchBar}>
            <h2>
              <b>RENT</b>
            </h2>
            <img className={styles.gift} src={Gift} alt="img"></img>
            <h2>
              <b>BUY</b>
            </h2>
          </div>
          <div className={styles.innerCenter}>
            <img className={styles.Magnifying} src={Magnifying} alt="img"></img>
            <input
              className={styles.inputSearch}
              type="text"
              placeholder="Search address, postcode, suburb, region, or keyword"
            ></input>
            <h3 className={styles.filters}>
              Filters{" "}
              <img className={styles.vector} src={Vector} alt="img"></img>
            </h3>
            <btn className={styles.searchBtn}>Search</btn>
          </div>
        </div>
      </div>
    </div>
  );
}
