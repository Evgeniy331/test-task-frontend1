const router = require('express').Router();
const review = require('../../repositories/review');

var mongoose = require('mongoose');

router.get('/:id', (req, res, next) => {
    
    let id = req.params.id;

	review .getAllByProductId(id, function(err, data){
        res.json(data);
    });

});

router.post('/', (req, res, next) => {

	review.add(req.body, function(err, data){
        res.json(data);
    });

});

module.exports = router;