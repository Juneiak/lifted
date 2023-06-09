import styles from './page.module.css';
import { NotReadyPageTemplate } from '@/components/templates';

export default function CurrentAds({ params }) {
  return (
    <NotReadyPageTemplate pageName={`Current ads ${params.id}`}/>
  )
}