module.exports = function (app, db){
    app.get('/categorylist', (req, res)=>{


        let myPromise = () => {
            return new Promise((resolve, reject) => {

                db
                    .collection('product')
                    .distinct('category', (err, data) =>{
                        err
                            ? reject(err)
                            : resolve(data);
                    })

            });
        };
        myPromise().then(result=>{
            console.log(result)
            res.send(result)
        })

    })
    app.get('/categoryproduct', (req, res)=>{
        let myPromise = () =>{
            return new Promise((resolve, reject)=>{
                db
                    .collection('product')
                    .find({category: req.query.category})
                    .toArray(function(err, data) {
                    err
                        ? reject(err)
                        : resolve(data);
                })
            })
        }
        myPromise().then(result=>{
            console.log(result)
            res.send(result)
        })
    })
}