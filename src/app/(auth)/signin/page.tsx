import React from 'react'
import Link from 'next/link'

import SigninForm from '@/components/Auth/SigninForm'
import SocialLinks from '@/components/Auth/AuthComponents/SocialLinks'

import styles from './Singin.module.scss'
import { RouteConfig } from '@/shared/config/navigation'

const SignIn = () => {
  return (
    <section className={styles.signin}>
      <h1 className={styles.signin_title}>С возвращением !</h1>
      <SigninForm />
      <Link href={RouteConfig.REGISTRATION} className={styles.signin_change}>Нет учетной записи?</Link>
      <SocialLinks />
    </section>
  )
}

export default SignIn