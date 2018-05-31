// this is filter function to get the right products
const filterByType = (response, type) => {
  return response.filter(good => good.category === type);
};

module.exports = filterByType;
