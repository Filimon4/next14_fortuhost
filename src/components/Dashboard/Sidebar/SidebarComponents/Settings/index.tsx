import React from 'react'
import cn from 'classnames'

import styles from './Settings.module.scss'

import Image from 'next/image'
import { SidebarConfig } from '@/shared/config/config'

const Settings = ({hideMode}: {hideMode: boolean}) => {
  return (
    <section className={cn(styles.sidebar_settings, {[styles.sidebar_settings_hide]: hideMode == false})}>
      {SidebarConfig.settings.map((field, indx) => (
        <article>
            <Image src={field.img} width={24} height={24} alt=''/>
            {hideMode && <>
              <p>{field.text}</p>
            </>}
        </article>

      ))}
    </section>
  )
}

export default Settings