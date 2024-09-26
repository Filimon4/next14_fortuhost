'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import styles from "./Dashboard.module.scss";
import BoardTitle from '@/components/Dashboard/PreviewBoard';
import BoardProject from '@/components/Dashboard/ProjectBoard';

const Dashboard = () => {
  const pathname = usePathname()
  if (pathname) {
    console.log(pathname)
  }

  return (
    <section className={styles.dashboard_projects}>
      <BoardTitle />
      <BoardProject />
    </section>
  )
}

export default Dashboard