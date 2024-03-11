export const transformDataset = (data) => {
  const arr = data
    .map((item) => ({
      company: item?.company,
      total_raised: item?.total_raised,
      valuation: item?.valuation,
    }))
    .sort((a, b) => b.valuation - a.valuation)
    .slice(0, 10);

  return {
    xAxis: arr.map((d) => d.company),
    yAxis: [arr.map((d) => d.total_raised), arr.map((d) => d.valuation)],
  };
};
