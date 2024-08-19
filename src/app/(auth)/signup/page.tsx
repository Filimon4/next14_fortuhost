import SocialLinks from '@/components/Auth/AuthComponents/SocialLinks'
import SignupForm from '@/components/Auth/Signup'
import Link from 'next/link'
import React from 'react'

import styles from './Signup.module.scss'
import { RouteConfig } from '@/shared/config/navigation'

const SignUp = () => {
  return (
    <section className={styles.signup}>
      <h1 className={styles.signup_title}>Добро пожаловать!</h1>
      <SignupForm />
      <Link href={RouteConfig.LOGIN} className={styles.signup_change}>Уже есть учётная запись</Link>
      <SocialLinks />
    </section>
  )
}

export default SignUp