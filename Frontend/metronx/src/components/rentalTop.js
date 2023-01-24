import styles from "../components/rentalTop.module.css";
import { FaChevronDown } from "react-icons/fa";
import {SlMagnifier} from "react-icons/sl"


export default function RentalTop() {

  
  return (
    <div className={styles.top}>
      <h1>Search for Rental Properties</h1>

      <div className={styles.innerTop}>
        <div className={styles.rentBuy}>
          <button className={styles.rentBtn}>RENT.</button>
          <button className={styles.buyBtn}>BUY</button>
        </div>
      <SlMagnifier className={styles.magnifyer}></SlMagnifier>
        <input placeholder=
        "Search address,postcode,suburb, region or keyword" className={styles.searchBar} ></input>

        <div className={styles.filterSearchButtons}>

            <button className={styles.priceBtn}>Price <FaChevronDown className={styles.icon}></FaChevronDown></button>
            <button className={styles.bedsBtn}>Beds <FaChevronDown className={styles.icon}></FaChevronDown></button>
            <button className={styles.bathsBtn}>Baths <FaChevronDown className={styles.icon}> </FaChevronDown></button>
            <button className={styles.propBtn}>Property type <FaChevronDown className={styles.icon}></FaChevronDown></button>
            <button className={styles.moreBtn}>More <FaChevronDown className={styles.icon}></FaChevronDown></button>
         

          <button className={styles.searchBtn}>Search</button>
        </div>
      </div>
    </div>
  );
}
