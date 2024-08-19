import React from 'react'

import styles from './Signup.module.scss'

const SignUpLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.auth}>
      {children}
    </div>
  )
}

export default SignUpLayout