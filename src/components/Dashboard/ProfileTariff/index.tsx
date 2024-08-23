import React, { useContext } from 'react'
import Image from 'next/image'

import styles from './TariffPlan.module.scss'
import { SidebarPanelContext } from '@/shared/context/SidebarPanelsContext'
import useOutsideClick from '@/shared/hooks/useOutsideClick'
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const tariffConfig = {
  name: "Разработчик",
  price: 1299,
  ram: '512mb',
  disk: '512mb',
  pricePerMounth: 200,
  date: '03.09.2023'
}

const ProfileTariff = () => {
  const {setPanel} = useContext(SidebarPanelContext)

  const settingsRef = useOutsideClick(() => {
    setPanel(null)
  })

  const onClickClose = () => {
    setPanel(null)
  }

  return (
    <section ref={settingsRef} className={styles.tariff}>
      <div className={styles.tariff_header}>
        <h1 className={styles.tariff_title}>Счёт</h1>
        <Image onClick={onClickClose} className={styles.tariff_close} src={'/icons/close.svg'} alt='' width={28} height={28} />
      </div>
      <h1 className={styles.tariff_bill}>{tariffConfig.price}₽</h1>
      <div className={styles.details_plan}>
        <p className={styles.details_tilte}>Текущий тарифный план</p>
        <a className={styles.details_link}>Изменить тарифный план</a>
      </div>
      <div className={styles.details_data}>
        <div className={styles.data_title}>
          <p>{tariffConfig.name}</p>
          <p className={styles.data_deadline}>Действует до: <span className={audiowide.className}>{tariffConfig.date}</span></p>
        </div>
        <div className={styles.values_stat}>
          <Image src={'/icons/tariffs/develop.svg'} alt='' width={84} height={84} />
          <div className={styles.stat_columns}>
            <div className={styles.stat_row}>
              <p>Объём памяти</p>
              <span className={styles.row_dash}></span>
              <p>{tariffConfig.ram}</p>
            </div>
            <div className={styles.stat_row}>
              <p>Объем хранилища</p>
              <span className={styles.row_dash}></span>
              <p>{tariffConfig.disk}</p>
            </div>
            <div className={styles.stat_row}>
              <p>Стоимость в мес.</p>
              <span className={styles.row_dash}></span>
              <p>{tariffConfig.pricePerMounth}₽</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.tariff_income}>Пополнить счет</button>
    </section>
  )
}

export default ProfileTariff