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

app.delete('/:id', async (req, res, next) => {
    try {
        let data = await workSpaceModel.deleteOne({_id: req.params.id})
        res.json(data)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})

app.put('/:id', async (req, res, next) => {
    let dataSaved = req.body
    try {
        let data = await workSpaceModel.updateOne({_id: req.params.id}, dataSaved)
        console.log(data)
        res.json(data)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
})


app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`)
})
