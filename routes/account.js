var express = require('express');
var router = express.Router();
var accountController =  require('../controllers/accountController');

router.post('/login', accountController.login);
router.post('/signup', accountController.signup);
router.get('/whoami', accountController.whoami);

module.exports = router;
