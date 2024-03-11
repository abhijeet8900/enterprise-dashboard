export const transformDataset = (data) => {
  const arr = data.map((item) => ({
    company: item?.company,
    total_raised: item?.total_raised,
    valuation: item?.valuation,
  }));

  return {
    xAxis: arr.map((d) => d.company),
    yAxis: [arr.map((d) => d.total_raised), arr.map((d) => d.valuation)],
  };
};
