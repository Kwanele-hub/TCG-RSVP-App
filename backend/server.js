const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { route } = require("./route/customer")
const cors = require('cors')

app.use(cors())
app.use(express.json())
mongoose.connect(
    "mongodb+srv://kwanele:sphe1906@cluster0.lt0xm.mongodb.net/Rsvp?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },

    () => {
        console.log("mongobd database connected!")
    }
);

// const customerRouter = require('./route/customer')
// app.use("/customer", customerRouter)
route(app)

const port = 5100
app.listen(port, () => console.log(`server running on port: ${port}`))