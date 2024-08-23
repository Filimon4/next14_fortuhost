import React, { useContext } from 'react'
import cn from 'classnames'

import styles from './TariffPlan.module.scss'

import Image from 'next/image'

import { Audiowide } from 'next/font/google';
import { SidebarPanelContext } from '@/shared/context/SidebarPanelsContext';
import { ESidebarButtons } from '@/shared/config/config';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const TariffPlan = ({hideMode}: {hideMode: boolean}) => {
  const {setPanel} = useContext(SidebarPanelContext)

  const onClickChangeTariff = (e: React.MouseEvent) => {
    e.preventDefault()
    setPanel(ESidebarButtons.tariff)
  }  

  return (
    <div className={styles.sidebar_tariff}>
      <section className={cn(
        styles.tariff_hide,
        {[styles.tariff_open]: hideMode == true}
      )}>
        <div className={cn({[styles.tariff_title_hide]: hideMode == false}, {[styles.tariff_title]: hideMode == true})}>
          {hideMode && <>
            <p>Тарифный план</p>
          </>}
          <Image src={'/icons/dashboard/sidebar/exclamation.svg'} alt='' width={20} height={20} />
        </div>
        {hideMode && <>
          <div className={styles.tariff_plan_name}>
            <p>Разработчик</p>
          </div>
          <div className={styles.tariff_process}>
            <span className={audiowide.className}>E</span>
            <div className={styles.process_bar_container}>
              <div className={styles.process_bar} />
            </div>
            <span className={audiowide.className}>F</span>
          </div>
        </>}
        <div className={cn(styles.tariff_deadline, {[styles.tariff_deadline_hide]: hideMode == false})}>
          {hideMode ? <>
            <p>Действует до: <span className={audiowide.className} >03.09.23</span></p>
          </> : <>
            <span className={audiowide.className}>03</span>
            <span className={audiowide.className}>09</span>
            <span className={audiowide.className}>23</span>
          </>}
        </div>
        {hideMode && <>
          <a onClick={onClickChangeTariff} className={styles.tariff_plan}>Изменить тарифный план</a>
        </>}
      </section>
    </div>
  )
}

export default TariffPlan