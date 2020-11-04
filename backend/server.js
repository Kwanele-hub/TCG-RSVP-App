const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
mongoose.connect(
  "mongodb+srv://kwanele:<password>@cluster0.lt0xm.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
userNewUrlParser: true,
useUnifiedTopology: true,
useNewUrlParser: true
    },

    () =>{
        console.log("mongobd database connected!")
    }
);

const customerRouter = require('./route/customer')
app.use("/customer", customerRouter)


const port = 5100
app.listen(port, ()=> console.log(`server running on port: ${port}`))