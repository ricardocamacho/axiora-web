'use client'

import React, { createContext, useContext, useState } from "react";

interface MenuContextValue {
  menuOpen: boolean;
  toggleMenu: () => void;
  currentComponent: string;
  switchComponent: (component: string) => void;
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

interface MenuProviderProps {
  children: React.ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [currentComponent, setCurrentComponent] = useState<string>("Cuentas");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const switchComponent = (component: string) => {
    setCurrentComponent(component);
  };

  const value: MenuContextValue = {
    menuOpen,
    toggleMenu,
    currentComponent,
    switchComponent,
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};