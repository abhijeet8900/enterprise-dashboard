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
import styles from "./barChart.module.css";
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

function BarChart({ className, data, customOptions }) {
  let options = {
    ...DEFAULT_CHART_OPTIONS,
    plugins: {
      ...DEFAULT_CHART_OPTIONS.plugins,
      legend: {
        display: data.datasets.length > 1, // Only show legends if more than 1 dataset
      },
    },
    ...customOptions,
  };

  return (
    <Bar
      className={cx(styles["bar-chart-wrapper"])}
      options={options}
      data={data}
    />
  );
}

BarChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.array,
  }).isRequired,
  customOptions: PropTypes.shape({
    scales: PropTypes.object,
  }),
};

export default BarChart;
