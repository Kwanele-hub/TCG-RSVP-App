const express = require('express')
const app = express()

app.use(express.json())

const port = 4000
app.listen(port, ()=> console.log(`server running on port: ${port}`))