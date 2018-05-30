const fetchData = require("./src/dataFetch");
const calcAverageCubicWeight = require("./calcAverageCubicWeight");
const defaultSetting = {
  endpoint:
    "http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1",
  type: "Air Conditioners"
};

const config = process.argv[2] ? process.argv[2] : defaultSetting;
const endpoint = config.endpoint ? config.endpoint : defaultSetting.endpoint;
const type = config.type ? config.type : defaultSetting.type;

calcAverageCubicWeight(endpoint, type, fetchData)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
