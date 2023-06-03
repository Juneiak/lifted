import styles from './page.module.css';
import Image from 'next/image';
import { MdOutlineLanguage } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>MAIN</h1>
      <section className={styles.mapTable}>

        <div className={styles.tableContainer}>
          <div className={styles.about}>
            <div><MdOutlineLanguage color='#fff' /></div>
            <p>General Statistics</p>
          </div>
          <table className={styles.table}></table>

        </div>

        <div className={styles.map}>
          <Image src='/map.png' fill={true}/>
        </div>
      </section>
    </div>
  )
}