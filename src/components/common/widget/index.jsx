import React from "react";
import styles from "./widget.module.css";
import cx from "classnames";
import PropTypes from "prop-types";

function Widget({ children, className }) {
  return <div className={cx(styles["widget"], className)}>{children}</div>;
}

Widget.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Widget;
