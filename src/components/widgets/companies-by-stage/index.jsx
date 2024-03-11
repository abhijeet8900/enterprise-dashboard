import React from "react";
import DoughnutChart from "../../charts/doughnut -chart";
import styles from "./companiesByStage.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { transformDataset } from "./helper";

function CompaniesByStages({ dataset }) {
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
    <DoughnutChart
      className={cx(styles["wrapper"])}
      title="Financial Stages of Unicorn Companies"
      data={data}
    />
  );
}

CompaniesByStages.propTypes = {
  dataset: PropTypes.array,
};

export default CompaniesByStages;
