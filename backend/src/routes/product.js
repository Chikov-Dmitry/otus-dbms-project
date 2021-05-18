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
        const options = {
            sort: { name: 1 },
        };

        let myPromise = () => {
            return new Promise((resolve, reject) => {

                db
                    .collection('product')
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
};
