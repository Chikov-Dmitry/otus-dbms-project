module.exports = function (app, db) {
    app.get('/categorylist', (req, res) => {


        let myPromise = () => {
            return new Promise((resolve, reject) => {

                db
                    .collection('product')
                    .distinct('category', (err, data) => {
                        err
                            ? reject(err)
                            : resolve(data);
                    })

            });
        };
        myPromise().then(result => {
            console.log(result)
            res.send(result)
        })

    })
    app.get('/categoryproduct', (req, res) => {
        if(!req.query.limit) {
            let myPromise = () => {
                return new Promise((resolve, reject) => {
                    db
                        .collection('product')
                        .find({category: req.query.category})
                        .toArray(function (err, data) {
                            err
                                ? reject(err)
                                : resolve(data);
                        })
                })
            }
            myPromise().then(result => {
                res.send(result)
            })
        }else{
            let myPromise = () => {
                return new Promise((resolve, reject) => {
                    db
                        .collection('product')
                        .find({category: req.query.category}).skip(req.query.skip? Number(req.query.skip) : 0).limit(Number(req.query.limit))
                        .toArray(function (err, data) {
                            err
                                ? reject(err)
                                : resolve(data);
                        })
                })
            }
            myPromise().then(result => {
                res.send(result)
            })
        }
    })

    app.get('/countcategoryproducts', (req, res) => {
        let myPromise = () => {
            return new Promise((resolve, reject) => {

                db
                    .collection('product')
                    .countDocuments({category: req.query.category}, {}, (err, count) => {
                        err ? reject(err) : resolve({count: count})
                    })
            });
        };
        myPromise().then(result => {
            res.send(result)
        })
    })
}