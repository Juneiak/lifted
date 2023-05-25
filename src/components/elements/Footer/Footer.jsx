import styles from './Footer.module.css';
import Link from 'next/link';
import { SiYoutube, SiVk, SiTelegram, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}>
        <svg width="100%" viewBox="0 -2 1920 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>wave-down</title>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g fill="#FFFFFF" fillRule="nonzero">
                  <g id="wave-down">
                      <path d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z" id="Path-Copy-2" transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "></path>
                  </g>
              </g>
          </g>
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Link href='/' className={styles.logoLink}>Lifted</Link>
        </div>
        <div className={styles.navContainer}>
          <nav>
            <ul className={styles.navList}>
              <li><Link href='/about'>About us</Link></li>
              <li><Link href='/blog'>Blog</Link></li>
              <li><Link href='/events'>Events</Link></li>
              <li><Link href='/coop'>Сooperation</Link></li>
              <li><Link href='/dashboard'>Dashboard</Link></li>
            </ul>
          </nav>
          <p className={styles.about}>Lifed © 2023 by Juneiak.</p>
        </div>
        <div className={styles.socials}>
          <ul className={styles.socialsList}>
            <li><Link href='#'><SiTelegram color='#67748e'/></Link></li>
            <li><Link href='#'><SiVk color='#67748e'/></Link></li>
            <li><Link href='#'><SiInstagram color='#67748e'/></Link></li>
            <li><Link href='#'><SiYoutube color='#67748e'/></Link></li>
          </ul>
        </div>
      </div>
    
    </footer>
  )
}