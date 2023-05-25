import styles from './Logo.module.css'

export default function Logo() {
  return <img className={styles.logo} src='./logo.svg' alt='lifted logo' />
}