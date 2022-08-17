const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    date: Date,
    taskName: String,
    complete: Boolean
})

const listsSchema = new mongoose.Schema({
    id: Date,
    status: String,
    tasks: [taskSchema]
})

const workSpaceSchema = new mongoose.Schema({
    id: Date,
    name: String,
    lists: [listsSchema]
})

const workSpaceModel = mongoose.model('spaces', workSpaceSchema);
exports.workSpaceModel = workSpaceModel;