import { Link } from 'react-router-dom'
import styles from './ProjectsStyles.module.css'
import royalEasterShow from '../../assets/royal-easter-show.png'
import transmedic from '../../assets/transmedic-group.png'
import powerTrainingService from '../../assets/power-training-service.png'
import ofevCover from '../../assets/OFEV-cover.png'

const PROJECTS = [
  {
    title: 'Royal Easter Show Website',
    image: royalEasterShow,
    description:
      'Front-end component development for the Royal Agricultural Society’s Royal Easter Show website, built on Optimizely with .NET integration.',
    tech: ['Optimizely', '.NET', 'TypeScript'],
  },
  {
    title: 'Transmedic Website',
    image: transmedic,
    description:
      'Full-stack build of the Transmedic website — front-end implementation, 50% back-end development, and Optimizely CMS integration.',
    tech: ['Optimizely', '.NET', 'TypeScript'],
  },
  {
    title: 'Power Training Service Portal',
    image: powerTrainingService,
    description:
      'End-to-end front-end architecture for Western Power’s Power Training Service Portal — course listings, shopping cart, and course detail pages.',
    tech: ['Optimizely', 'Vue', 'Liquid', 'Tailwind CSS'],
  },
  {
    title: 'OFEV Conference Kiosk',
    image: ofevCover,
    description:
      'A kiosk questionnaire app built for the OFEV Conference, integrating with an existing SQL-based reporting workflow — completed by 100+ attendees on the day.',
    tech: ['Vue', 'SQL'],
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
              <img
                className={styles.thumbnail}
                src={project.image}
                alt={`${project.title} screenshot`}
              />
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
