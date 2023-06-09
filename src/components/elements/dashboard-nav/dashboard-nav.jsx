'use client';

import styles from './dashboard-nav.module.css'
import { Logo } from '@/components/ui';
import LinkButton from './link-button/link-button';
import {
  MdOutlineDashboard,
  MdHub,
  MdOutlineAccountCircle,
  MdOutlineSupportAgent
} from "react-icons/md"

export default function DashboardNav() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <div><Logo /></div>
          <p>Lifted</p>
        </div>
        <hr />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><LinkButton icon={MdOutlineDashboard} link='/dashboard' label='Главная'/></li>
            <li><LinkButton icon={MdHub} link='/dashboard/advertising' label='Рекламные компании'/></li>
            <li><LinkButton icon={MdOutlineAccountCircle} link='/dashboard/account' label='Аккаунт'/></li>
            <li><LinkButton icon={MdOutlineSupportAgent} link='/dashboard/support' label='Поддержка'/></li>
          </ul>
        </nav>
      </div>
    </div>
    
  )
}