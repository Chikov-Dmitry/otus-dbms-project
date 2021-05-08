const product = require('./product');
module.exports = function(app, db) {
    product(app, db);
};