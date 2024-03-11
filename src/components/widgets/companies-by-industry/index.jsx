import React from "react";
import PolarAreaChart from "../../charts/polar-area-chart";
import styles from "./companiesByIndustry.module.css";
import cx from "classnames";
import PropTypes from "prop-types";

function CompaniesByIndustry({ data }) {
  return (
    <PolarAreaChart
      className={cx(styles["wrapper"])}
      title="Industries for Unicorn Companies"
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
  );
}

CompaniesByIndustry.propTypes = {
  data: PropTypes.object,
};

export default CompaniesByIndustry;
