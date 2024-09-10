import React, { useContext, useState } from 'react'
import Image from 'next/image'

import styles from './ProfileUser.module.scss'
import { SidebarPanelContext } from '@/shared/context/SidebarPanelsContext'
import InputPassword from '@/shared/ui/InputPassword/InputPassword'

const ProfileUser = () => {
  const {setPanel} = useContext(SidebarPanelContext)
  const [name, setName] = useState('')
  const [emaill, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onClickClose = () => {
    setPanel(null)
  }

  const onFormSubmit = () => {

  }

  return (
    <section className={styles.profile}>
      <div className={styles.profile_header}>
        <h1 className={styles.profile_title}>Профиль</h1>
        <Image onClick={onClickClose} className={styles.profile_close} src={'/icons/close.svg'} alt='' width={28} height={28} />
      </div>
      <div className={styles.profile_user}>
        <p>Информация</p>
        <Image src='/icons/dashboard/anon_big.png' alt='' width={200} height={200} />
      </div>
      <form onSubmit={onFormSubmit}>
        <div className={styles.profile_name}>
          <label>Отображаемое имя</label>
          <input type="text" />
        </div>
        <div className={styles.profile_email}>
          <label>Email</label>
          <input type="text" />
        </div>
        <div className={styles.profile_password}>
          <label>Password</label>
          <InputPassword value={password} setValue={(e) => setPassword(e.target.value)} thick='thin' />
        </div>
        <button className={styles.profile_submit}>Сохранить</button>
      </form>
    </section>
  )
}

export default ProfileUser