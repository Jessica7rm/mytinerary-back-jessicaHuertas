const { connect } = require('mongoose');

const URL = "mongodb+srv://jessica7rm:Jessica2023@cluster0.kcjyrbp.mongodb.net/?retryWrites=true&w=majority"

connect(URL)
    .then(() => {
        console.log("Connect success to database")
    })
    .catch(() => {
        console.log("Error connecting to database")
    })






