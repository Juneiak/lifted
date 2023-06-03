'use client';

import './styles.css';
import styles from './layout.module.css';
import { DashboardNav } from '@/components/elements'

export default function DashboardLayout({ children }) {

  return (
    <div className={styles.layout}>
      <DashboardNav />
      <main>{children}</main>
    </div>
  )
}