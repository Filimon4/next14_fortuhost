'use client';

import React, { useContext, useMemo, useRef, useState } from 'react'
import cn from 'classnames'
import styles from "./Sidebar.module.scss";
import Image from 'next/image';
import Profile from './SidebarComponents/Profile';
import TariffPlan from './SidebarComponents/TariffPlan';
import Panel from './SidebarComponents/Panel';
import Settings from './SidebarComponents/Settings';
import Logo from './SidebarComponents/Logo';
import { SidebarPanelProvider } from '@/shared/context/SidebarPanelsContext';
import { ESidebarButtons } from '@/shared/config/config';
import ProfileSettings from '../ProfileSettings';
import ProfileTariff from '../ProfileTariff';
import ProfileUser from '../ProfileUser';

const Sidebar = () => {
  const [sidebarHover, setSidebarHover] = useState(false);
  const sidebarRef = useRef(null);
  const [panel, setPanel] = useState<ESidebarButtons | null>(null)

  const currentPanel = useMemo(() => {
    switch (panel) {
      case ESidebarButtons.settings:
        return <ProfileSettings />
      case ESidebarButtons.tariff:
        return <ProfileTariff />
      case ESidebarButtons.profile:
        return <ProfileUser />
      default:
        return <></>
    }
  }, [panel])

  return (
    <SidebarPanelProvider value={{panel: panel, setPanel: setPanel}}>
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
      <>{currentPanel}</>
    </SidebarPanelProvider>
  )
}

export default Sidebar