'use client'


import { useState } from "react";
import { useMenuContext } from "../context/MenuContext";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/index.module.scss";


interface MenuProps {}

const Menu: React.FC<MenuProps>  = () => {
  const { menuOpen, toggleMenu } = useMenuContext();


  return (
    <header className={styles.menu}>
      <picture>
        <Image src="/logos/white-full-axiora.svg" alt="logo" width={150} height={20} />
      </picture>

      <nav className={menuOpen ? styles.navOpen : styles.navClosed}>
        <ul>
          <li>
            <Link href={"#"}>CARACTERÍSTICAS</Link>
          </li>
          <li>
            <Link href={"#"}>PLANES</Link>
          </li>
          <li>
            <Link href={"#"}>INGRESAR</Link>
          </li>
        </ul>
      </nav>

      <button onClick={toggleMenu}>
        {menuOpen ? <RiCloseLine className={styles.icon} /> : <RiMenuLine className={styles.icon} />}
      </button>
    </header>
  );
};

export default Menu;

