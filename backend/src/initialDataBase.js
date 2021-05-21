const initialProductData = require('./productsData')
const initialOrderData = require('./orderData')
module.exports = function (db) {
    db.listCollections().toArray()
        .then(collections => {
            if(!collections.length){
                db.collection("product").insertMany(initialProductData, (err) => {
                    if (err) {
                        console.log('failed initial productData')
                        console.log(err)
                    }else{
                        console.log('success initaiale productData')
                    }
                })
                db.collection("order").insertMany(initialOrderData, (err) => {
                    if (err) {
                        console.log('failed initial orderData')
                        console.log(err)
                    }else{
                        console.log('success initaiale orderData')
                    }
                })
            }
        })
}
