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
import Widget from "../../common/widget";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

export const DEFAULT_HORIZONTAL_BARCHART_OPTIONS = {
  indexAxis: "y",
  type: "bar",
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  responsive: true,
  grouped: true,
  maintainAspectRatio: false, // Set false for responsiveness
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

function HorizontalBarChart({ className, title, data }) {
  let options = {
    ...DEFAULT_HORIZONTAL_BARCHART_OPTIONS,
  };

  return (
    <Widget className={cx(className)} title={title}>
      <Bar
        className={cx(styles["horizontal-bar-chart-wrapper"])}
        options={options}
        data={data}
      />
    </Widget>
  );
}

HorizontalBarChart.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.array,
  }).isRequired,
};

export default HorizontalBarChart;
