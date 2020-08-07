const express = require('express');
const router = express.Router();
const { authentication } = require('../middlewares/auth.js')

const Controller = require('../controllers/controller.js');

const userRoutes = require('./user-router')

router.get('/meals', Controller.hitMealDB)
router.get('/restaurant', authentication,  Controller.hitZomato)

router.post('/nutrition', Controller.hitEdamam)

router.use('/users', userRoutes)

module.exports = router;