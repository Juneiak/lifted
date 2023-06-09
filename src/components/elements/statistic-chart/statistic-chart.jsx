import styles from './statistic-chart.module.css';
import Image from 'next/image';

export default function StatisticChart() {
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <Image src='/chart.png' alt='lifted chart' fill={true}/>
      </div>
      <div className={styles.about}>
        <p className={styles.tag}>Active Users</p>
        <p className={styles.note}>(+23%) than last week</p>
        <hr />
        <p className={styles.status}>⏱️ updated 4 min ago</p>        
      </div>
    </div>
    
  )
}