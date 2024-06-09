import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import themeIcon from "../../assets/sun.svg";
import linkedinImg from "../../assets/linkedin-light.svg";
import GithubImg from "../../assets/github-light.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profile0-image" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="change the theme"
        />
      </div>
      <div className={styles.info}>
        <h1>Yue</h1>
        <h1>Kang</h1>
        <h2>Frontend Devleoper</h2>
        <span>
          <a href="https://github.com/Cora-chan" target="_blank">
            <img src={GithubImg} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/yue-kang-269016196/"
            target="_blank">
            <img src={linkedinImg} alt="LinkedIn" />
          </a>
        </span>
        <p>
          With a passion for developing mordern web apps! And Otaku saves the
          world!
        </p>
        <a href={linkedinImg} download>
            <button className="hover">Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
