var express = require("express");
var router = express.Router();
const secretController = require('../controller')

router.get('/secret/:hash',secretController.onceRetriveSecret)
router.post('/secret',secretController.storeSecret)



module.exports = router;