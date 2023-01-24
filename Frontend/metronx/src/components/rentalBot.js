import { useEffect, useState } from "react";
import styles from "../components/rentalBot.module.css";
import axios from "axios";
export default function RentalBot() {

  const [data, setData] = useState([
    "mainImage:",
    "secondImg:",
    "thirdImg:",
    "address1:",
    "addess2:",
    "pets:",
  ]);

  useEffect(() => {
    axios.get("http://localhost:4000/rental").then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);

  return (

    <div className={styles.bot}>
      <div className={styles.container}>
        {data.map((data) => (
          <div className={styles.sections}>
            <div className={styles.left}>
              <img src={data.mainImage} alt="img"></img>
            </div>

            <div className={styles.center}>
              <img src={data.secondImg} alt="img"></img>

              <img src={data.thirdImg} alt="img"></img>
            </div>
            <div className={styles.right}>
              <div className={styles.rigthTop}>
                <p>Listed today</p>
                <h1>{data.price}/week</h1>
              </div>
              <div className={styles.address}>
                <p>{data.address1}</p>
                <h1>{data.address2}</h1>
              </div>

              <div className={styles.bedBathCar}>
                <p className={styles.bbc}> 2 beds | 1 bath | 1 Car park |</p>
                <p> Nearby Countdown, Les Mills Gym, Dairy Store</p>
                <p>{data.pets}</p>
              </div>

              <div className={styles.buttons}>
                <btn className={styles.button1}>Call Agent</btn>
                <btn className={styles.button2}>Book a viewing</btn>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>







  );
}
