import React, { useState } from 'react'

import styles from "./Dashboard.module.scss";
import BoardTitle from '@/components/Dashboard/PreviewBoard';
import BoardProject from '@/components/Dashboard/ProjectBoard';

const Dashboard = () => {
  return (
    <section className={styles.dashboard_projects}>
      <BoardTitle />
      <BoardProject />
    </section>
  )
}

export default Dashboard