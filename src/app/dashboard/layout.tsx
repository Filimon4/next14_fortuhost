import React from 'react'

import styles from "./Dashboard.module.scss";

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.dashboard_main}>
      {children}
    </div>
  )
}

export default DashboardLayout