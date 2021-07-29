import React from "react";
import styles from "./Landing.module.css";
import landingLogo from "../../Assets/landingLogo.png"

//Landing Component 
const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.landingImageDiv}>
        <img className={styles.landingImage} src={landingLogo} alt="landingLogo" />
      </div>
      <h2 className={styles.landingHeading}>Welcome to<span className={styles.headingHighlight}>&nbsp;Block</span></h2>
    </div>
  );
};
export default Landing;
