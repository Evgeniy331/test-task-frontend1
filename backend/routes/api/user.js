const router = require('express').Router();
const user = require('../../repositories/user');

router.get('/usernames', (req, res, next) => {

	user.getAllUsernames(function(err, data){
        res.json(data);
    });

});

module.exports = router;