import { useState } from 'react'
import styles from './ExperienceStyles.module.css'

const EXPERIENCES = [
  {
    company: 'Orchard Marketing',
    role: 'Front-end Developer',
    period: 'Sept 2025 — July 2026',
    bullets: [
      'Leveraged LLM-powered workflows (Claude, Microsoft Copilot) to accelerate UI implementation, improve code quality, and cut development turnaround by 20 - 30%',
      'Participated three flagship Optimizely platforms for the Royal Agricultural Society — the Royal Easter Show website, Sydney Showground, and the Australasian Animal Registry',
      'Acted as full-stack engineer on the Transmedic website: front-end implementation, 50% back-end development, and Optimizely CMS integration',
      'Built a kiosk questionnaire in Vue for the OFEV Conference, completed by 100+ attendees on the day',
    ],
  },
  {
    company: 'Western Power',
    role: 'Front-end Developer (Remote Contractor)',
    period: 'Aug 2024 — Jul 2025',
    bullets: [
      'Delivered the Design Conformance Review Portal — checklists, detail pages, multi-file uploads, and progress indicators — translating Figma designs into production-ready components',
      'Owned the entire front-end architecture for the Power Training Service Portal, working closely with back-end, BA, and solution architect',
    ],
  },
  {
    company: 'Stockland',
    role: 'Front-end Developer',
    period: 'Apr 2021 — Jun 2024',
    bullets: [
      'Participated in delivering a new website and led the CMS migration from Sitecore to Optimizely',
      'Built Sitecore components with TFS, Blazor/Razor, Glass, and Synthesis',
      'Maintained and redesigned the construction tracker UI on a two-week cadence using HTML, CSS, JavaScript, and React',
    ],
  },
  {
    company: 'Target China',
    role: 'IT Support',
    period: 'Oct 2020 — Apr 2021',
    bullets: [
      'Set up, configured, and maintained desktop computers, printers, and other office equipment',
      'Managed user accounts, permissions, and password resets across internal systems',
      'Logged and resolved day-to-day helpdesk tickets, escalating complex issues where needed to minimize downtime',
    ],
  },
]

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = EXPERIENCES[activeIndex]

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      setActiveIndex((i) => (i + 1) % EXPERIENCES.length)
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      setActiveIndex((i) => (i - 1 + EXPERIENCES.length) % EXPERIENCES.length)
    }
  }

  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.kicker}>02.</span>
        <span>Where I&apos;ve Worked</span>
        <span className={styles.headingLine} />
      </h2>
      <div className={styles.layout}>
        <div
          role="tablist"
          aria-label="Job experiences"
          className={styles.tabList}
          onKeyDown={handleKeyDown}
        >
          {EXPERIENCES.map((exp, index) => (
            <button
              key={exp.company}
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls={`panel-${index}`}
              id={`tab-${index}`}
              tabIndex={index === activeIndex ? 0 : -1}
              className={`${styles.tab} ${index === activeIndex ? styles.activeTab : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`panel-${activeIndex}`}
          aria-labelledby={`tab-${activeIndex}`}
          className={styles.panel}
          tabIndex={0}
        >
          <div className={styles.panelHeader}>
            <h3 className={styles.role}>
              <span>{active.role}</span>{' '}
              <span className={styles.company}>@ {active.company}</span>
            </h3>
            <p className={styles.period}>{active.period}</p>
          </div>
          <ul className={styles.bulletList}>
            {active.bullets.map((bullet) => (
              <li key={bullet} className={styles.bullet}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
