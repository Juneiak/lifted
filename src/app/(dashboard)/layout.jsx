'use client';

import './styles.css';
import styles from './layout.module.css';
import { Logo } from '@/components/ui';
import { DashboardNav } from '@/components/elements'

export default function DashboardLayout({ children }) {

  return (
    <div className={styles.layout}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <div><Logo /></div>
          <p>Lifted</p>
        </div>
        <hr />
        <DashboardNav />
      </div>
      {children}
    </div>
  )
}