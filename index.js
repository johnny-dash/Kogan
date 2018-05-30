const fetchData = require('./dataFetch');
const category = require('./category');
const filterByType = require('./filterByType');
const calcCubicWeight = require('./calcCubicWeight');
const defaultSetting = {
    endpoint: 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1',
    type: 'Air Conditioners'
};
    
// inject function
const main = async (requestFn) => {
    try{
        let store = [];
        const config = process.argv[2] ? process.argv[2] : defaultSetting;
        const url = config.endpoint ? config.endpoint : defaultSetting.endpoint;
        const type = config.type ? config.type : defaultSetting.type;
        //validation 
        const hostName = url.split('/api/')[0];    
        let response = await requestFn(url);    
        
        filterByType(store, response.objects, type);
        
        while(response.next != null){            
            response = await requestFn(hostName + response.next);             
            filterByType(store, response.objects, type);
            store.forEach
        }
        console.log(store);
    } catch(err) {
        console.log(err);
    } 
    
}

main(fetchData);

