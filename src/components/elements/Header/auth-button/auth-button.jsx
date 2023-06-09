'use client';

import { useContext } from 'react';
import styles from './auth-button.module.css';
import { AuthContext } from '@/contexts';

export default function AuthButton({ handler = () => false}) {
  const session = useContext(AuthContext);

  return (
    <button 
      type='button' 
      className={styles.button}
      onClick={handler}
    >
      SignIn
    </button>
  )
}