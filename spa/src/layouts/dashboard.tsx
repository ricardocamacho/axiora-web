
"use client";

import type { CustomFlowbiteTheme } from "flowbite-react";
import { NavLink, Outlet, Navigate } from "react-router";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useAppDispatch, useAppSelector } from '../hooks';
import { setCurrentUserToLs } from '../utils';
import { logoutUser, selectCurrentUser } from '../redux/auth-slice';
import { Flowbite } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  card: {
    "root": {
      "base": "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
      "children": "flex h-full flex-col justify-center gap-4 p-6",
      "horizontal": {
        "off": "flex-col",
        "on": "flex-col md:flex-row"
      },
      "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    "img": {
      "horizontal": {
        "off": "rounded-t-lg",
        "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
      }
    }
  },
};

export default function DashboardLayout() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);

  const logout = () => {
    setCurrentUserToLs(null);
    dispatch(logoutUser());
  };

  if (!currentUser) {
    return <Navigate to='/user/login' />;
  }

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar className='shadow-md' fluid rounded>
        <NavLink to='/'>
          <img src="/black-axiora.svg" className="mr-3 h-6 sm:h-9" alt="Axiora" />
        </NavLink>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block truncate text-sm font-medium">{currentUser?.email}</span>
            </Dropdown.Header>
            <NavLink to='/'><Dropdown.Item>Cuentas</Dropdown.Item></NavLink>
            <NavLink to='/inventory'><Dropdown.Item>Inventario</Dropdown.Item></NavLink>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Cerrar Sesión</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
      <Outlet />
    </Flowbite>
  );
}
