'use client'

import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import dynamic from "next/dynamic";
import { MenuProvider, useMenuContext } from "../../context/MenuContext";

const MenuDashboardDynamic = dynamic(() => import('../../components/MenuDashboard'), {
  ssr: false,
});

const CuentasDynamic = dynamic(() => import('../../components/Cuentas'), {
  ssr: false,
});

const InventariosDynamic = dynamic(() => import('../../components/Inventarios'), {
  ssr: false,
});

const DashboardContent: React.FC = () => {
  const { currentComponent } = useMenuContext();

  return (
    <>
      {currentComponent === "Cuentas" && <CuentasDynamic />}
      {currentComponent === "Inventarios" && <InventariosDynamic />}
    </>
  );
};

const Dashboard: NextPage = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail') || '';
    setUserEmail(email);
  }, []);

  return (
    <MenuProvider>
      <MenuDashboardDynamic userEmail={userEmail} />
      <DashboardContent />
    </MenuProvider>
  );
};

export default Dashboard;