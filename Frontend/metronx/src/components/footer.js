import styles from "./footer.module.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import LogoWhite from "../images/logoWhite.png";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.partOne}>
        <img src={LogoWhite} alt="img"></img>
        <p>
          Metro NZ Property Management has offices conveniently located in
          Central Auckland but operates through New Zealand and also
          internationally.
        </p>

        <FaFacebookSquare className={styles.socIcons}></FaFacebookSquare>
        <FaInstagram className={styles.socIcons}></FaInstagram>
        <FaLinkedin className={styles.socIcons}></FaLinkedin>
        <FaTwitter className={styles.socIcons}></FaTwitter>
      </div>
      <div className={styles.partTwo}>
        <h3>About Us</h3>
        <p>Why Metro NZ</p>
        <p>Meet the Team</p>
        <p>News</p>
        <p>Contact Us</p>
        <p>FAQs</p>
        <p>Articles</p>
        <br></br>
        <h3>Careers</h3>
        <p>We're Hiring</p>
      </div>
      <div className={styles.partThree}>
        <h3>Property Listing</h3>
        <p>Check Rental Property Listing</p>
        <p>Check Property Listing Sales</p>
        <p>How the Tenancy Application work</p>
        <br></br>
        <br></br>
        <h3>Property Owners</h3>
        <p>Healthy Home Standards</p>
        <p>Body Corporate Administration</p>
        <p>Investment Properties</p>
        <p>Dispute Process</p>
      </div>
      <div className={styles.partFour}>
        <h3>Property Management Services</h3>
        <p>Property Management</p>
        <p>Building Management</p>
        <p>Rental Property Management</p>
        <p>Decluttering Services</p>
        <p>Tenanted Properties Sales</p>
      </div>
    </div>
  );
}
