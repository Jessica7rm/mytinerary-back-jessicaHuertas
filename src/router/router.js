const express = require('express')
const router = express.Router()
const {getCities,getCity} = require('../controllers/citiesController')


router.get("/cities", getCities)
router.get("/city/:id", getCity)


module.exports = router