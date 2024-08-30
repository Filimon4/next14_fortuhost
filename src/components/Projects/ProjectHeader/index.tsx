'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'

import styles from './ProjectHeader.module.scss'
import ProjectHeaderButton from '@/shared/ui/Project/ProjectHeaderButton'
import ProjectInstanceModal from '@/shared/ui/Project/ProjectInstanceModal'
import { EInstanceTypes } from '@/shared/config/config'

const ProjectHeader = () => {
  const [openCreateInstance, setOpenCreateInstance] = useState<EInstanceTypes | null>(EInstanceTypes.setup)

  const closeCreateInstance = () => {
    setOpenCreateInstance(null)
  }

  const chooseCreateInstanceType = (t: EInstanceTypes) => {
    setOpenCreateInstance(t)
  }

  const addInstance = (e: React.MouseEvent) => {
    setOpenCreateInstance(EInstanceTypes.setup)
  }

  const openSettings = (e: React.MouseEvent) => {

  }

  const openInstaceCreate = useMemo(() => {
    switch (openCreateInstance) {
      case (EInstanceTypes.setup):
        return <ProjectInstanceModal onClose={closeCreateInstance} onChoose={chooseCreateInstanceType} />
      case (EInstanceTypes.github):
        return <></>;
      case (EInstanceTypes.docker):
        return <></>;
      case (EInstanceTypes.mysql):
        return <></>;
      case (EInstanceTypes.nginx):
        return <></>;
      case (EInstanceTypes.redis):
        return <></>;
      default:
        return <></>;
    }
  }, [openCreateInstance])

  return (
    <>
      <div className={styles.project_header}>
        <h1 className={styles.header_title}>Test name</h1>
        <div className={styles.header_toolbar}>
          <Image src={'/icons/dashboard/project/project_start_disabled.svg'} alt={''} width={40} height={40}/>
          <Image src={'/icons/dashboard/project/project_pause_disabled.svg'} alt={''} width={40} height={40}/>
          <Image src={'/icons/dashboard/project/project_stop_disabled.svg'} alt={''} width={40} height={40}/>
          <Image src={'/icons/dashboard/project/project_restart_disabled.svg'} alt={''} width={40} height={40}/>
        </div>
        <div className={styles.header_create}>
          <ProjectHeaderButton onClick={addInstance} text={'Добавить'} imgSize={24} img={'/icons/dashboard/add.svg'} hoverImgSize={29} hoverImg={'/icons/dashboard/add_light.svg'} />
          <ProjectHeaderButton onClick={openSettings} text={'Настройка'} imgSize={24} img={'/icons/dashboard/sidebar/settings.svg'} hoverImgSize={33} hoverImg={'/icons/dashboard/sidebar/settings_light.svg'} />
        </div>
      </div>  
      {openCreateInstance != null && <>
        {openInstaceCreate}
      </>}
    </>
  )
}

export default ProjectHeader