'use client';

import styles from './Row.module.css';

export default function Row({tagsData, data: {
  id,
  createdTime,
  image,
  adName,
  location,
  tags,
  totalImpressions,
  totalViews,
  status,
} }) {
  return (
    <tr className={styles.row}>
      <td className={styles.name}>{adName || id}</td>
      <td className={styles.location}>{location}</td>
      <td className={styles.tags}>{tags}</td>
      <td className={styles.totalImpressions}>{totalImpressions}</td>
      <td className={styles.totalViews}>{totalViews}</td>
      <td className={styles.status}>{adName || id}</td>
      
    </tr>
  )
}