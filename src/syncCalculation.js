const calcCubicWeight = require("./calcCubicWeight");
const filterByType = require("./filterByType");

const syncCalculation = async (baseUrl, pageExt, type, dataFetch) => {
  const currResponse = await dataFetch(baseUrl + pageExt);

  const promises = [];
  const nextSource = currResponse.next;

  if (nextSource) {
    promises.push(calcCubicWeight(baseUrl, nextSource, acc));
  }
  const filteredProducts = filterByType(currResponse.objects, type);
  promises.push(calcCubicWeight(filteredProducts));

  const result = await Promise.all(promises);

  return result.reduce((acc, v) => {
    acc.sum += v.sum;
    acc.count += v.count;
  });
};

module.exports = syncCalculation;
