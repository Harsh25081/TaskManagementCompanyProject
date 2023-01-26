const express = require("express")
const mongoose = require("mongoose")
const route = require("./Route/route")
const app = express()

app.use(express.json())

const cors = require('cors')
app.use(cors({
    origin: '*'
}));

mongoose.connect("mongodb+srv://harsh258:Wb5QwC0mG0iUBIXS@new-cluster.baoq1vx.mongodb.net/DragAndDrop-DB", { useNewUrlParser: true })
    .then(() => console.log("MongoDB is Connected"))
    .catch((err) => console.log(err.message))

app.use("/", route)

app.listen(process.env.PORT || 3001, () => console.log("Express app is running on PORT" + (process.env.PORT || 3001)))