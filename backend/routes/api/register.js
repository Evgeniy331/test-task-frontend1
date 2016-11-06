const router = require('express').Router();
const user = require('../../repositories/user');

router.post('/', (req, res, next) => {

   user.add(req.body, function(err, data){
        res.json(data);
    });
   
});

module.exports = router;