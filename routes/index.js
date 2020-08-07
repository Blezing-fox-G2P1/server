const express = require('express');
const router = express.Router();
const { authentication } = require('../middlewares/auth.js')

const Controller = require('../controllers/controller.js');

const userRoutes = require('./user-router')

router.get('/meals', authentication, Controller.hitMealDB)
router.get('/restaurant', Controller.hitZomato)
router.use('/users', userRoutes)

module.exports = router;