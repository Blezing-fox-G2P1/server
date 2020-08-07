const express = require('express');
const router = express.Router();
const { authentication } = require('../middlewares/auth.js')

const Controller = require('../controllers/controller.js');

router.get('/meals', authentication, Controller.hitMealDB)
router.get('/restaurant', Controller.hitZomato)
router.get('/nutrition', Controller.hitEdamam)

module.exports = router;