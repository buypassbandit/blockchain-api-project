import React from "react";
import styles from "./Header.module.css";
import logo from "../../Assets/block.png";

//Header Component "Navigation Bar"
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftSideHeader}>
          <img className={styles.logoImage} src={logo} alt="Logo" />
          <h1>
            {" "}
            <a className={styles.links} href="/">
              Block
            </a>
          </h1>
          <div className={styles.rightSideHeader}>
            <h2 className={styles.one}>
              <a className={styles.links} href="#dashboard">
                Dashboard
              </a>
            </h2>
            <h2 className={styles.one}>
              <a className={styles.links} href="#graphs">
                Graphs
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
