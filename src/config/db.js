const { connect } = require('mongoose');

const URL = process.env.MONGO;

const connectData = () => {
connect(URL)
    .then(() => {
        console.log("Connect success to database")
    })
    .catch(() => {
        console.log("Error connecting to database")
    })
}

connectData()




