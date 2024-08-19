'use client'

import React, { useState } from 'react'
import cn from 'classnames'

import styles from './SignupForm.module.scss'

import { SignUpConfig } from '@/shared/config/config'
import useAuthValidation from '@/shared/hooks/useValidationForm'
import { regSchema, TErrorMessage } from '@/shared/models/registrationConfig'

const SignupForm = () => {

  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState<TErrorMessage | undefined>()

  const onSubmitSignin = (e: any) => {
    e.preventDefault()
    setSignupData({email: '', password: '', confirmPassword: ''})
    console.log(e)
  }

  const { errors, validateInput, getError } = useAuthValidation(
    { email: signupData.email, password: signupData.password, confirmPassword: signupData.confirmPassword },
    regSchema,
    error
  )

  return (
    <form onSubmit={e => onSubmitSignin(e)} className={styles.signup_form}>
      <div className={styles.form_unit}>
        <label>Email</label>
        <input 
          className={cn(styles.form_input, {
            [styles.form_invalidinput]: !!getError('email')
          })}
          type='text'
          placeholder="anymail@mail.com"
          value={signupData.email}
          onChange={(i: React.ChangeEvent<HTMLInputElement>) => {
            setSignupData({...signupData, email: i.target.value})
            validateInput('email', i.target.value),
            setError(undefined)
          }}
        />
        {!!getError('email') && <>
          <p className={styles.form_invalidtext}>{getError('email')}</p>
        </>}
      </div>
      <div className={styles.form_unit}>
        <label>Password</label>
        <input
          className={cn(styles.form_input, {
            [styles.form_invalidinput]: !!getError('password')
          })}
          type='text'
          placeholder=""
          value={signupData.password}
          onChange={(i: React.ChangeEvent<HTMLInputElement>) => {
            setSignupData({...signupData, password: i.target.value})
            validateInput('password', i.target.value)
            setError(undefined)
          }}
        />
        {!!getError('password') && <>
          <p className={styles.form_invalidtext}>{getError('password')}</p>
        </>}
      </div>
      <div className={styles.form_unit}>
        <label>Repeat password</label>
        <input
          className={cn(styles.form_input, {
            [styles.form_invalidinput]: !!getError('confirmPassword')
          })}
          type='text'
          placeholder=""
          value={signupData.confirmPassword}
          onChange={(i: React.ChangeEvent<HTMLInputElement>) => {
            setSignupData({...signupData, confirmPassword: i.target.value})
            validateInput('confirmPassword', i.target.value)
            setError(undefined)
          }}
        />
        {!!getError('confirmPassword') && <>
          <p className={styles.form_invalidtext}>{getError('confirmPassword')}</p>
        </>}
      </div>
      <button
        className={styles.form_submit}
        disabled={
          !!errors.length ||
          !signupData.email ||
          !signupData.password ||
          !signupData.confirmPassword
        }
      >
        Зарегистрироваться
      </button>
    </form>
  )
}

export default SignupForm