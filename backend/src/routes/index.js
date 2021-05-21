const product = require('./product');
const order = require('./order')
module.exports = function(app, db) {
    product(app, db);
    order(app, db)
};