let ObjectId = require('mongodb').ObjectId;

module.exports = function (app, db){
    app.post('/order', (req, res) => {
        const order = req.body;
        db.collection("order").insertOne(order, (err, result) => {
            if (err) {
                console.log(err)
                res.send({ 'error': 'An error has occurred' });
            } else {
                order.products.forEach(item=>{
                    let id = item._id;
                    let o_id = new ObjectId(id);
                    db.collection('product').updateOne({_id: o_id}, {$inc: {count: -item.orderCount}}, (err)=>{
                        if (err) return console.warn(err)
                    })
                })
                res.send(result.ops[0]);
            }
        });
    });
    app.get('/order', (req, res)=>{
        const query = { };
        if(req.query.user_name){
            query.name =req.query.user_name
        }
        const options = {
            sort: { name: 1 },
        };

        let myPromise = () => {
            return new Promise((resolve, reject) => {

                db
                    .collection('order')
                    .find(query, options)
                    .toArray(function(err, data) {
                        err
                            ? reject(err)
                            : resolve(data);
                    });
            });
        };
        myPromise().then(result=>{
            res.send(result)
        })

    })
}