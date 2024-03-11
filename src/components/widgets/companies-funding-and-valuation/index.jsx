import React from "react";
import HorizontalBarChart from "../../charts/horizontal-bar-chart";
import styles from "./companiesFundingAndValuation.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { transformDataset } from "./helper";
import Widget from "../../common/widget";
function CompaniesByFundingAndValuation({ dataset, loading = false }) {
  const axisData = transformDataset(dataset);

  const data = {
    labels: axisData.xAxis,

    datasets: [
      {
        label: "Raised ( $B )",
        data: axisData.yAxis[0],
        hoverOffset: 4,
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      {
        label: "Valuation ( $B )",
        data: axisData.yAxis[1],
        hoverOffset: 4,
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };
  return (
    <Widget
      className={cx(styles["wrapper"])}
      title="Funding vs Valuation for Top 10 Companies"
      loading={loading}
    >
      <HorizontalBarChart
        data={data}
        customOptions={{
          scales: {
            x: {
              title: {
                display: true,
                text: "Billions",
              },
              grid: { display: false },
            },
            y: {
              title: {
                display: true,
                text: "Companies",
              },
              grid: { display: false },
            },
          },
        }}
      />
    </Widget>
  );
}

CompaniesByFundingAndValuation.propTypes = {
  dataset: PropTypes.array,
  loading: PropTypes.bool,
};

export default CompaniesByFundingAndValuation;
