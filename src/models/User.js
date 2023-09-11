const { Schema, model } = require('mongoose')

const schemaUser = new Schema({
    name: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    url_img: { type: String, required: true},
    country: { type: String, required: true}
})

const User = model("User", schemaUser)

module.exports = User