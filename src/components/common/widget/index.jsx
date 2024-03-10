import React from "react";
import styles from "./widget.module.css";
import cx from "classnames";
import PropTypes from "prop-types";

function Widget({ children, className, title = "" }) {
  return (
    <div className={cx(styles["widget"], className)}>
      <h1 className={cx(styles["header"])}>{title}</h1>
      <div className={cx(styles["container"])}>{children}</div>
    </div>
  );
}

Widget.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Widget;
