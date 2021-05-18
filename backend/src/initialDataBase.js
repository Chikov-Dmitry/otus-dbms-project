const initialData = require('./productsData')
module.exports = function (db) {
    db.listCollections().toArray()
        .then(collections => {
            if(!collections.length){
                db.collection("product").insertMany(initialData, (err) => {
                    if (err) {
                        console.log('failed initial database')
                        console.log(err)
                    }else{
                        console.log('success initaiale database')
                    }
                })
            }
        })
}
