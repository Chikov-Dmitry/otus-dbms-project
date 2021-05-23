const product = require('./product');
const order = require('./order');
const category = require('./category');
module.exports = function(app, db) {
    product(app, db);
    order(app, db);
    category(app, db)
};