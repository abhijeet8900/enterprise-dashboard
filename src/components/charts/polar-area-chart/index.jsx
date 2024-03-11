import React from "react";
import { PolarArea } from "react-chartjs-2";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import styles from "./polarAreaChart.module.css";
import cx from "classnames";
import { DEFAULT_CHART_OPTIONS } from "../../../constants/charts";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Colors);

function PolarAreaChart({ className, data, customOptions }) {
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
    <PolarArea
      className={cx(styles["polar-area-chart-wrapper"], className)}
      options={options}
      data={data}
    />
  );
}

PolarAreaChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    datasets: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.array,
  }).isRequired,
  customOptions: PropTypes.shape({
    scales: PropTypes.object,
  }),
};

export default PolarAreaChart;
