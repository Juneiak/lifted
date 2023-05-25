import styles from './Header.module.css';
import AuthButton from './AuthButton/AuthButton';
import Link from 'next/link';

export default function Header() {
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logoLink}>Lifted</Link>
        <nav>
          <ul className={styles.navList}>
            <li><Link href='/about'>About us</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/events'>Events</Link></li>
            <li><Link href='/coop'>Сooperation</Link></li>
            <li><Link href='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>
        <AuthButton/>
      </div>
    </header>
  )
}