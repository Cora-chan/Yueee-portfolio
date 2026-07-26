import { Link } from 'react-router-dom'
import styles from './ArchiveStyles.module.css'

const ARCHIVE_PROJECTS = [
  {
    year: '2026',
    title: 'Under Construction',
    madeAt: 'Under Construction',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
  },
  // {
  //   year: '2025',
  //   title: 'Task Manager Dashboard',
  //   madeAt: 'Side project',
  //   tech: ['Vue', 'Vuex', 'Firebase'],
  // },
  // {
  //   year: '2025',
  //   title: 'Weather Now',
  //   madeAt: 'Side project',
  //   tech: ['JavaScript', 'REST API', 'CSS3'],
  // },
  // {
  //   year: '2024',
  //   title: 'Shared Component Library',
  //   madeAt: 'Side project',
  //   tech: ['React', 'Storybook', 'TypeScript'],
  // },
  // {
  //   year: '2024',
  //   title: 'Expense Tracker',
  //   madeAt: 'Side project',
  //   tech: ['React', 'Redux', 'Chart.js'],
  // },
  // {
  //   year: '2023',
  //   title: 'Markdown Notes',
  //   madeAt: 'Side project',
  //   tech: ['Vue', 'IndexedDB', 'CSS3'],
  // },
  // {
  //   year: '2023',
  //   title: 'Pomodoro Timer',
  //   madeAt: 'Side project',
  //   tech: ['JavaScript', 'CSS3', 'Web Audio API'],
  // },
  // {
  //   year: '2022',
  //   title: 'Habit Tracker',
  //   madeAt: 'Side project',
  //   tech: ['React', 'Tailwind CSS', 'Firebase'],
  // },
]

function Archive() {
  return (
    <section id="archive" className={styles.container}>
      <Link to="/" className={styles.backLink}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={styles.backArrow}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H6.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L6.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        <span>Back to home</span>
      </Link>
      <h1 className={styles.heading}>Archive</h1>
      <p className={styles.intro}>
        A selection of projects — placeholder entries for now, to be
        replaced with real work.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Title</th>
              <th scope="col">Made at</th>
              <th scope="col">Built with</th>
            </tr>
          </thead>
          <tbody>
            {ARCHIVE_PROJECTS.map((project) => (
              <tr key={project.title}>
                <td data-label="Year">{project.year}</td>
                <td data-label="Title" className={styles.titleCell}>
                  {project.title}
                </td>
                <td data-label="Made at">{project.madeAt}</td>
                <td data-label="Built with">
                  <ul className={styles.techList} aria-label="Technologies used">
                    {project.tech.map((tech) => (
                      <li key={tech} className={styles.techTag}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Archive
