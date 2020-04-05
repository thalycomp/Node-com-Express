const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const postRoute = require('./routes/postRoute')

app.use(bodyParser.urlencoded({ extended: false }))
postRoute(app)

app.get('/', (req, res) => res.send('Ola mundo pelo express'))


app.listen(port, () => console.log('Server Running on ' + port))