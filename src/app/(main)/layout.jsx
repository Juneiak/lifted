import styles from './layout.module.css';
import {
  Header,
  Footer,
} from '@/components/elements'

export default function MainLayout({ children }) {

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}