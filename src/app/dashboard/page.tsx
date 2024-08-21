import React, { useState } from 'react'

import styles from "./Dashboard.module.scss";
import BoardTitle from '@/components/Dashboard/PreviewBoard/BoardTitle';
import BoardProject from '@/components/Dashboard/ProjectBoard/BoardProject';
import Sidebar from '@/components/Dashboard/Sidebar/Sidebar';

const Dashboard = () => {

  return (
    <section>
      <Sidebar />
      <section className={styles.dashboard_projects}>
        <BoardTitle />
        <BoardProject />
      </section>
    </section>
  )
}

export default Dashboard