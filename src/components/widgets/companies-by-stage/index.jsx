import React from "react";
import DoughnutChart from "../../charts/doughnut -chart";
import styles from "./companiesByStage.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { transformDataset } from "./helper";
import Widget from "../../common/widget";

function CompaniesByStages({ dataset, loading = false }) {
  const { xAxis, yAxis } = transformDataset(dataset);

  const data = {
    labels: xAxis,
    datasets: [
      {
        label: "No of Companies",
        data: yAxis,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 12,
        hoverBorderRadius: 1,
        hoverBorderWidth: 1,
      },
    ],
  };

  return (
    <Widget
      className={cx(styles["wrapper"])}
      title="Financial Stages of Unicorn Companies"
      loading={loading}
    >
      <DoughnutChart data={data} />
    </Widget>
  );
}

CompaniesByStages.propTypes = {
  dataset: PropTypes.array,
  loading: PropTypes.bool,
};

export default CompaniesByStages;
