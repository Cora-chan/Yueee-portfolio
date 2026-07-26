import styles from './HeroStyles.module.css'

function Hero() {
  return (
    <section id="about" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h2 id="hero-heading" className={styles.name}>
          Yue Kang
        </h2>
        <h3 className={styles.tagline}>I build things for the web.</h3>
        <p className={styles.description}>
          I&apos;m a Front-end Developer and a Web Developer based in Sydney, passionate about
          crafting accessible, pixel-perfect interfaces and modern
          component architectures. Specializing in React, Vue, and
          Optimizely, I&apos;m currently looking for new job opportunities and hoping to connect with you!
        </p>
      </div>
    </section>
  )
}

export default Hero
