import { Link } from 'react-router-dom'
import styles from './ProjectsStyles.module.css'

const PROJECTS = [
  {
    title: 'Recipe Finder App',
    description:
      'A recipe discovery app that suggests meals based on ingredients you already have at home, with saved favorites and shareable shopping lists.',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Task Manager Dashboard',
    description:
      'A Kanban-style task board with drag-and-drop columns, real-time sync across devices, and per-project activity history.',
    tech: ['Vue', 'Vuex', 'Firebase'],
  },
  {
    title: 'Weather Now',
    description:
      'A minimal weather forecast app using geolocation and a public weather API, with a 5-day outlook and severe-weather alerts.',
    tech: ['JavaScript', 'REST API', 'CSS3'],
  },
  {
    title: 'Shared Component Library',
    description:
      'A Storybook-documented UI component library shared across multiple internal React and Vue projects, with visual regression tests.',
    tech: ['React', 'Storybook', 'TypeScript'],
  },
]

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.kicker}>03.</span>
        <span>Some Things I&apos;ve Built</span>
        <span className={styles.headingLine} />
      </h2>
      <ul className={styles.list}>
        {PROJECTS.map((project) => (
          <li key={project.title} className={styles.item}>
            <div className={styles.card}>
              <div className={styles.thumbnail} aria-hidden="true" />
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.techList} aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <li key={tech} className={styles.techTag}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/archive" className={styles.archiveLink} aria-label="View Full Project Archive">
        <span>View Full Project Archive</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={styles.arrow}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </section>
  )
}

export default Projects
