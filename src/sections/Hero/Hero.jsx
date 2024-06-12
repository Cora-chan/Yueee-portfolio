import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/avataaars.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg"
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg"
import avatar1 from "../../assets/avataaars.png"
import avatar2 from "../../assets/avataaars2.png"
import Resume from "../../assets/Yue_Resume.pdf";
import { useTheme } from '../../common/ThemeContext';

function Hero() {

   const  { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const linkedinImg = theme === 'light' ? linkedinLight : linkedinDark
    const GithubImg = theme === 'light' ? githubLight : githubDark
    const AvatarImg = theme ==='light' ? avatar1 : avatar2
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={AvatarImg} alt="profile0-image" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="change the theme"
          onClick={toggleTheme}
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
        <p className={styles.description}>
          With a passion for developing mordern web apps! 
        </p>
        <p className={styles.description}>
            And the website is still under construction!
        </p>
        <p className={styles.description}>
           More to come!
        </p>
        <a href={Resume} download>
            <button className="hover">Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
