import React from 'react'
import Image from 'next/image'
import cn from 'classnames';

import styles from './Panel.module.scss'

import { SidebarConfig } from '@/shared/config/config';
import SidebarField from '@/shared/ui/SidebarField/SidebarField';

const Panel = ({hideMode}: {hideMode: boolean}) => {
  
  return (
    <section className={cn(styles.sidebar_panel, {[styles.sidebar_panel_hide]: hideMode == false})}>
      {SidebarConfig.panel.map((field, indx) => (
        <SidebarField field={field} hideMode={hideMode} indx={indx} onClick={() => {}} />
      ))}
    </section>
  )
}

export default Panel