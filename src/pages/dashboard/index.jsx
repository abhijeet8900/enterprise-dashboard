import React from "react";
import styles from "./dashboard.module.css";
import cx from "classnames";

function Dashboard() {
  return (
    <div className={cx(styles["dashboard-wrapper"])}>
      <h1>Dashboard</h1>
      <div className={cx(styles["widgets-container"])}>
      </div>
    </div>
  );
}

export default Dashboard;
