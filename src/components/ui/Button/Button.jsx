"use client";

import styles from './Button.module.css';

export default function Button({
  handler = () => false,
  text = '',
  isDisabled = false,
  type = 'button'
}) {
  return (
    <button
      className={styles.button}
      onClick={handler}
      disabled={isDisabled}
      type={type}
      data-isdisabled={isDisabled}
    >
      {text}
    </button>
  )
}