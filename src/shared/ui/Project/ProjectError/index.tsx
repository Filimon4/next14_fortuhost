import React, { useState } from 'react'
import Image from 'next/image'

import styles from './ProjectError.module.scss'

const ProjectError = ({
  name
}:{
  name: string
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div className={styles.project} onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
      <Image className={styles.project_settings} src={'/icons/dashboard/sidebar/settings.svg'} alt={''} width={24} height={24} />
      <p className={styles.project_title}>{name}</p>
      <div className={styles.project_error}>
        {hover ? <>
          <Image src={'/icons/dashboard/project/project_error_hover.svg'} alt='' width={60} height={60} />
        </> : <>
          <Image src={'/icons/dashboard/project/project_error.svg'} alt='' width={50} height={50} />
        </>}
      </div>
      <div className={styles.project_toolbar}>
        <Image src={'/icons/dashboard/project/project_start_disabled.svg'} alt={''} width={24} height={24}/>
        <Image src={'/icons/dashboard/project/project_pause_disabled.svg'} alt={''} width={24} height={24}/>
        <Image src={'/icons/dashboard/project/project_stop_disabled.svg'} alt={''} width={24} height={24}/>
        <Image src={'/icons/dashboard/project/project_restart_disabled.svg'} alt={''} width={24} height={24}/>
      </div>
    </div>
  )
}

export default ProjectError