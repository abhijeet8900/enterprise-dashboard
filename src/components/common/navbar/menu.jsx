import React from "react";
import styles from "./navbar.module.css";
import cx from "classnames";
import PropTypes from "prop-types";

function Menu({ link, linkText }) {
  return (
    <li>
      <a href={link} className={cx(styles["menu-item"])}>
        {linkText}
      </a>
    </li>
  );
}

Menu.propTypes = {
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Menu;
