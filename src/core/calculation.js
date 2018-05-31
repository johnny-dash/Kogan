const calcCubicWeight = require("./calcCubicWeight");
const filterByType = require("./filterByType");

//This function is where the magic happened
const syncCalculation = async (baseUrl, pageExt, type, dataFetch) => {
  const currResponse = await dataFetch(baseUrl + pageExt);

  const promises = [];
  const nextSource = currResponse.next;

  if (nextSource) {
    promises.push(syncCalculation(baseUrl, nextSource, type, dataFetch));
  }
  const filteredProducts = filterByType(currResponse.objects, type);
  promises.push(calcCubicWeight(filteredProducts));
  const result = await Promise.all(promises);
  return result.reduce((acc, v) => {
    acc.sum += v.sum;
    acc.count += v.count;
    return acc;
  });
};

module.exports = syncCalculation;
