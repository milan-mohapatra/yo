import dotenv from "dotenv"
dotenv.config()

import express from "express"
import connectDB from "./config/db.mjs"

connectDB()

const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`[server] running at ${PORT}`))