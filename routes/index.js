const express = require('express');
const router = express.Router();

const Controller = require('../controller/');

//Route1
router.get('/', Controller.showAll)
router.get('/', Controller.showAll)


module.exports = router;