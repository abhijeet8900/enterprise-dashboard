import React from "react";
import HorizontalBarChart from "../../charts/horizontal-bar-chart";
import styles from "./companiesFundingAndValuation.module.css";
import cx from "classnames";
import PropTypes from "prop-types";

function CompaniesByFundingAndValuation({ data }) {
  return (
    <HorizontalBarChart
    className={cx(styles["wrapper"])}
    title="Funding vs Valuation"
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
  );
}

CompaniesByFundingAndValuation.propTypes = {
  data: PropTypes.object,
};

export default CompaniesByFundingAndValuation;
