import React from "react";
import LineChart from "../../charts/line-chart";
import styles from "./companiesByYears.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { transformDataset } from "./helper";
import Widget from "../../common/widget";
function CompaniesByFoundedYear({ dataset, loading = false }) {
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
    <Widget
      className={cx(styles["wrapper"])}
      title={"Distribution of Unicorn Companies Founded by Year"}
      loading={loading}
    >
      <LineChart
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
    </Widget>
  );
}

CompaniesByFoundedYear.propTypes = {
  dataset: PropTypes.array,
  loading: PropTypes.bool,
};

export default CompaniesByFoundedYear;
