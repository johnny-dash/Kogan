//This function is used to calculate the average cubic weight
const calcCubicWeight = async goods => {
  return new Promise((resolve, reject) => {
    let sum = 0;
    let count = 0;
    if (goods) {
      for (let good of goods) {
        // basic validation
        if (!good.weight) reject("Error: Good don't have weight");
        if (!good.size) reject("Error: Good don't have size");

        // All weights are provided in grams. need to convert to kg
        const weight = good.weight / 1000;
        // this unit is in centimeters
        const size = good.size;
        // convert centimeters to meters
        const cubicSize = size.width * size.length * size.height / 1000000;

        // calculate
        sum += weight * cubicSize;
        count++;
      }
    } else {
      reject("Error: No goods detail in response");
    }
    resolve({
      sum: sum,
      count: count
    });
  });
};

module.exports = calcCubicWeight;
