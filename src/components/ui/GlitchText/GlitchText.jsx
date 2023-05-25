import styles from './GlitchText.module.css'

export default function GlitchText({ text }) {
  return (
    <p className={`
      ${styles.hero}
      ${styles.glitch}
      ${styles.layers}
    `}
    data-text={text}><span>{text}</span></p>
  )
}