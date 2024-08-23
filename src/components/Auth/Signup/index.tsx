'use client'

import React, { useEffect, useState } from 'react'
import cn from 'classnames'

import styles from './SignupForm.module.scss'

import { BASE_URL, SignUpConfig } from '@/shared/config/config'
import useAuthValidation from '@/shared/hooks/useValidationForm'
import { regSchema, TErrorMessage } from '@/shared/models/registrationConfig'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { RouteConfig } from '@/shared/config/navigation'
import InputPassword from '@/shared/ui/InputPassword/InputPassword'

const SignupForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<TErrorMessage | undefined>()

  const mutationReg = useMutation({
      mutationFn: (user: { email: string; password: string; confirm_password?: string }) => {
          return axios.post(`${BASE_URL}'/api/auth/register`, user);
      },
      onSuccess: (data, variables, context) => {
        console.log(mutationReg.data)
        sessionStorage.setItem('auhtInfo', mutationReg.data?.data)
        router.push(RouteConfig.DASHBOARD)
      }
  });

  const onSubmitSignin = (e: any) => {
    e.preventDefault()
    mutationReg.mutate({
      email,
      password,
      confirm_password: confirmPassword
    })
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const { errors, validateInput, getError } = useAuthValidation(
    { email, password, confirmPassword },
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
          value={email}
          onChange={(i: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(i.target.value)
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
        <InputPassword
          value={password}
          setValue={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
            validateInput('password', e.target.value)
            setError(undefined)
          }}
          error={!!getError('password')}
        />
        {!!getError('password') && <>
          <p className={styles.form_invalidtext}>{getError('password')}</p>
        </>}
      </div>
      <div className={styles.form_unit}>
        <label>Repeat password</label>
        <InputPassword
          value={confirmPassword}
          setValue={(e: React.ChangeEvent<HTMLInputElement>) => {
            setConfirmPassword(e.target.value)
            validateInput('confirmPassword', e.target.value)
            setError(undefined)
          }}
          error={!!getError('confirmPassword')}
        />
        {!!getError('confirmPassword') && <>
          <p className={styles.form_invalidtext}>{getError('confirmPassword')}</p>
        </>}
      </div>
      <button
        className={styles.form_submit}
        disabled={
          !!errors.length ||
          !email ||
          !password ||
          !confirmPassword
        }
      >
        Зарегистрироваться
      </button>
    </form>
  )
}

export default SignupForm