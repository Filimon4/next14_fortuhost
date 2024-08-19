'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import axios from 'axios'

import styles from './SigninForm.module.scss'

import { BASE_URL, SignInConfig } from '@/shared/config/config'
import { useMutation, useQuery } from '@tanstack/react-query'
import InputPassword from '@/shared/ui/InputPassword/InputPassword'

const SigninForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const mutationLogin = useMutation({
    mutationFn: (user: {email: string, password: string}) => {
      return axios.post(`${BASE_URL}/api/auth/login`, user)
    },
    onSuccess: () => {
      sessionStorage.setItem('authInfo', mutationLogin.data?.data)
      router.push('/dashbaord')
    }
  })

  const onSubmitSignin = (e: any) => {
    e.preventDefault()
    mutationLogin.mutate({
      email,
      password
    })
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
      <button className={styles.form_submit}>Войти</button>
    </form>
  )
}

export default SigninForm