import React from "react";
import LineChart from "../../charts/line-chart";
import styles from "./companiesByYears.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { transformDataset } from "./helper";
function CompaniesByFoundedYear({ dataset }) {
  const axisData = transformDataset(dataset);

  const data = {
    labels: axisData.xAxis,
    datasets: [
      {
        data: axisData.yAxis,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <LineChart
      className={cx(styles["wrapper"])}
      title="Distribution of Unicorn Companies Founded by Year"
      data={data}
      customOptions={{
        scales: {
          x: {
            title: {
              display: true,
              text: "Years",
            },
            grid: { display: false },
          },
          y: {
            title: {
              display: true,
              text: "No of Companies",
            },
            grid: { display: false },
          },
        },
      }}
    />
  );
}

CompaniesByFoundedYear.propTypes = {
  dataset: PropTypes.array,
};

export default CompaniesByFoundedYear;
