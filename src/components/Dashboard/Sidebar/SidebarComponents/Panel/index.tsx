import React from 'react'

import cn from 'classnames';

import Image from 'next/image'

import styles from './Panel.module.scss'
import { SidebarConfig } from '@/shared/config/config';

const Panel = ({hideMode}: {hideMode: boolean}) => {
  
  
  return (
    <section className={cn(styles.sidebar_panel, {[styles.sidebar_panel_hide]: hideMode == false})}>
      {SidebarConfig.panel.map((field, indx) => (
        <article>
            <Image src={field.img} alt='' width={24} height={24}/>
            {hideMode && <>
              <p>{field.text}</p>
            </>}
        </article>
      ))}
    </section>
  )
}

export default Panel