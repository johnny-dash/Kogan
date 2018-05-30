// this is filter function to find out all air conditions
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
