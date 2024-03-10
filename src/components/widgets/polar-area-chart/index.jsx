import React from "react";
import { PolarArea } from "react-chartjs-2";
import PropTypes from "prop-types";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import styles from "./polarAreaChart.module.css";
import cx from "classnames";
import Widget from "../../common/widget";

ChartJS.register(
    RadialLinearScale, ArcElement, Tooltip, Legend)

export const DEFAULT_POLAR_AREA_CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false, // Set false for responsiveness
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

function PolarAreaChart({ className, data, title }) {
  let options = {
    ...DEFAULT_POLAR_AREA_CHART_OPTIONS,
  };

  return (
    <Widget className={cx(className)} title={title}>
      <PolarArea
        className={cx(styles["polar-area-chart-wrapper"])}
        options={options}
        data={data}
      />
    </Widget>
  );
}

PolarAreaChart.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.array,
  }).isRequired,
};

export default PolarAreaChart;
