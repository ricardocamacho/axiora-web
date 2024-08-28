import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { useMenuContext } from "../context/MenuContext";

import styles from "../styles/index.module.scss";

interface MenuDashboardProps {
  userEmail: string;
}

const MenuDashboard: React.FC<MenuDashboardProps> = ({ userEmail }) => {
  const { currentComponent, switchComponent } = useMenuContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getShortEmail = (email: string) => {
    return email.slice(0, 2);
  };

  const handleSpanClick = () => {
    setShowButton(!showButton);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.clear(); 
    router.push('/Login');
  };

  return (
    <header className={styles.MenuDashboard}>
      <nav>
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <ul className={isMenuOpen ? styles.openMenu : styles.closedMenu}>
          <li
            className={currentComponent === "Cuentas" ? styles.active : ""}
            onClick={() => switchComponent("Cuentas")}
          >
            <a href="#">
              <Image src={"/icons/shop.png"} alt="icon_shop" width={50} height={70} />
              <span>Cuentas</span>
            </a>
          </li>
          <li
            className={currentComponent === "Inventarios" ? styles.active : ""}
            onClick={() => switchComponent("Inventarios")}
          >
            <a href="#">
              <Image src={"/icons/box.png"} alt="icon_shop" width={50} height={70} />
              <span>Inventarios</span>
            </a>
          </li>
        </ul>
      </nav>

      <Image
        src="/logos/black-axiora.svg"
        alt="Logo de la empresa"
        width={100}
        height={50}
      />

      <section>
      <small>{userEmail}</small>
        <div onClick={handleSpanClick}>
        <span>{getShortEmail(userEmail)}</span>
        {showButton && (
        <button 
        className={styles.hiddenButton}
        onClick={handleLogout}
        aria-expanded={showButton}
          aria-label="show button">Cerrar sesión</button>
      )}
        </div>
      </section>
    </header>
  );
};

export default MenuDashboard;