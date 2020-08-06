const express = require('express');
const router = express.Router();

const Controller = require('../controller/controller.js');

router.get('/meals', Controller.hitMealDB)

module.exports = router;