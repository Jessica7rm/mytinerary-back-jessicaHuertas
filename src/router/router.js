const express = require('express')
const router = express.Router()
const { getCities, getCity, addCity, deleteCity, updateCity, addCitiesCollection, addCities } = require('../controllers/citiesController')


router.get("/cities", getCities)
router.get("/city/:id", getCity)
router.post("/city", addCity)
router.delete("/city/:id", deleteCity)
router.put("/city/:id", updateCity)
router.post("/cities/collection", addCitiesCollection)
router.post("/cities", addCities)

module.exports = router