import { useEffect, useState } from "react";
import styles from "./SidebarStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import Resume from "../../assets/Yue_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
  { id: "footer", label: "Footer" },
];

function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].id);

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinImg = theme === "light" ? linkedinLight : linkedinDark;
  const githubImg = theme === "light" ? githubLight : githubDark;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.sidebar}>
      <div>
        <h1>Yue Kang</h1>
        <h2>Frontend Developer</h2>
        <p className={styles.description}>
          With a passion for developing modern web apps!
        </p>
        <nav className={styles.nav} aria-label="In-page jump links">
          <ul>
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`${styles.navItem} ${
                    activeSection === id ? styles.active : ""
                  }`}
                >
                  <span className={styles.navIndicator} />
                  <span className={styles.navText}>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.bottom}>
        <span className={styles.socials}>
          <a href="https://github.com/Cora-chan" target="_blank" rel="noreferrer">
            <img src={githubImg} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/yue-kang-269016196/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinImg} alt="LinkedIn" />
          </a>
        </span>
        <a href={Resume} download>
          <button className="hover">Download Resume</button>
        </a>
      </div>
    </header>
  );
}

export default Sidebar;
