import React, { useContext, useState } from 'react'
import cn from 'classnames'

import styles from './Settings.module.scss'

import Image from 'next/image'
import { ESidebarButtons, SidebarConfig } from '@/shared/config/config'
import SidebarField from '@/shared/ui/SidebarField/SidebarField'
import { SidebarPanelContext } from '@/shared/context/SidebarPanelsContext'

const Settings = ({hideMode}: {hideMode: boolean}) => {
  const {setPanel} = useContext(SidebarPanelContext)

  const openSetting = () => {
    setPanel(ESidebarButtons.settings)
  }

  return (
    <section className={cn(styles.sidebar_settings, {[styles.sidebar_settings_hide]: hideMode == false})}>
      {SidebarConfig.settings.map((field, indx) => {
        if (field.type == ESidebarButtons.settings) {
          return <SidebarField key={indx} field={field} hideMode={hideMode} onClick={openSetting} />
        }
        return <SidebarField key={indx} field={field} hideMode={hideMode} onClick={() => {}} />
      })}
    </section>
  )
}

export default Settings