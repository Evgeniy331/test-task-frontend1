const router = require('express').Router();
const product = require('../../repositories/product');

var mongoose = require('mongoose');

router.get('/', (req, res, next) => {

	product.getAll(function(err, data){
        res.json(data);
    });

});

module.exports = router;