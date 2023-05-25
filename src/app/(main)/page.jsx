import styles from './page.module.css';
import { PageWaves } from '@/components/ui';

export default function Home() {

  return (
    
    <div className={styles.home}>
      <section className={styles.opening}>
        <div className={styles.texts}>
          <h1>Soft UI Design System Pro</h1>
          <p>Simple and innovative Web UI Kit built on top of Bootstrap 5.<br/> Join over 1.4 million developers around the world.</p>
        </div>
       
        <ul className={styles.cardsList}>
          <li className={styles.card}>
            <p className={styles.numbers}>300+</p>
            <h3 className={styles.cardTitle}>Coded Elements</h3>
            <p className={styles.cardText}>From buttons, to inputs, navbars, alerts or cards, you are covered</p>
          </li>
          <li className={styles.card}>
            <p className={styles.numbers}>100+</p>
            <h3 className={styles.cardTitle}>Design Blocks</h3>
            <p className={styles.cardText}>Mix the sections, change the colors and unleash your creativity</p>
          </li>
          <li className={styles.card}>
            <p className={styles.numbers}>39</p>
            <h3 className={styles.cardTitle}>Pages</h3>
            <p className={styles.cardText}>Save 3-4 weeks of work when you use our pre-made pages for your website</p>
          </li>
        </ul>
        
        <div className={styles.waveContainer}><PageWaves /></div>
      </section>
      
      <section className={styles.rest}></section>
    </div>
  )
}
