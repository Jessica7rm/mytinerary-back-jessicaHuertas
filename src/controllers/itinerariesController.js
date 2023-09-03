const { query } = require("express")
const Itinerary = require("../models/Itinerary")
const City = require("../models/City")

const getItineraries = async (req, res) => {
    const query = {}
    try {
        let itineraries = await Itinerary.find(query)
        res.status(200).json({ itineraries })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getItinerariesCity = async (req, res) => {
    let {cityId} = req.params
    try {
        let filTinerary = await Itinerary.find({ id_city: cityId})
        res.status(200).json(filTinerary)
        console.log(filTinerary);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getItinerary = async (req, res) => {
    try {
        let { id } = req.params
        let itinerary = await Itinerary.findById(id)
        res.status(200).json({ itinerary })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const addItinerary = async (req, res) => {
    try {
        let payload = req.body
        let itineraryCreate = await Itinerary.create(payload)

        res.status(201).json({
            message: "Itinerary has been added",
            itinerary: itineraryCreate
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateItinerary = async (req, res) => {
    try {
        let newData = {
            title: req.body.title,
            img: req.body.img,
            name: req.body.name,
            price: req.body.price,
            duration: req.body.duration,
            likes: req.body.likes,
            hashtags: req.body.hashtags,
            comments: req.body.comments,
            id_city: req.body.id_city
        }
        const { id } = req.params
        await Itinerary.findByIdAndUpdate(id, newData)

        res.status(201).json({
            message: "Itinerary has been update",
            newData
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteItinerary = async (req, res) => {
    try {
        const { id } = req.params
        await Itinerary.findByIdAndDelete(id)

        res.status(201).json({
            message: "Itinerary has been delete",
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { getItineraries, getItinerariesCity, getItinerary, addItinerary, updateItinerary, deleteItinerary }