'use client';

import React, { useRef, useState } from 'react'
import cn from 'classnames'
import styles from "./Sidebar.module.scss";
import Image from 'next/image';
import Profile from './SidebarComponents/Profile';
import TariffPlan from './SidebarComponents/TariffPlan';
import Panel from './SidebarComponents/Panel';
import Settings from './SidebarComponents/Settings';
import Logo from './SidebarComponents/Logo';

const Sidebar = () => {
  const [sidebarHover, setSidebarHover] = useState(false);
  const sidebarRef = useRef(null);

  return (
    <div
    ref={sidebarRef}
    id='sidebar'
    className={cn(styles.sidebar, {[styles.sidebar_hide]: sidebarHover == false})}
    onMouseEnter={e => {
        setSidebarHover(true)
      }}
      onMouseLeave={e => {
        setSidebarHover(false)
      }}
    >
      <Logo hideMode={sidebarHover} />
      <div className={styles.sidebar_main}>
        <Profile hideMode={sidebarHover} />
        <Panel hideMode={sidebarHover} />
        <TariffPlan hideMode={sidebarHover} />
        <Settings hideMode={sidebarHover} />
      </div>
    </div>
  )
}

export default Sidebar