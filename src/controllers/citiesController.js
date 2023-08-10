

const getCities = (req, res) => {

    res.json({
        cities: [
            {
                place: "Venice",
                countri: "Italy",
                image: "/venice.jpg"
            },
            {
                place: "Paris",
                countri: "France",
                image: "/paris.jpg"
            }
        ]
    })
}

const getCity = (req, res) => {

   const {id} = req.params

    res.json(
        {
            place: "Paris",
            countri: "France",
            image: "/paris.jpg",
            paramId: id
        })
}

module.exports = {
    getCities,
    getCity
}