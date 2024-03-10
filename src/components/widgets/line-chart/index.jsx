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
import Widget from "../../common/widget";

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

export const DEFAULT_BARCHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false, // Set false for responsiveness
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

function LineChart({ className, data, title }) {
  let options = {
    ...DEFAULT_BARCHART_OPTIONS,
  };

  return (
    <Widget className={cx(className)} title={title}>
      <Line
        className={cx(styles["line-chart-wrapper"])}
        options={options}
        data={data}
      />
    </Widget>
  );
}

LineChart.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.array,
  }).isRequired,
};

export default LineChart;
