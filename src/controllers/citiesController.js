const City = require("../models/City")

const getCities = async (req, res) => {
    try {
        let cities = await City.find()
        res.status(200).json({cities})
    } catch (err){
       res.status(500).json({message: err.message})
    }   
}

const getCity = async (req, res) => {
    try {
        let { id } = req.params
        let city = await City.findById(id)
        res.status(200).json({ city })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const addCity = async (req, res) => {
    try {
        let payload = req.body
        let cityCreate = await City.create(payload)

        res.status(201).json({
            message: "City has been added",
            city: cityCreate
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteCity = async (req, res) => {
    try {
        const { id } = req.params
        await City.findByIdAndDelete(id)

        res.status(201).json({
            message: "City has been delete",
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateCity = async (req, res) => {
    try {
        let newData = {
            place: req.body.place,
            country: req.body.pais,
            image: req.body.foto
        }

        const { id } = req.params
        await City.findByIdAndUpdate(id, newData)

        res.status(201).json({
            message: "City has been update",
            newData
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const addCitiesCollection = async (req, res) => {
    try {
        let citiesCollection = [
            {
                place: "Iguazu",
                country: "Argentina",
                image: "/iguazu.jpg"
            },
            {
                place: "Barcelona",
                country: "Spain",
                image: "/barcelona.jpg"
            },
            {
                place: "Cancun",
                country: "Mexico",
                image: "/cancun.jpg"
            },
            {
                place: "New York",
                country: "United States",
                image: "/newyork.jpg"
            }
        ]

        await City.insertMany(citiesCollection)

        res.status(200).json({
            message: "Cities collection has ben hadded successfully",
            citiesCollection
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = { getCities, getCity, addCity, deleteCity, updateCity, addCitiesCollection }