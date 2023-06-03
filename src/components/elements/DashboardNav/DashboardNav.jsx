import styles from './DashboardNav.module.css'
import { Logo } from '@/components/ui';
import LinkButton from './LinkButton/LinkButton';
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
            <li><LinkButton icon={MdOutlineDashboard} link='/dashboard' label='MAIN'/></li>
            <li><LinkButton icon={MdHub} link='/dashboard/my-ads' label='ADS'/></li>
            <li><LinkButton icon={MdOutlineAccountCircle} link='/dashboard/account' label='ACCOUNT'/></li>
            <li><LinkButton icon={MdOutlineSupportAgent} link='/dashboard/support' label='SUPPORT'/></li>
          </ul>
        </nav>
      </div>
    </div>
    
  )
}