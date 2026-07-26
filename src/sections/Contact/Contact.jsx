import styles from './ContactStyles.module.css'

function Contact() {
    return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <p className={styles.intro}>
            I&apos;m currently looking for new opportunities and would love to
            hear from you. Whether you have a question or just want to say
            hi, my inbox is always open.
        </p>
        <div className={styles.buttonWrapper}>
            <a
                href="mailto:kangyue9323@gmail.com"
                className={`${styles.button} ${styles['type--C']}`}
            >
                <div className={styles.button__line}></div>
                <div className={styles.button__line}></div>
                <span className={styles.button__text}>SAY HELLO</span>
                <div className={styles.button__drow1}></div>
                <div className={styles.button__drow2}></div>
            </a>
        </div>
    </section>
    )
}

export default Contact
