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
        <Image src="https://e7.pngegg.com/pngimages/339/69/png-clipart-god-of-war-iii-god-of-war-ghost-of-sparta-ultimate-marvel-vs-capcom-3-god-text-logo.png" alt="logo" width={150} height={20} />
      </picture>

      <nav className={menuOpen ? styles.navOpen : styles.navClosed}>
        <ul>
          <li>
            <Link href={"#"}>Características</Link>
          </li>
          <li>
            <Link href={"#"}>Planes</Link>
          </li>
          <li>
            <Link href={"#"}>Ingresar</Link>
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

