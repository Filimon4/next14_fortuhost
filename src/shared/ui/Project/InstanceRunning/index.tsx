import React from 'react'
import Image from 'next/image'

import styles from './InstanceRunning.module.scss'
import { EInstanceTypes, InstanceIcon } from '@/shared/config/config'

const InstanceRunning = ({
  instanceType,
  instanceName
} : {
  instanceType: EInstanceTypes,
  instanceName: string
}) => {
  return (
    <div className={styles.project}>
      <p>
        <Image alt='' width={24} height={24} src={InstanceIcon[EInstanceTypes.mysql]} />
        {instanceName}
      </p>
      <div className={styles.project_toolbar}>
        <Image src={'/icons/dashboard/project/project_start.svg'} alt={''} width={24} height={24}/>
        <Image src={'/icons/dashboard/project/project_pause.svg'} alt={''} width={24} height={24}/>
        <Image src={'/icons/dashboard/project/project_stop.svg'} alt={''} width={24} height={24}/>
        <Image src={'/icons/dashboard/project/project_restart.svg'} alt={''} width={24} height={24}/>
      </div>
      <Image className={styles.projcet_bin} src={'/icons/instance/bin.svg'} alt={''} width={24} height={24} />
    </div>
  )
}

export default InstanceRunning