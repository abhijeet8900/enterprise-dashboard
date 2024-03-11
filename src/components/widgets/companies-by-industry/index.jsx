import React from "react";
import PolarAreaChart from "../../charts/polar-area-chart";
import styles from "./companiesByIndustry.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { transformDataset } from "./helper";
import Widget from "../../common/widget";
function CompaniesByIndustry({ dataset, loading = false }) {
  const axisData = transformDataset(dataset);

  const data = {
    labels: axisData.xAxis,
    datasets: [
      {
        label: "No of Companies",
        data: axisData.yAxis,
        borderWidth: 1,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  };

  return (
    <Widget
      className={cx(styles["wrapper"])}
      title={"Industries for Unicorn Companies"}
      loading={loading}
    >
      <PolarAreaChart
        data={data}
        customOptions={{
          plugins: {
            legend: {
              position: "right",
            },
          },
          scales: {
            x: {
              display: false,
              grid: { display: false },
            },
            y: {
              display: false,
              grid: { display: false },
            },
          },
        }}
      />
    </Widget>
  );
}

CompaniesByIndustry.propTypes = {
  dataset: PropTypes.array,
  loading: PropTypes.bool,
};

export default CompaniesByIndustry;
