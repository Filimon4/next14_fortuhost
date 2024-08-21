'use client'
import React, { useRef, useState } from 'react'
import cn from 'classnames'

import styles from "./BoardProject.module.scss";
import Image from 'next/image';
import ProjectModal from '../ProjectModal/ProjectModal';

const BoardProject = () => {
  const [hoverProject, setHoverProject] = useState(false)
  const [openCreateProject, setOpenCreateProject] = useState(false)

  const addProject = () => {
    setOpenCreateProject(true)
  }

  return (
    <>
      <div
        className={cn(styles.project_container, {[styles.project_container_hover]: hoverProject})}
        onMouseEnter={e => setHoverProject(true)}
        onMouseLeave={e => setHoverProject(false)}
        onClick={addProject}
      >
        <div className={styles.app_preview}>
          <div className={styles.preview_img}>
            <Image
              src={!hoverProject ? '/icons/dashboard/add.svg' : '/icons/dashboard/add_light.svg'}
              alt='add project'
              width={!hoverProject ? 60 : 68}
              height={!hoverProject ? 60 : 68}
            />
          </div>
          <div className={styles.prview_desc}>
            <p className={styles.desc_title}>
              Добавьте свой первый проект на python совершенно <span className={cn(styles.title_free, {[styles.title_free_hover]: hoverProject})}>бесплатно!</span>
            </p>
            <p>
              Вы можете загрузить проект из zip-архива, из Github <br /> или создать пустой
            </p>
          </div>
        </div>
      </div>
      {openCreateProject && <>
        <ProjectModal onClose={() => setOpenCreateProject(false)} />
      </>}
    </>
  )
}

export default BoardProject