require("dotenv").config()

const express = require("express")
const connectDB = require("./config/db.js")

connectDB()

const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`[server] running at ${PORT}`))