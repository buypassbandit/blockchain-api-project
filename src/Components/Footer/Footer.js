import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Assets/block.png";
import linkedinLogo from "../../Assets/linkedin.png";
import githubLogo from "../../Assets/github.png";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.logo} src={logo} alt={"Logo"} />
      <h2>
        {" "}
        <a href={"/"}>&copy; Block 2021</a>
      </h2>
      <h4>All Rights Reserved</h4>
      <div className={styles.footerLogos}>
        <a
          href={"https://github.com/Shashankbk7"}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img className={styles.logos} src={githubLogo} alt={"Logo"} />
        </a>
        <a
          href={"https://www.linkedin.com/in/shashank-bk-7mav/"}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img className={styles.logos} src={linkedinLogo} alt={"Logo"} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
