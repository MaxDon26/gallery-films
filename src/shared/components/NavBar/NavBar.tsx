import AppRoutes from "@shared/routes";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

export const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={AppRoutes.HOME}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={AppRoutes.FAVORITE}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
