'use client'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import cn from 'classnames';

import Image from 'next/image';

import styles from "./Profile.module.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL, ESidebarButtons } from '@/shared/config/config';
import { useRouter } from 'next/navigation';
import { RouteConfig } from '@/shared/config/navigation';
import { IUser } from '@/shared/models/config';
import { SidebarPanelContext } from '@/shared/context/SidebarPanelsContext';

const Profile = ({hideMode}: {hideMode: boolean}) => {
  const {setPanel} = useContext(SidebarPanelContext)
  const router = useRouter()
  const [openProfile, setOpenProfile] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>({
    id: 0,
    email: '',
    phone: '',
    username: ''
  })
  
  useLayoutEffect(() => {
    if (window) {
      if (sessionStorage.getItem('authInfo')) {
        setUser(JSON.parse(String(sessionStorage.getItem('authInfo'))) as IUser)
      }
    }
  }, [])

  const onClickOpenProfile = () => {
    setOpenProfile(!openProfile)
  }

  // const queryLogout = useQuery({
  //   queryKey: ['logout'],
  //   queryFn: () => {
  //     return axios.get(`${BASE_URL}/auth/logout`)
  //   },
  //   enabled: false,
  //   refetchOnWindowFocus: false,
  //   refetchOnMount: false,
  // })

  // useLayoutEffect(() => {
  //   if (queryLogout.isSuccess) {
  //     sessionStorage.removeItem('authInfo')
  //     router.push(RouteConfig.LOGIN)
  //   }
  // }, [queryLogout.isSuccess, queryLogout.data])
 
  useGSAP(() => {
    if (hideMode == true) {
      gsap.fromTo("#profile_nikname", {opacity: 0}, {opacity: 1, delay: 0.1, duration: 0.12})
      gsap.fromTo("#profile_value", {opacity: 0}, {opacity: 1, delay: 0.1, duration: 0.12})
      gsap.fromTo("#arrow_options", {opacity: 0}, {opacity: 1, delay: 0.1, duration: 0.12})
    }
  }, [hideMode])

  useGSAP(() => {
    if (openProfile == true && hideMode == false) {
      gsap.fromTo("#profile", {height: '50px'} , { height: '170px', delay: 0, duration: 0.05})
    } else {
      gsap.to("#profile", {height: 'fit-content'})
    }
  }, [openProfile])

  return (
    <div className={cn(
      styles.sidebar_profile
    )}
    >
      <section id='profile' className={cn(
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
                {user.username}
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
            <article onClick={e => setPanel(ESidebarButtons.profile)}>
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