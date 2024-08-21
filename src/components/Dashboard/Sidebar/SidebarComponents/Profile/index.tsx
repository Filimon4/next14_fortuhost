'use client'
import React, { useState } from 'react';
import cn from 'classnames';

import Image from 'next/image';

import styles from "./Profile.module.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Profile = ({hideMode}: {hideMode: boolean}) => {
  const [openProfile, setOpenProfile] = useState<boolean>(false)

  const onClickOpenProfile = () => {
    setOpenProfile(!openProfile)
  }

  useGSAP(() => {
    if (hideMode == true) {
      gsap.fromTo("#profile_nikname", {opacity: 0}, {opacity: 1, delay: 0.1, duration: 0.12})
      gsap.fromTo("#profile_value", {opacity: 0}, {opacity: 1, delay: 0.1, duration: 0.12})
      gsap.fromTo("#arrow_options", {opacity: 0}, {opacity: 1, delay: 0.1, duration: 0.12})
    }
  }, [hideMode])

  return (
    <div className={cn(
      styles.sidebar_profile
    )}
    >
      <section className={cn(
        styles.profile_hide,
        {[styles.profile_open]: hideMode == true},
        {[styles.profile_options_bottom]: openProfile == true && hideMode == true}
      )}>
        <div className={cn(styles.profile)}>  
          <Image
            src={'/icons/dashboard/sidebar/profile/anon.png'} alt=''
            width={36} height={36}
          />
          {hideMode == true && <>
            <div className={styles.profile_data}>
              <p id="profile_nikname">
                Nickname
              </p>
              <p id="profile_value">
                ₽ {1231.33}
              </p>
            </div>
            <Image
              id="arrow_options"
              className={styles.profile_open_options}
              src={'/icons/dashboard/sidebar/profile/pointer.svg'} alt=''
              width={15} height={7.5}
              onClick={onClickOpenProfile}
            />
          </>}
        </div>
        {openProfile && hideMode == true && <>
          <div className={styles.prfile_options}>
            <article>
              <Image src={'/icons/dashboard/sidebar/profile/person.svg'} alt='' width={18} height={18} />
              <p>Личные настройки</p> 
            </article>
            <article>
              <Image src={'/icons/dashboard/sidebar/profile/logout.svg'} alt='' width={16.83} height={18} />
              <p>Выйти</p>
            </article>
          </div>
        </>}
      </section>
    </div>
  )
}

export default Profile