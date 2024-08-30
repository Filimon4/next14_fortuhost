'use client'
import React from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

import useOutsideClick from '@/shared/hooks/useOutsideClick'
import { EInstanceTypes, InstancesSetupConfig } from '@/shared/config/config'

import styles from './ProjectInstance.module.scss'

const ProjectInstanceModal = ({
  onClose,
  onChoose,
}: {
  onClose: () => void,
  onChoose: (t: EInstanceTypes) => void,
}) => {
  const modalRef = useOutsideClick(() => {
    onClose()
  })

  if (typeof window == 'object')
    return createPortal(
      <div ref={modalRef as React.RefObject<HTMLDivElement>} className={styles.instanceModal}>
        <h1>Добавить</h1>
        {InstancesSetupConfig.map((type, indx) => (
          <div key={indx} className={styles.instance} onClick={e => onChoose(type.type)}>
            <p>
              <Image src={type.img} alt='img' width={24} height={24} />
              {type.title}
            </p>
          </div>
        ))}
      </div>,
      document.body
    )
  else
    return <></>
}

export default ProjectInstanceModal