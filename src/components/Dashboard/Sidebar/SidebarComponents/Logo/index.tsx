import React from 'react'
import cn from 'classnames'
import Image from 'next/image';
import { Audiowide } from 'next/font/google';

import styles from './Logo.module.scss'

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const Logo = ({hideMode}: {hideMode: boolean}) => {
  return (
    <div className={styles.sidebar_logo}>
        <div className={styles.logo_img}>
          <Image src={'/icons/dashboard/sidebar/logo.svg'} alt='' width={35} height={35} />
        </div>
        {hideMode && <>
          <span className={cn(styles.sidebar_text, audiowide.className)}>
              FortuHost
          </span>
        </>}
    </div>
  )
}

export default Logo