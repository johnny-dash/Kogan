// this is filter function to get the right products
const filterByType = (response, type) => {
  let store = [];
  response.forEach(good => {
    if (good.category === type) {
      store.push(good);
    }
  });
  return store;
};

module.exports = filterByType;
