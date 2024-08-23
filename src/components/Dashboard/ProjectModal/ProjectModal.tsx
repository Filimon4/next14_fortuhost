import React, { useRef, useState } from 'react'

import styles from './ProjectModal.module.scss'
import useOutsideClick from '@/shared/hooks/useOutsideClick'
import { createPortal } from 'react-dom'
import { BASE_URL, ProjetCreateConfig } from '@/shared/config/config'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import ModalRange from '@/shared/ui/ModalRange/ModalRange'

const ProjectModal = ({onClose}: {onClose: () => void}) => {
  const [ramValue, setRamValue] = useState(1)
  const [ssdValue, setSsdValue] = useState(1)
  const [coreValue, setCoreValue] = useState(1)
  const [projectName, setProjectName] = useState('')

  const mutationCreateProject = useMutation({
    mutationFn: (project: {projectName: string, ssdValue: number, coreValue: number, ramValue: number}) => {
      return axios.post(`${BASE_URL}/api/projects`, {project_name: project.projectName})
    },
    onSuccess: () => {
      onClose()
    }
  })

  const refModal = useOutsideClick(() => {
    onClose()
  })

  const sumibCreateProject = (e: React.FormEvent) => {
    e.preventDefault()
    mutationCreateProject.mutate({
      projectName,
      ssdValue,
      coreValue, 
      ramValue
    })
  }

  return createPortal(
      <section ref={refModal} className={styles.modal_project}>
        <h1 className={styles.modal}>Новый проект</h1>
        <form className={styles.modal_form} onSubmit={sumibCreateProject}>
          <input value={projectName} onChange={(e) => setProjectName(e.target.value)} className={styles.form_input} type={ProjetCreateConfig.field[0].type} placeholder={ProjetCreateConfig.field[0].placeholder} />
          <p>Конфигурация</p>
          <div className={styles.form_container}>
            <div className={styles.range_data}>
              <p>{ProjetCreateConfig.field[1].label}</p>
              <p>{ramValue} {ProjetCreateConfig.field[1].prefix}</p>
              <p></p>
            </div>
            <ModalRange value={ramValue} setValue={setRamValue} />
            <div className={styles.range_minmax}>
              <p>{ProjetCreateConfig.field[1].min} {ProjetCreateConfig.field[1].prefix}</p>
              <p>{ProjetCreateConfig.field[1].max} {ProjetCreateConfig.field[1].prefix}</p>
            </div>
          </div>
          <div className={styles.form_container}>
            <div className={styles.range_data}>
              <p>{ProjetCreateConfig.field[2].label}</p>
              <p>{ssdValue} {ProjetCreateConfig.field[2].prefix}</p>
              <p></p>
            </div>
            <ModalRange value={ssdValue} setValue={setSsdValue} />
            <div className={styles.range_minmax}>
              <p>{ProjetCreateConfig.field[2].min} {ProjetCreateConfig.field[2].prefix}</p>
              <p>{ProjetCreateConfig.field[2].max} {ProjetCreateConfig.field[2].prefix}</p>
            </div>
          </div>
          <div className={styles.form_container}>
            <div className={styles.range_data}>
              <p>{ProjetCreateConfig.field[3].label}</p>
              <p>{coreValue} {ProjetCreateConfig.field[3].prefix}</p>
              <p></p>
            </div>
            <ModalRange value={coreValue} setValue={setCoreValue} />
            <div className={styles.range_minmax}>
              <p>{ProjetCreateConfig.field[3].min} {ProjetCreateConfig.field[3].prefix}</p>
              <p>{ProjetCreateConfig.field[3].max} {ProjetCreateConfig.field[3].prefix}</p>
            </div>
          </div>
          <p>{0} руб./сут</p>
          <button disabled={!projectName} className={styles.modal_create}>Добавить</button>
        </form>
      </section>,
      document.body
  )
}

export default ProjectModal