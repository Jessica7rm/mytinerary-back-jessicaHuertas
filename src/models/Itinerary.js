const { Schema, model, Types } = require('mongoose')

const schemaItinerary = new Schema({
    title: { type: String, required: true},
    img: { type: String, required: true },
    user: { type: String, required: true },
    price: { type: Number, required: true, max:5, min:1},
    duration: { type: Number, required: true },
    likes: { type: Array, required: true },
    hashtags: { type: Array, required: true },
    comments: { type: String, required: true },
    id_city: { type: Types.ObjectId, required:true, ref:'City' }
})

const Itinerary = model("Itinerary", schemaItinerary)

module.exports = Itinerary