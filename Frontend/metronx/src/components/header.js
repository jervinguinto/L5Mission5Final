import styles from "./header.module.css";
import HeaderLogo from "../images/headerLogo.jpg";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [closeOpen1, setCloseOpen1] = useState(false);
  const [closeOpen2, setCloseOpen2] = useState(false);
  const [closeOpen3, setCloseOpen3] = useState(false);
  const [closeOpen4, setCloseOpen4] = useState(false);

  const setDropDown1 = () => {
    setCloseOpen1(!closeOpen1);
  };
  const setDropDown2 = () => {
    setCloseOpen2(!closeOpen2);
  };
  const setDropDown3 = () => {
    setCloseOpen3(!closeOpen3);
  };
  const setDropDown4 = () => {
    setCloseOpen4(!closeOpen4);
  };

  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <img src={HeaderLogo} alt="metro nz logo" className={styles.logo}></img>
      </div>
      <div className={styles.rightHeader}>
        <div>
          <p onClick={setDropDown1} className={styles.headerName}>
            Property Listings <FaChevronDown></FaChevronDown>
          </p>
          {closeOpen1 === true ? (
            <ul className={styles.drop1}>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
          ) : (
            ""
          )}
        </div>

        <p onClick={setDropDown2} className={styles.headerName}>
          Property Management Services<FaChevronDown></FaChevronDown>
        </p>
        {closeOpen2 === true ? (
          <ul className={styles.drop2}>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        ) : (
          ""
        )}

        <p onClick={setDropDown3} className={styles.headerName}>
          Property Owners <FaChevronDown></FaChevronDown>
        </p>
        {closeOpen3 === true ? (
          <ul className={styles.drop3}>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        ) : (
          ""
        )}

        <p onClick={setDropDown4} className={styles.headerName}>
          About Us <FaChevronDown></FaChevronDown>
        </p>
        {closeOpen4 === true ? (
          <ul className={styles.drop4}>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
