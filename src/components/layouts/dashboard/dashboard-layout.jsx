import styles from './dashboard-layout.module.css'

export default function DashboardLayout({ title, children }) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  )
}