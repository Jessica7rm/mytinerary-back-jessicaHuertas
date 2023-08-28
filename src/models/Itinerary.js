const { Schema, model, Types } = require('mongoose')

const schemaItinerary = new Schema({
    img: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true
    },
    likes: {
        type: Array,
        required: true
    },
    hashtags: {
        type: Array,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    id_city: {
        type: Schema.Types.ObjectId,
        ref:'City'
    }
})

const Itinerary = model("Itinerary", schemaItinerary)

module.exports = Itinerary