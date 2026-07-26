import styles from './FooterStyles.module.css'

function Footer() {
  return (
   <section id='footer' className={styles.container}>
    <p>&copy; 2026 Yue Kang.</p>
    <p>All right reserved</p>
   </section>
  )
}

export default Footer