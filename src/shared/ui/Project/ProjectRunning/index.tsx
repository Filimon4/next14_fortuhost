import React from 'react'
import Image from 'next/image'

import styles from './ProjectRunning.module.scss'
import ProgressBar from '../ProjectComponents/ProgressBar'

const ProjectRunning = ({name}: {name: string}) => {
  return (
    <div className={styles.project}>
      <Image className={styles.project_settings} src={'/icons/dashboard/sidebar/settings.svg'} alt={''} width={24} height={24} />
      <p className={styles.project_title}>{name}</p>
      <div className={styles.project_params}>
        <ProgressBar precent={75} urlImg={'/icons/dashboard/project/ram.svg'} />
        <ProgressBar precent={40} urlImg={'/icons/dashboard/project/cpu.svg'} />
        <ProgressBar precent={100} urlImg={'/icons/dashboard/project/hdd.svg'} />
      </div>
      <div className={styles.project_toolbar}>
        <Image src={'/icons/dashboard/project/project_start.svg'} alt={''} width={24} height={24}/>
        <Image src={'/icons/dashboard/project/project_pause.svg'} alt={''} width={24} height={24}/>
        <Image src={'/icons/dashboard/project/project_stop.svg'} alt={''} width={24} height={24}/>
        <Image src={'/icons/dashboard/project/project_restart.svg'} alt={''} width={24} height={24}/>
      </div>
    </div>
  )
}

export default ProjectRunning