'use client';

import styles from './LinkButton.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function LinkButton({ icon: Icon, label, link }) {

  const pathname = usePathname();
  return (
    <Link
      className={`${styles.link} ${pathname === link ? styles.active : ''}`}
      href={link}
    >
      <div id='iconWrapper' className={styles.wrapper} ><Icon color={pathname === link ? '#fff' : '#67748e'} /></div>
      <span>{label}</span>
    </Link>

  )
}