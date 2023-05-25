import styles from './NotFoundPageTemplate.module.css'
import { GlitchText } from '@/components/ui';
import Link from 'next/link';

export default function NotFoundPageTemplate() {
  return (
    <div className={styles.page}>
      <GlitchText text='404NotFound'/>;
      <Link href='/'  className={styles.link}>To main page.</Link>
    </div>
  )
}