module.exports = function (app, db){
    app.post('/order', (req, res) => {
        const order = req.body;
        console.log(order)
        db.collection("order").insertOne(order, (err, result) => {
            if (err) {
                console.log(err)
                res.send({ 'error': 'An error has occurred' });
            } else {
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