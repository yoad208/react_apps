const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const PORT = 3001 | process.env.PORT

app.get('/', (req, res, next) => {
    res.send(req.body)
})

app.post('/', (req, res, next) => {
    console.log(req.body)
})


app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`)
})
