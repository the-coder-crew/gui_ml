const csv = require("csvtojson");

const dataRouter = require('express').Router()


dataRouter.get('/simplelinreg', async (req, res) => {
    const filePath = './datasets/simple_linear.csv'
    const data = await csv().fromFile(filePath)

    res.send(data)
})

module.exports = dataRouter