import React from 'react'
import Image from 'next/image'

import { OAuthTypes } from '@/shared/config/config'

import styles from './SocialLinks.module.scss'

const SocialLinks = () => {
  return (
    <div className={styles.social}>
      {OAuthTypes.list.map((logo, indx) => (
        <div key={indx}>
          <Image src={`icons/${logo.img}`} alt={logo.label} width={30} height={30}/>
        </div>
      ))}
    </div>
  )
}

export default SocialLinks