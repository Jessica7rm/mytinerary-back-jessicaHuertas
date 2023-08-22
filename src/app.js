const express = require("express")
require("dotenv/config")
const cors = require("cors")
const router = require("./router/router.js")
require("./config/db.js")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", router)


app.listen(process.env.PORT, () => {
     console.log("listening on port + process.env.PORT");
})