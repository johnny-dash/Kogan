const fetchData = require("./src/driver/fetchData");
const calcAverageCubicWeight = require("./src/core/calcAverageCubicWeight");
const defaultSetting = require("./defaultSetting");

const endpoint = defaultSetting.endpoint;
const type = defaultSetting.type;

calcAverageCubicWeight(endpoint, type, fetchData)
  .then(result => {
    console.log("The average cubic weight for " + type + " is: " + result);
  })
  .catch(error => {
    console.error(error);
  });
