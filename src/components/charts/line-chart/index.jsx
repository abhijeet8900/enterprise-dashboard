import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import styles from "./lineChart.module.css";
import cx from "classnames";
import { DEFAULT_CHART_OPTIONS } from "../../../constants/charts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

function LineChart({ className, data, customOptions }) {
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
    <Line
      className={cx(styles["line-chart-wrapper"], className)}
      options={options}
      data={data}
    />
  );
}

LineChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.array,
  }).isRequired,
  customOptions: PropTypes.shape({
    scales: PropTypes.object,
  }),
};

export default LineChart;
