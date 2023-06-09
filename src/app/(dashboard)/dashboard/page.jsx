import styles from './page.module.css';

import { MapTable, StatisticChart } from '@/components/elements';
import { DashboardLayout } from '@/components/layouts';

export default function Dashboard() {
  return (
    <DashboardLayout title="Main">
      <MapTable/>
      <section className={styles.charts}>
        <StatisticChart />
        <StatisticChart />
      </section>
    </DashboardLayout>
  )
}