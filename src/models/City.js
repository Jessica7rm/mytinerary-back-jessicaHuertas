const {Schema, model} = require('mongoose')

const schemaCity = new Schema({
    place: {
        type: String,
        required: true,
    },
    countri: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})

const City = model("City", schemaCity)

module.exports = City