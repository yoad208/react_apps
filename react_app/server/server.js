const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('../db/mongoConnect')
const {workSpaceModel} = require('../db/models/workSpaceModel')
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const PORT = 3001 | process.env.PORT

app.get('/', async (req, res, next) => {
    let spaces = await workSpaceModel.find({})
    res.json({spaces})
})

app.post('/', async (req, res, next) => {
    console.log(req.body)

    let workSpace = new workSpaceModel(req.body);
    await workSpace.save();
    res.json(workSpace)
})


app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`)
})
