import React from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import styles from "./horizontalBarChart.module.css";
import cx from "classnames";
import { DEFAULT_CHART_OPTIONS } from "../../../constants/charts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

function HorizontalBarChart({ className, data, customOptions }) {
  let options = {
    ...DEFAULT_CHART_OPTIONS,
    indexAxis: "y",
    type: "bar",
    interaction: {
      intersect: false,
    },
    grouped: true,
    ...customOptions,
  };

  return (
    <Bar
      className={cx(styles["horizontal-bar-chart-wrapper"], className)}
      options={options}
      data={data}
    />
  );
}

HorizontalBarChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.array,
  }).isRequired,
  customOptions: PropTypes.shape({
    scales: PropTypes.object,
  }),
};

export default HorizontalBarChart;
