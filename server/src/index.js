require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./configs/db.js")
const globalErrorHandler = require("./middlewares/global.error.middleware.js")

connectDB()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use("/api/auth", require("./routes/auth.route.js"))
app.use("/api/users", require("./routes/user.route.js"))
app.use("/api/groups", require("./routes/group.route.js"))
app.use("/api/messages", require("./routes/message.route.js"))
app.use("/api/charts", require("./routes/chart.route.js"))
app.use("/api/admin", require("./routes/admin.route.js"))

app.all("*", (req, res) => {
    res.status(404).json({message: "invalid route"})
})
app.use(globalErrorHandler)

app.listen(PORT, () => console.log(`[server] running at ${PORT}`))