'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import styles from './ProjectId.module.scss'
import ProjectHeader from '@/components/Projects/ProjectHeader'

const Project = () => {
  const router = useParams()

  return (
    <section className={styles.current_project}>
      <ProjectHeader />
    </section>
  )
}

export default Project