import './styles.css';
import styles from './layout.module.css';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href='/dashboard'>MAIN</Link></li>
            <li><Link href='/dashboard/my-ads'>ADS</Link></li>
            <li><Link href='/dashboard/account'>ACCOUNT</Link></li>
            <li><Link href='/dashboard/support'>SUPPORT</Link></li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  )
}