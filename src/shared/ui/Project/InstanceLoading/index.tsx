import React, { useEffect } from 'react'
import Image from 'next/image'

import styles from './InstanceLoading.module.scss'
import { EInstanceTypes, InstanceIcon } from '@/shared/config/config'
import Loading from '../../Loading/Loading'

const InstanceLoading = ({
  instanceType,
  instanceName
} : {
  instanceType: EInstanceTypes,
  instanceName: string
}) => {

  useEffect(() => {

  }, [])

  return (
    <div className={styles.project}>
      <p>
        <Image style={{filter: 'grayscale(100%)'}} alt='' width={24} height={24} src={InstanceIcon[EInstanceTypes.mysql]} />
        {instanceName}
      </p>
      <div className={styles.project_toolbar}>
        <Image style={{filter: 'grayscale(100%)'}} src={'/icons/dashboard/project/project_start.svg'} alt={''} width={24} height={24}/>
        <Image style={{filter: 'grayscale(100%)'}} src={'/icons/dashboard/project/project_pause.svg'} alt={''} width={24} height={24}/>
        <Image style={{filter: 'grayscale(100%)'}} src={'/icons/dashboard/project/project_stop.svg'} alt={''} width={24} height={24}/>
        <Image style={{filter: 'grayscale(100%)'}} src={'/icons/dashboard/project/project_restart.svg'} alt={''} width={24} height={24}/>
      </div>
      <Image style={{filter: 'grayscale(100%)'}} className={styles.projcet_bin} src={'/icons/instance/bin.svg'} alt={''} width={24} height={24} />
    </div>
  )
}
  
export default InstanceLoading