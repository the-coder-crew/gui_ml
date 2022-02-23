const express = require('express')
// const cors = require('cors')
require('express-async-errors')
const middleware = require('./utils/middleware')
const dataRouter = require('./routes/data.route')

const app = express()

// app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.get('/', (request, response) => {
    response.send('<p>Gui ML backend api</p>')
})
app.use('/api/data', dataRouter)

app.use(middleware.unknownEndPoint)
app.use(middleware.errorHandler)

module.exports = app