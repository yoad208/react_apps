const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/workSpaces')

const db = mongoose.connection;

db.on('error', console.error.bind('connection error'));
db.once('open', () => {
    console.log('mongo connected')
})

module.exports = db;
