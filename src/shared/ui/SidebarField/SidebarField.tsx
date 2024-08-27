"use client";
import React, { useState } from 'react'
import cn from 'classnames';
import Image from 'next/image'

import styles from './SidebarField.module.scss'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SidebarField = ({
  field,
  hideMode,
  onClick
}: {
  field: {img: string, text: string, hover: string, imgSize: number, hoverSize: number},
  hideMode: boolean,
  onClick: () => void
}) => {
  const [onHover, setOnHover] = useState<boolean>(false)
  
  useGSAP(() => {
    if (hideMode == true) {
      gsap.fromTo('#unit_text', {opacity: 0}, {opacity: 1, delay: 0.05, duration: 0.12})
    }
  }, [hideMode])

  return (
    <article onClick={onClick} className={cn(styles.sidebar_unit, {[styles.sidebar_unit_open]: hideMode})} onMouseEnter={e => setOnHover(true)} onMouseLeave={e => setOnHover(false)}>
        <div className={styles.sidebar_unit_img}>
          <Image src={onHover ? field.hover : field.img} alt='' width={!onHover ? field.imgSize : field.hoverSize} height={!onHover ? field.imgSize : field.hoverSize}/>
        </div>
        {hideMode && <>
          <p id="unit_text" className={styles.sidebar_unit_text}>{field.text}</p>
        </>}
    </article>
  )
}

export default SidebarField