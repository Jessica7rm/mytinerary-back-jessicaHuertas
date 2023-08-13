const City = require("../models/City")

const getCities = (req, res) => {
    const cityCreated = new City({
        place: "Venice",
        countri: "Italy",
        image: "/venice.jpg"
    })
    cityCreated.save()

    res.json({
        cityCreated 
        
    })
}


