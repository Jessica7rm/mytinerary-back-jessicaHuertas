const { connect } = require('mongoose');

const URL = process.env.MONGO;

connect(URL)
    .then(() => {
        console.log("Connect success to database")
    })
    .catch(() => {
        console.log("Error connecting to database")
    })






