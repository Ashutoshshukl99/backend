const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')


connectToMongo();
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.use("/", (req, res)=>{
  res.json("Hello I am Started");
})

app.listen(port, () => {
  console.log(`Funweb backend listening on port http://localhost:${port}`)
})