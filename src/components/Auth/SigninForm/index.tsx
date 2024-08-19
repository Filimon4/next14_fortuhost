'use client'

import React from 'react'

import styles from './SigninForm.module.scss'

import { SignInConfig } from '@/shared/config/config'

const SigninForm = () => {

  const onSubmitSignin = (e: any) => {
    console.log(e)
  }

  return (
    <form onSubmit={e => onSubmitSignin(e)} className={styles.signin_form}>
      <div className={styles.form_unit}>
        <label>Email</label>
        <input className={styles.form_input} type='text' placeholder="anymail@mail.com" />
      </div>
      <div className={styles.form_unit}>
        <label>Password</label>
        <input className={styles.form_input} type='text' placeholder="" />
      </div>
      <button className={styles.form_submit}>Войти</button>
    </form>
  )
}

export default SigninForm