import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import cx from "classnames";
import APIClient from "../../utils/apiClient";
import CompaniesByFoundedYear from "../../components/widgets/companies-by-years";
import CompaniesByCountries from "../../components/widgets/companies-by-country";
import CompaniesByStages from "../../components/widgets/companies-by-stage";
import CompaniesByIndustry from "../../components/widgets/companies-by-industry";
import CompaniesByFundingAndValuation from "../../components/widgets/companies-funding-and-valuation";

const client = new APIClient();

function Dashboard() {
  const [loading, setIsLoading] = useState(true);
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await client.get(import.meta.env.VITE_RAW_DATA_ENDPOINT);
        if (data.length > 0) {
          setDataset(data);
        }
      };
      fetchData();
    } catch (error) {
      console.error(`Error fetching data : ${error}`);
    } finally {
      setTimeout(() => setIsLoading(() => false), [400]);
    }
  }, []);

  return (
    <div className={cx(styles["dashboard-wrapper"])}>
      <div className={cx(styles["widgets-container"])}>
        <CompaniesByFoundedYear loading={loading} dataset={dataset} />
        <CompaniesByCountries loading={loading} dataset={dataset} />
        <CompaniesByStages loading={loading} dataset={dataset} />
        <CompaniesByIndustry loading={loading} dataset={dataset} />
        <CompaniesByFundingAndValuation loading={loading} dataset={dataset} />
      </div>
    </div>
  );
}

export default Dashboard;
