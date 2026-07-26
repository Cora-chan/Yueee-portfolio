import styles from './SkillsStyles.module.css'

const SKILL_ROWS = [
  {
    duration: '22000ms',
    direction: 'reverse',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'Vue', 'Liquid'],
  },
  {
    duration: '26000ms',
    direction: 'normal',
    skills: ['Tailwind CSS', 'Storybook', 'jQuery', 'Bootstrap', 'Redux', 'Webpack', 'Git', 'Yarn'],
  },
  {
    duration: '18000ms',
    direction: 'reverse',
    skills: ['Episerver (Optimizely)', 'Sitecore', '.Net', '.Net Core', 'C#', 'SQL', 'SQL Server'],
  },
]

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.kicker}>01.</span>
        <span>Skills &amp; Technologies</span>
        <span className={styles.headingLine} />
      </h2>
      <div className={styles.marquee}>
        {SKILL_ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={styles.loopSlider}
            style={{ '--duration': row.duration, '--direction': row.direction }}
          >
            <div className={styles.inner}>
              {[...row.skills, ...row.skills].map((skill, i) => (
                <div className={styles.tag} key={`${skill}-${i}`}>
                  <span className={styles.hash}>#</span> {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.fade} />
      </div>
    </section>
  )
}

export default Skills
