import React from "react";
import BarChart from "../../charts/bar-chart";
import styles from "./companiesByCountry.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { transformDataset } from "./helper";

function CompaniesByCountries({ dataset }) {
  const axisData = transformDataset(dataset);

  const data = {
    labels: axisData.xAxis,
    datasets: [
      {
        type: "bar",
        data: axisData.yAxis,
      },
    ],
  };

  return (
    <BarChart
      className={cx(styles["wrapper"])}
      title="Unicorn Count by Country"
      data={data}
      customOptions={{
        scales: {
          x: {
            title: {
              display: true,
              text: "Countries",
            },
            grid: { display: false },
          },
          y: {
            title: {
              display: true,
              text: "No of companies",
            },
            grid: { display: false },
          },
        },
      }}
    />
  );
}

CompaniesByCountries.propTypes = {
  dataset: PropTypes.array,
};

export default CompaniesByCountries;
