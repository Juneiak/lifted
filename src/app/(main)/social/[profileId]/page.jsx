import styles from './page.module.css';
import { NotReadyPageTemplate } from '@/components/templates';

export default function Profile({ params }) {
  return (
    <NotReadyPageTemplate pageName={`Profile #${params.profileId}`}/>
  )
}