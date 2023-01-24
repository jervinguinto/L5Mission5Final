import styles from "./middlesection.module.css";
import PropertyMan from "../images/PropertyMan.jpg";
import PropertyOwn from "../images/PropertyOwn.jpg";

export default function MiddleSection() {
  return (
    <div className={styles.middleSection}>
      <h2 className={styles.title}>
        Helping our clients to achieve harmony through our expertiese and skills
      </h2>

      <img className={styles.imgHouse} src={PropertyOwn} alt="img"></img>
      <img className={styles.imgHouse} src={PropertyMan} alt="img"></img>
    </div>
  );
}
