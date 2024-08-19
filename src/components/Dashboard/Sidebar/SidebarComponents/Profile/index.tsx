'use client'
import React, { useState } from 'react';
import cn from 'classnames';

import Image from 'next/image';

import styles from "./Profile.module.scss";

const Profile = ({hideMode}: {hideMode: boolean}) => {
  const [openProfile, setOpenProfile] = useState<boolean>(false)

  const onClickOpenProfile = () => {
    setOpenProfile(!openProfile)
  }

  return (
    <section className={cn(
      {[styles.profile_hide]: hideMode == false},
      {[styles.sidebar_profile]: hideMode == true},
      {[styles.sibebar_profile_open]: openProfile == true && hideMode == true}
    )}>
      <div className={cn(styles.profile)}>  
        <Image
          src={'/icons/dashboard/sidebar/profile/anon.png'} alt=''
          width={36} height={36}
        />
        {hideMode == true && <>
          <div className={styles.profile_data}>
            <p>Nickname</p>
            <p>₽ {1231.33}</p>
          </div>
          <Image
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
  )
}

export default Profile