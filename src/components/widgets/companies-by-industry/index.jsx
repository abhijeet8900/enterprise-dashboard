import React from "react";
import PolarAreaChart from "../../charts/polar-area-chart";
import styles from "./companiesByIndustry.module.css";
import cx from "classnames";
import PropTypes from "prop-types";
import { transformDataset } from "./helper";
import Widget from "../../common/widget";
import { COLORS } from "../../../constants/theme";
function CompaniesByIndustry({ dataset, loading = false }) {
  const axisData = transformDataset(dataset);

  const data = {
    labels: axisData.xAxis,
    datasets: [
      {
        label: "No of Companies",
        data: axisData.yAxis,
        borderWidth: 1,
        backgroundColor: COLORS,
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
