'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { Button, Input } from '@/components/ui'
import { BubbleBackground } from '@/components/elements';

export default function Signin() {
  const [ name, setName ] = useState();
  const [ pass, setPass ]  = useState()
  const handleSignin = () => {
    return false
  }

  return (
    <div className={styles.signin}>
      <BubbleBackground/>
      <div className={styles.container}>
        <p className={styles.title}>Вход в личный кабинет</p>
        <form className={styles.form}>
          {/* {isSigninError && <p className={styles.errorText}>Неверный логин или пароль</p>} */}
          <input 
            type="text"
            value={name}
            name='name'
            placeholder='name'
            onChange={(evt) => setName(evt.target.value)}
          />
          <input 
            type="text"
            value={pass}
            name='pass'
            placeholder='password'
            onChange={(evt) => setPass(evt.target.value)}
          />
          <button type='button' onClick={handleSignin}>
            Signin
          </button>
        </form>
      </div>
    </div>
  )
}