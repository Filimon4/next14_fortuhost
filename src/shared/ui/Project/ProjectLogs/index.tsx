'use client';
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import styles from './ProjectLogs.module.scss'
import cn from 'classnames'
import Image from 'next/image'

import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const ProjectLogs = () => {
  const [openLogs, setOpenLogs] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return <></>

  return createPortal(
    <div className={cn(styles.project_logs, {[styles.project_logs_close]: openLogs == false })}>
      <article className={styles.project_container}>
        <div className={styles.project_console}>
          <textarea name="console" id="" className={styles.project_area} disabled>
          </textarea>
        </div>
        <div className={styles.project_button} onClick={e => setOpenLogs(!openLogs)}>
          <p className={audiowide.className}>
            LOGS
            <Image src={'/icons/dashboard/sidebar/profile/pointer.svg'} alt={''} height={12} width={12} />
          </p>
        </div>
      </article>
    </div>,
    document.body
  )
}

export default ProjectLogs