import sortBy from "lodash/sortBy";
import groupBy from "lodash/groupBy";

export const transformDataset = (data) => {
  const byCategory = groupBy(data, "country");
  const arr = [];

  let totalOfLowestCount = 0;

  Object.keys(byCategory).forEach((key) => {
    const obj = byCategory[key];
    if (obj.length > 2) {
      arr.push({ label: key, value: obj.length });
    } else {
      totalOfLowestCount += 1;
    }
  });

  const sortedArray = sortBy(arr, "value").reverse();
  if (totalOfLowestCount > 0) {
    sortedArray.push({ label: "Others", value: totalOfLowestCount });
  }
  return {
    xAxis: sortedArray.map((d) => d.label),
    yAxis: sortedArray.map((d) => d.value),
  };
};
