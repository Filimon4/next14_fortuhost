import React from 'react'
import cn from 'classnames'

import styles from './Settings.module.scss'

import Image from 'next/image'
import { SidebarConfig } from '@/shared/config/config'
import SidebarField from '@/shared/ui/SidebarField/SidebarField'

const Settings = ({hideMode}: {hideMode: boolean}) => {
  return (
    <section className={cn(styles.sidebar_settings, {[styles.sidebar_settings_hide]: hideMode == false})}>
      {SidebarConfig.settings.map((field, indx) => (
          <SidebarField indx={indx} field={field} hideMode={hideMode} />
      ))}
    </section>
  )
}

export default Settings