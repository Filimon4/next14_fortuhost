import React, { createContext, useContext, useState } from "react";
import { ESidebarButtons } from "../config/config";


export const SidebarPanelContext = createContext<{
  panel: ESidebarButtons | null,
  setPanel: React.Dispatch<React.SetStateAction<ESidebarButtons | null>>
}>({panel: null, setPanel: () => {}})

export const SidebarPanelProvider = ({
  children,
  value
}:{
  children: React.ReactNode,
  value: {
    panel: ESidebarButtons | null,
    setPanel: React.Dispatch<React.SetStateAction<ESidebarButtons | null>>
  }
}) => {

  return (
    <SidebarPanelContext.Provider value={value} >
      {children}
    </SidebarPanelContext.Provider>
  )
}
