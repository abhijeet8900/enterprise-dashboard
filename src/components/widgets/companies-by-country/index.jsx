import React from "react";
import BarChart from "../../charts/bar-chart";
import styles from "./companiesByCountry.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { transformDataset } from "./helper";
import Widget from "../../common/widget";

function CompaniesByCountries({ dataset, loading = false }) {
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
    <Widget
      className={cx(styles["wrapper"])}
      title={"Unicorn Count by Country"}
      loading={loading}
    >
      <BarChart
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
    </Widget>
  );
}

CompaniesByCountries.propTypes = {
  dataset: PropTypes.array,
  loading: PropTypes.bool,
};

export default CompaniesByCountries;
