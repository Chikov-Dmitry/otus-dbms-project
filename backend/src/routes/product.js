let ObjectId = require('mongodb').ObjectId;
module.exports = function(app, db) {
    app.post('/product', (req, res) => {
        const product = { name: req.body.name, category: req.body.category, characteristic: req.body.characteristic };
        db.collection("product").insertOne(product, (err, result) => {
            if (err) {
                console.log(err)
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.get('/product', (req, res)=>{
        const query = { };
        if(req.query.name){
            query.name =req.query.name
        }
        if(req.query.id){
            let id = req.query.id;
            let o_id = new ObjectId(id);
            query._id = o_id
        }
        const options = {
            sort: { name: 1 },
        };
        if(!req.query.limit) {
            let myPromise = () => {
                return new Promise((resolve, reject) => {

                    db
                        .collection('product')
                        .find(query, options)
                        .toArray(function (err, data) {
                            err
                                ? reject(err)
                                : resolve(data);
                        });
                });
            };
            myPromise().then(result => {
                res.send(result)
            })
        }else{
            let myPromise = () => {
                return new Promise((resolve, reject) => {

                    db
                        .collection('product')
                        .find(query, options).skip(req.query.skip? Number(req.query.skip) : 0).limit(Number(req.query.limit))
                        .toArray(function (err, data) {
                            err
                                ? reject(err)
                                : resolve(data);
                        });
                });
            };
            myPromise().then(result => {
                res.send(result)
            })
        }

    })
    app.get('/countproducts', (req,res)=>{
        let myPromise = () => {
            return new Promise((resolve, reject) => {

                db
                    .collection('product')
                    .countDocuments({}, {}, (err, count)=>{
                        err ? reject(err) : resolve({count: count})
                    })
            });
        };
        myPromise().then(result=>{
            res.send(result)
        })
    })
};
