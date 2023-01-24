import styles from "../components/rentalMid.module.css";
import { MdFormatListBulleted } from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
export default function RentalMid() {


  return (
<div>

    <div className={styles.mid}>
      <div className={styles.innerMid}>
        <h2>Showing 100 Properties</h2>
        <div className={styles.rightSide}>
          <button className={styles.sortBtn}>
            Sort<FaChevronDown></FaChevronDown>
          </button>
          <div className={styles.icons}>
            <button className={styles.icon1}>
              <MdFormatListBulleted ></MdFormatListBulleted>
            </button>
            <button className={styles.icon2} >
              <BsFillGrid3X3GapFill></BsFillGrid3X3GapFill>
            </button>
          </div>
        </div>
      </div>
    </div>


</div>
  );
}
