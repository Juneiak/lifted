import styles from './page.module.css';
import { NotReadyPageTemplate } from '@/components/templates';

export default function BlogArticle({ params }) {
  return (
    <NotReadyPageTemplate pageName={`Blog article #${params.articleId}`}/>
  )
}