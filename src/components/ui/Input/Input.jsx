"use client";

import styles from './Input.module.css'

export default function Input({
  type='text',
  placeholder='',
  value,
  isValid=true,
  name,
  changeHandler,
  label=false,
  id='',
  minLength,
  maxLength,
  required=false,
  
}) {
  return (
    <div className={styles.container}>
      {label && <label for={id}>{label}</label>}
      <input
        data-isvalid={isValid}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
      />
    </div>

  )
}