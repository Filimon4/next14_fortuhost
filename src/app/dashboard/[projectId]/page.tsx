import React from 'react'

import styles from './ProjectId.module.scss'
import ProjectHeader from '@/components/Projects/ProjectHeader'
import ProjectInstances from '@/components/Projects/ProjectInstances'
import ProjectLogs from '@/shared/ui/Project/ProjectLogs'

const Project = () => {
  return (
    <>
      <ProjectLogs />
      <section className={styles.current_project}>
        <section className={styles.project_header}>
          <ProjectHeader />
        </section>
        <section className={styles.project_instances}>
          <ProjectInstances />
        </section>
      </section>
    </>
  )
}

export default Project