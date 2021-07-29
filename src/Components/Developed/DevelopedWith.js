import React from "react";
import cssImg from "../../Assets/css.png";
import htmlImg from "../../Assets/html.png";
import javascriptImg from "../../Assets/javascript.png";
import reactImg from "../../Assets/react.png";
import styles from "./DevelopedWith.module.css";

const DevelopedWith = () => {
  return (
    <div className={styles.container}>
      <div className={styles.developedWith}>
        <h2>Developed with</h2>
        <div className={styles.icons}>
          <img src={htmlImg} alt="Icon" />
          <img src={cssImg} alt="Icon" />
          <img src={javascriptImg} alt="Icon" />
          <img src={reactImg} alt="Icon" />
        </div>
      </div>
    </div>
  );
};

export default DevelopedWith;
