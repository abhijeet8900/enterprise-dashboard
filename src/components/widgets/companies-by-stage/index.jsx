import React from "react";
import DoughnutChart from "../../charts/doughnut -chart";
import styles from "./companiesByStage.module.css";
import cx from "classnames";
import PropTypes from "prop-types";

function CompaniesByStages({ data }) {
  return (
    <DoughnutChart
          className={cx(styles["wrapper"])}
          title="Financial Stages of Unicorn Companies"
          data={data}
        />
  );
}

CompaniesByStages.propTypes = {
  data: PropTypes.object,
};

export default CompaniesByStages;
