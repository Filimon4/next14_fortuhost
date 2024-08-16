import React from 'react'

import styles from "./Sidebar.module.scss";
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_logo}>
          <Image src={'/icons/dashboard/sidebar/logo.svg'} alt='' width={35} height={35} />

      </div>
      <div className={styles.sidebar_main}>
        <div className={styles.sidebar_profile}>
        </div>
        <section className={styles.sidebar_panel}>
          <article>
              <Image src={'/icons/dashboard/sidebar/house.svg'} alt='' width={24} height={24}/>
              <p>Мои проекты</p>
          </article>
          <article>
              <Image src={'/icons/dashboard/sidebar/panel.svg'} alt='' width={24} height={24}/>
              <p>Панель управления</p>
          </article>
          <article>
              <Image src={'/icons/dashboard/sidebar/bank_card.svg'} alt='' width={24} height={24}/>
              <p>Счет</p>
          </article>
        </section>
        <div className={styles.sidebar_plan}>
          plan
        </div>
        <section className={styles.sidebar_settings}>
          <article>
              <Image src={'/icons/dashboard/sidebar/settings.svg'} width={24} height={24} alt=''/>
              <p>Настройки</p>
          </article>
          <article>
              <Image src={'/icons/dashboard/sidebar/chat.svg'} width={24} height={24} alt=''/>
              <p>Поддержка</p>
          </article>
          <article>
              <Image src={'/icons/dashboard/sidebar/question.svg'} width={24} height={24} alt=''/>
              <p>FAQ</p>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Sidebar