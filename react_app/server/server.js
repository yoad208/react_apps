const express = require('express')
const app = express()

const PORT = 3001 | process.env.PORT

app.get('/', (req, res, next) => {
    res.json({status: 200})
})


app.listen(PORT, () => {
    console.log(`server runing on port http://localhost:${PORT}`)
})
