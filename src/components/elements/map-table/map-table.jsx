import styles from './map-table.module.css';
import Image from 'next/image';
import { MdOutlineLanguage } from "react-icons/md";

export default function MapTable() {
  return (
    <section className={styles.mapTable}>
        <div className={styles.tableContainer}>
          <div className={styles.about}>
            <div><MdOutlineLanguage color='#fff' /></div>
            <p>General Statistics</p>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Country</th>
                <th>Sales</th>
                <th>Value</th>
                <th>Bounce</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>🇷🇺  Russia</td>
                <td>2500</td>
                <td>$230,900</td>
                <td>29.9%</td>
              </tr>
              <tr>
                <td>🇩🇪  Germany</td>
                <td>3.900</td>
                <td>$440,000</td>
                <td>40.22%</td>
              </tr>
              <tr>
                <td>🇬🇧  Great Britain</td>
                <td>1.400</td>
                <td>$190,700</td>
                <td>23.44%</td>
              </tr>
              <tr>
                <td>🇧🇷  Brasil</td>
                <td>562</td>
                <td>$143,960</td>
                <td>32.14%</td>
              </tr>
              <tr>
                <td>🇷🇺  Russia</td>
                <td>2500</td>
                <td>$230,900</td>
                <td>29.9%</td>
              </tr>
              <tr>
                <td>🇩🇪  Germany</td>
                <td>3.900</td>
                <td>$440,000</td>
                <td>40.22%</td>
              </tr>
              <tr>
                <td>🇬🇧  Great Britain</td>
                <td>1.400</td>
                <td>$190,700</td>
                <td>23.44%</td>
              </tr>
              <tr>
                <td>🇧🇷  Brasil</td>
                <td>562</td>
                <td>$143,960</td>
                <td>32.14%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.mapContainer}>
          <div><Image alt='map' src='/map.png' fill={true}/></div>
        </div>
      </section>
    
  )
}