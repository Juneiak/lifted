import styles from './NotReadyPageTemplate.module.css';
import { GlitchText } from '../../ui';
import Link from 'next/link';

export default function NotReadyPageTemplate({ pageName = 'This' }) {
  return (
    <div className={styles.page}>
      <GlitchText text={`${pageName} page isn't ready yet.`} />;
      <Link href='/'  className={styles.link}>To main page.</Link>
    </div>
  )
}