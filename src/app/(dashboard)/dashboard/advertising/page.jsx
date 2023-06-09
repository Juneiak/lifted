import styles from './page.module.css';
import { DashboardLayout } from '@/components/layouts';
import { Button } from '@/components/ui';
import Row from './_row/row'
import tableData from './tableData.js';

export default function Advertising() {
  return (
    <DashboardLayout title='Рекламные компании'>
      <div className={styles.container}>
        <div className={styles.about}>
          <h2>Список ваших рекламных компаний</h2>
          <p>Представлены все ваши рекламные компании в таблице, для получение подрбной инфы - кликните по РК</p>
          <div className={styles.addButton}><Button text='Создать новую РК'/></div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Название РК или его id</th>
              <th>Локация</th>
              <th>Теги</th>
              <th>Всего показов</th>
              <th>Всего просмотров</th>
              <th>Осталось времени</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {
              tableData.adsList.map((rowData, index) => (
                <Row tagsData={tableData.tagsList} key={index} data={rowData} />
              ))
            }
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}