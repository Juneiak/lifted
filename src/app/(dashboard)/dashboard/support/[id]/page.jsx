import styles from './page.module.css';
import { NotReadyPageTemplate } from '@/components/templates';

export default function CurrentIssue() {
  return (
    <NotReadyPageTemplate pageName={`Current issue ${params.id}`}/>
  )
}