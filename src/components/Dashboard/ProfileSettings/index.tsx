import React, { useContext } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

import styles from './ProfileSettings.module.scss'
import useOutsideClick from '@/shared/hooks/useOutsideClick'
import { SidebarPanelContext } from '@/shared/context/SidebarPanelsContext'

const ProfileSettings = () => {
  const {setPanel} = useContext(SidebarPanelContext)

  const settingsRef = useOutsideClick(() => {
    setPanel(null)
  })

  const onClickClose = () => {
    setPanel(null)
  }

  return createPortal(
    <section ref={settingsRef} className={styles.settings}>
      <div className={styles.settings_header}>
        <h1 className={styles.settings_title}>Настройки</h1>
        <Image onClick={onClickClose} className={styles.settings_close} src={'/icons/close.svg'} alt='' width={28} height={28} />
      </div>
      <div className={styles.settings_container}>
        <p className={styles.container_title}>Уведомления</p>
        <div className={styles.notig_telegram}>
          <p className={styles.telegram_title}><Image src={'/icons/telegram2.svg'} alt='' width={24} height={24} />Telegram</p>
          <p className={styles.telegram_desc}>Подключите ваш аккаунт Telegram для получения уведомлений</p>
          <button className={styles.telegram_button}>Подключить</button>
        </div>
        <form className={styles.notif_form}>
          <div className={styles.notif_checkbox}>
            <input type="checkbox" />
            <label htmlFor="">Падение проекта</label>
          </div>
          <div className={styles.notif_checkbox}>
            <input type="checkbox" />
            <label htmlFor="">Окончание средств на счете</label>
          </div>
        </form>
      </div>
      <div className={styles.settings_container}>
        <p className={styles.container_title}>Реферальная ссылка</p>
        <p className={styles.ref_desc}>Получите «бонус» за каждого пользователя, который зарегистрируется с использованием вашего кода и совершит первую покупку </p>
        <form className={styles.ref_form}>
          <div className={styles.ref_cod}>
            <label className={styles.form_title}>Код</label>
            <input type="text" placeholder='someCode' />
          </div>
          <div className={styles.ref_link}>
            <label className={styles.form_title}>Ссылка</label>
            <input type="text" placeholder='http://Fortuhost.com/111'/>
          </div>
        </form>
      </div>
      <div className={styles.settings_container}>
        <p className={styles.container_title}>Токен</p>
        <form className={styles.token_form}>
          <div className={styles.token_api}>
            <label className={styles.form_title}>Имя</label>
            <input type="text" placeholder='API токен' />
          </div>
          <button className={styles.token_button}>Создать</button>
        </form>
      </div>
    </section>,
    document.body
  )
}

export default ProfileSettings