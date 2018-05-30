
//This function is used to calculate the average cubic weight
const calcCubicWeight = (good) => { 
    // All weights are provided in grams. need to convert to kg
    let weight = good.weight / 1000;
    // this unit is in centimeters
    let size = good.size; 
    // convert centimeters to meters
    let cubicSize = size.width * size.length * size.height / 1000000;
    return cubicWeight = weight * cubicSize;     
} 

module.exports = calcCubicWeight;