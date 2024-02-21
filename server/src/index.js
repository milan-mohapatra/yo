require("dotenv").config()
const express = require("express")
const connectDB = require("./configs/db.js")

connectDB()

const app = express()
const PORT = process.env.PORT || 3001

app.use("/api/auth", require("./routes/auth.route.js"))

app.listen(PORT, () => console.log(`[server] running at ${PORT}`))