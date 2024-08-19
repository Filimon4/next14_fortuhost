import React from 'react'

import styles from './Singin.module.scss'

const SignInLayout = ({
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

export default SignInLayout