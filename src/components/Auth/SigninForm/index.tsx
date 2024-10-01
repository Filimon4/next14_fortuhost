'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

import styles from './SigninForm.module.scss'

import { BASE_URL, SignInConfig } from '@/shared/config/config'
import { useMutation } from '@tanstack/react-query'
import InputPassword from '@/shared/ui/InputPassword/InputPassword'
import { RouteConfig } from '@/shared/config/navigation'

const SigninForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const mutationLogin = useMutation({
    mutationFn: (user: {email: string, password: string}) => {
      return axios.post(`${BASE_URL}/auth/login`, user)
    },
    onSuccess: (data, variables) => {
      console.log(data)
      const dataFetch = data.data
      if (dataFetch.status == 'error') {
        setError(dataFetch.error)
      }
      if (dataFetch.status == 'OK') {
        sessionStorage.setItem('authInfo', JSON.stringify(dataFetch.data))
        router.push(RouteConfig.DASHBOARD)
      }
    }
  })

  const onSubmitSignin = (e: any) => {
    e.preventDefault()
    axios.get(`${BASE_URL}/auth/logout`)
    mutationLogin.mutate({
      email,
      password
    })
    setEmail('')
    setPassword('')
    setError(null)
  }

  return (
    <form onSubmit={e => onSubmitSignin(e)} className={styles.signin_form}>
      <div className={styles.form_unit}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className={styles.form_input} type='text' placeholder="anymail@mail.com" />
      </div>
      <div className={styles.form_unit}>
        <label>Password</label>
        <InputPassword value={password} setValue={(e) => {setPassword(e.target.value)}} />
      </div>
      {error && <>
        <p className={styles.error}>{error}</p>
      </>}
      <button className={styles.form_submit}>Войти</button>
    </form>
  )
}

export default SigninForm