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
} from "chart.js";
import styles from "./barChart.module.css";
import cx from "classnames";
import Widget from "../../common/widget";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const DEFAULT_BARCHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false, // Set false for responsiveness
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

function BarChart({ className, title, data }) {
  let options = {
    ...DEFAULT_BARCHART_OPTIONS,
  };
  if (title) {
    options.plugins.title = {
      display: true,
      text: title ?? "",
    };
  }

  return (
    <Widget className={cx(className)} title={title}>
      <Bar
        className={cx(styles["bar-chart-wrapper"])}
        options={options}
        data={data}
      />
    </Widget>
  );
}

BarChart.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.array,
  }).isRequired,
};

export default BarChart;
