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
import Widget from "../../common/widget";
import { DEFAULT_CHART_OPTIONS } from "../../../constants/charts";

ChartJS.register(Colors, DoughnutController, ArcElement, TimeScale, Tooltip);

function DoughnutChart({ className, data, title }) {
  let options = {
    ...DEFAULT_CHART_OPTIONS,
    scales : {
      x : {
        display: false 
      },
      y : {
        display: false 
      }
    }
  };

  return (
    <Widget className={cx(className)} title={title}>
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
