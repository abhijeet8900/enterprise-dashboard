import React from "react";
import styles from "./navbar.module.css";
import cx from "classnames";
import { MENUS } from "../../../constants/global";
import Menu from "./menu";

function Navbar() {
  return (
    <nav className={cx(styles["wrapper"])}>
      <div className={cx(styles["container"])}>
        <a href="/" className={cx(styles["heading-link"])}>
          <span className={cx(styles["heading"])}>Enterprise Dashboard</span>
        </a>
        <div className={cx(styles["menu-wrapper"])} id="navbar-sticky">
          <ul className={cx(styles["menu-container"])}>
            {MENUS.map((menu, index) => (
              <Menu key={index} link={menu.link} linkText={menu.linkText} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
