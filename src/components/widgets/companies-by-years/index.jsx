import React from "react";
import LineChart from "../../charts/line-chart";
import styles from "./companiesByYears.module.css";
import cx from "classnames";
import PropTypes from "prop-types";

function CompaniesByFoundedYear({ data }) {
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
  data: PropTypes.object,
};

export default CompaniesByFoundedYear;
