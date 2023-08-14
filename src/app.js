const express = require("express")
const cors = require("cors")
const router = require("./router/router")
require("./config/db.js")

const app = express()

app.use(cors())
app.use("/", router)


app.listen(3000, () => {
     console.log("listening on port 3000");
})