'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import styles from './ProjectHeader.module.scss'

const ProjectHeaderButton = ({
  text,
  img,
  imgSize,
  hoverImg,
  hoverImgSize,
  onClick
}:{
  text: string,
  img: string,
  imgSize: number
  hoverImg: string,
  hoverImgSize: number,
  onClick: (e: React.MouseEvent) => void
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div className={styles.create_button} onClick={onClick} onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
      <p className={styles.button_text}>
        <span className={styles.text_img}>
          <Image
            src={!hover ? img : hoverImg}
            alt='add project'
            width={!hover ? imgSize : hoverImgSize}
            height={!hover ? imgSize : hoverImgSize}
          />
        </span>
        {text}
      </p>
    </div>
  )
}

export default ProjectHeaderButton