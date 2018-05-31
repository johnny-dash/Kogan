const calculation = require("./calculation");

// inject function to make it testable
const calcAverageCubicWeight = async (endpoint, type, requestFn) => {
  try {
    //validation
    const hostName = endpoint.split("/api/")[0];
    const initialResource = endpoint.split(hostName)[1];

    let finalResult = await calculation(
      hostName,
      initialResource,
      type,
      requestFn
    );
    return finalResult.sum / finalResult.count;
  } catch (err) {
    throw err;
  }
};

module.exports = calcAverageCubicWeight;
