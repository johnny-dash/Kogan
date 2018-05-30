
// this is filter function to find out all air conditions
const filterByType = (store, response, type) => {    
    response.forEach((good) => {
        if(good.category === type){            
            good.cubicWeight = cubicWeight;
            store.push(good)
        }
    });
    return store;
}

module.exports = filterByType;