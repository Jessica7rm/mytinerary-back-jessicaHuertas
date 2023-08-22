const City = require("../models/City")

const getCities = async (req, res) => {
    const query = {}
    if (req.query.place) {
        let regExp = new RegExp(`^${req.query.place}`, "i")
        query.place = regExp
    }
    try {
        let cities = await City.find(query)
        res.status(200).json({ cities })
    } catch (err) {
        res.status(500).json({ message: err.message })
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
            country: req.body.country,
            image: req.body.image,
            description: req.body.description
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

//addCities desde postman se le puede enviar un [] con las ciudades siguiendo el modelo que uno quiera agregar //

const addCities = async (req, res) => {
    try {
        let playload = req.body
        let newCities = await City.insertMany(playload)

        res.status(200).json({
            message: "Cities collection has ben hadded successfully",
            newCities
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//addCitiesCollection desde postman en el body se le envia un [] vacio y devueve las ciudades que estan detalladas en el controlador //

const addCitiesCollection = async (req, res) => {
    try {
        let citiesCollection = [
            {
                place: "Cancun",
                country: "Mexico",
                image: "/cancun.jpg",
                description: "Cancun is known for its beaches, the many tourist centers and the nightlife."
            },
            {
                place: "Iguazu",
                country: "Argentina",
                image: "/iguazu.jpg",
                description: "Puerto Iguazú is the gateway city for visitors entering Argentina to visit the internationally famed Iguazu Falls."
            },
            {
                place: "Barcelona",
                country: "Spain",
                image: "/barcelona.jpg",
                description: "Barcelona is a charming city with a lot of culture, legendary architecture and first-rate gastronomy and drinks."
            },
            {
                place: "New York",
                country: "United States",
                image: "/newyork.jpg",
                description: "It is a city Cool, cosmopolitan, full of people, constantly evolving. You will be able to enjoy its culture, gastronomy and its incredible buildings."
            },
            {
                place: "Venice",
                country: "Italy",
                image: "/venice1.jpg",
                description: "Venice is known for its beauty, canals, architecture and art. You can enjoy your food, and gondola rides."
            },
            {
                place: "Paris",
                country: "France",
                image: "/paris.jpg",
                description: "Paris seems to have been designed specifically for the enjoyment of its visitors. Its streets, squares, buildings, gardens, and monuments beckon tourists to return. "
            },
            {
                place: "London",
                country: "United Kingdom",
                image: "/london.jpg",
                description: "London with its history, culture, green spaces and an international crowd that spills over into every delicious corner of your kitchen."
            },
            {
                place: "Florence",
                country: "Italy",
                image: "/florence.jpg",
                description: "Florence Italy is a great open-air museum for anyone who loves history and culture. The Tuscan city is full of interesting museums, squares, churches, statues and Renaissance art."
            },
            {
                place: "Rome",
                country: "Italy",
                image: "/rome.jpg",
                description: "Rome is often referred to as the Eternal City. Exploring the city center by foot surrounded by glorious monuments and colossal remains takes you back in time."
            },
            {
                place: "Ephesus",
                country: "Türkiye",
                image: "/ephesus.jpg",
                description: "Ephesus was an ancient port city whose well-preserved ruins are in modern-day Turkey. Ephesus is considered Europe’s most complete ancient city, making it some of the best ancient ruin to see."
            },
            {
                place: "Santorini",
                country: "Greece",
                image: "/santorini.jpg",
                description: "Santorini is a fantastic Cycladic island in the southern Aegean Sea with astonishing volcanic scenery and world-famous sunset vistas. This destination that is perfect for couples, with rich viticulture and history to dive into."
            },
            {
                place: "Perito Moreno",
                country: "Argentina",
                image: "/moreno.jpg",
                description: "El Calafate is referred to as the Tierra de los Glaciares, or Land of the Glaciers. And the king of its many glaciers is Perito Moreno. Glacier National Park’s star is worth a day (or two) to watch icebergs crash into the water, go on a glacier trek."
            },
            {
                place: "Pisa",
                country: "Italy",
                image: "/pisa.jpg",
                description: "The city of Pisa it is one of the most important cities in Tuscany and it is extremely well-known in the world, because of its famous symbol the Leaning Tower. Pisa is both an ancient and modern city."
            },
            {
                place: "Petra",
                country: "Jordan",
                image: "/petra.jpg",
                description: "Hidden in a valley surrounded by desert and mountains is an entire city carved out of stone. The lost city of Petra is one of the seven wonders of the world. It has been rediscovered only 200 years."
            },
            {
                place: "Holbox",
                country: "Mexico",
                image: "/holbox.jpg",
                description: "Holbox Island offers 36 kilometers of pristine white coralline sand beaches. Located within the Yum Balam Nature Reserve, Holbox is considered to be one of the world's most important ecological regions and is home to a spectacular and unique array of wildlife and ecosystems."
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

module.exports = { getCities, getCity, addCity, deleteCity, updateCity, addCitiesCollection, addCities }