import React from "react";
import styles from "./widget.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import Loading from "./loading";

function Widget({ children, className, title = "", loading = false }) {
  return (
    <div className={cx(styles["widget"], className)}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className={cx(styles["header"])}>{title}</h1>
          <div className={cx(styles["container"])}>{children}</div>
        </>
      )}
    </div>
  );
}

Widget.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

export default Widget;
