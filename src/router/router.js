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

const { addItinerary, deleteItinerary, updateItinerary, getItinerary, getItineraries, getItinerariesCity } = require('../controllers/itinerariesController')

router.get("/itineraries", getItineraries)
router.get("/itinerary/:id", getItinerary)
router.get("/city/itineraries/:cityId", getItinerariesCity)
router.post("/itinerary", addItinerary)
router.delete("/itinerary/:id", deleteItinerary)
router.put("/itinerary/:id", updateItinerary)


const authRouter = require('./auth')

router.use("/user", authRouter)

module.exports = router