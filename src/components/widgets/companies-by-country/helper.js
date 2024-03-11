import groupBy from "lodash/groupBy";

export const transformDataset = (data) => {
  const byCategory = groupBy(data, "country");
  const arr = [];

  Object.keys(byCategory).forEach((key) => {
    const obj = byCategory[key];
    arr.push({ label: key, value: obj.length });
  });

  return {
    xAxis: arr.map((d) => d.label),
    yAxis: arr.map((d) => d.value),
  };
};
