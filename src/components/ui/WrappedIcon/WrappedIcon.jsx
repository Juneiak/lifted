import styles from './WrappedIcon.module.css';

export default function WrappedIcon({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}