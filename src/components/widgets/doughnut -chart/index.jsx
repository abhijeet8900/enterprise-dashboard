import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  DoughnutController,
  ArcElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import styles from "./doughnutChart.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import Widget from "../../common/widget";

ChartJS.register(DoughnutController, ArcElement, TimeScale, Tooltip);

export const DEFAULT_DOUGHNUTCHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false, // Set false for responsiveness
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

function DoughnutChart({ className, data, title }) {
  let options = {
    ...DEFAULT_DOUGHNUTCHART_OPTIONS,
  };
  if (title) {
    options.plugins.title = {
      display: true,
      text: title ?? "",
    };
  }

  return (
    <Widget className={cx(className)}>
      <Doughnut
        className={cx(styles["doughnut-chart-wrapper"])}
        data={data}
        options={options}
      />
    </Widget>
  );
}

DoughnutChart.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.array,
  }).isRequired,
};
export default DoughnutChart;
