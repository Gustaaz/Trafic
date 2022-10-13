import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaWhatsapp />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaYoutube />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Traffic</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer