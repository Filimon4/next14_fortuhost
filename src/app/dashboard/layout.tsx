import React from 'react'

import styles from "./Dashboard.module.scss";
import Sidebar from '@/components/Dashboard/Sidebar/Sidebar';

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.dashboard_main}>
      <Sidebar />
      {children}
    </div>
  )
}

export default DashboardLayout