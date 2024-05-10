'use client'


import { useState, useEffect } from "react";
import { useMenuContext } from "../context/MenuContext";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/index.module.scss";


interface MenuProps {}

const Menu: React.FC<MenuProps>  = () => {
  const { menuOpen, toggleMenu } = useMenuContext();
  const [imageSrc, setImageSrc] = useState("/logos/white-full-axiora.svg");

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        setImageSrc("/logos/black-axiora.svg");
      }, 300);
    } else {
      setImageSrc("/logos/white-full-axiora.svg"); // Vuelve a la imagen original
    }
  }, [menuOpen]);


  return (
    <header className={styles.menu}>
      <picture>
        <Image src={imageSrc} alt="logo" width={150} height={20} />
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
        {menuOpen ? <RiCloseLine className={menuOpen ? styles.iconBlack : styles.icon} /> : <RiMenuLine className={styles.icon} />}
      </button>
    </header>
  );
};

export default Menu;

