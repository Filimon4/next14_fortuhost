import React from 'react'

import styles from './ProjectMysq.module.scss'
import { EInstanceTypes, InstancesConfig, InstancesSetupConfig } from '@/shared/config/config'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import useOutsideClick from '@/shared/hooks/useOutsideClick'

const instanceSetup = InstancesSetupConfig.find((obj) => obj.type == EInstanceTypes.mysql)

const ProjectMysqlModal = ({
  onClose,
  onAccept
}: {
  onClose: () => void,
  onAccept: (e: EInstanceTypes) => void
}) => {
  const modalRef = useOutsideClick(() => {
    onClose()
  })

  return createPortal(
    <section ref={modalRef} className={styles.mysql}>
      <h1 className={styles.mysql_header}>
        <Image src={String(instanceSetup?.img)} alt='img' width={24} height={24} />
        {instanceSetup?.title}
      </h1>
      <div className={styles.mysql_form}>
        {InstancesConfig[EInstanceTypes.mysql].map((row, i) => (
          <div key={i} className={styles.mysql_form_container}>
            {(row.type == 'text' || row.type == 'password') && <>
              <input className={styles.mysql_from_unit} type={row.type} placeholder={row.placeholder}  />
            </>}
            {row.type == 'select' && <>
              <select className={styles.mysql_from_unit}>
                {row.options!.map((opt, indx) => (
                  <option key={indx} value={opt.value}>{opt.text}</option>
                ))}
              </select>
            </>}
          </div>
        ))}
      </div>
      <button className={styles.mysql_button}>Добавить</button>
    </section>,
    document.body
  )
}

export default ProjectMysqlModal