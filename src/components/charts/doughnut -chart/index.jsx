import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  DoughnutController,
  ArcElement,
  TimeScale,
  Tooltip,
  Colors,
} from "chart.js";
import styles from "./doughnutChart.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { DEFAULT_CHART_OPTIONS } from "../../../constants/charts";

ChartJS.register(Colors, DoughnutController, ArcElement, TimeScale, Tooltip);

function DoughnutChart({ className, data, customOptions }) {
  let options = {
    ...DEFAULT_CHART_OPTIONS,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    ...customOptions,
  };

  return (
    <Doughnut
      className={cx(styles["doughnut-chart-wrapper"], className)}
      data={data}
      options={options}
    />
  );
}

DoughnutChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.array,
  }).isRequired,
  customOptions: PropTypes.shape({
    scales: PropTypes.object,
  }),
};
export default DoughnutChart;
