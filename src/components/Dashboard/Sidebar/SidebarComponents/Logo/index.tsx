import React from 'react'
import cn from 'classnames'
import Image from 'next/image';
import { Audiowide } from 'next/font/google';

import styles from './Logo.module.scss'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import { RouteConfig } from '@/shared/config/navigation';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const Logo = ({hideMode}: {hideMode: boolean}) => {
  const router = useRouter()

  useGSAP(() => {
    if (hideMode == true) {
      gsap.fromTo('#logo_text', {opacity: 0}, {opacity: 1, delay: 0.05, duration: 0.12})
    }
  }, [hideMode])

  return (
    <div className={styles.sidebar_logo}>
        <div className={styles.logo_img_container}>
          <div className={styles.logo_hightlihgt}>
            <Image src={'/icons/dashboard/sidebar/logo.svg'} alt='' width={40} height={40} />
          </div>
        </div>
        {hideMode && <>
          <span id='logo_text' className={cn(styles.sidebar_text, audiowide.className)}>
              FortuHost
          </span>
        </>}
    </div>
  )
}

export default Logo