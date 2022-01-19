// Librairies
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
        window.removeEventListener('resize', changeWidth);
    }

  }, []);

  return (
    <nav>
      {(toggleMenu || windowWidth > 500) && (
        <ul className={styles.list}>
          <li className={styles.items}>Accueil</li>
          <li className={styles.items}>Service</li>
          <li className={styles.items}>Contact</li>
        </ul>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        Btn
      </button>
    </nav>
  );
}
