const mongoose = require('mongoose')


const workSpaceSchema = {
    id: Date,
    name: String,
    edit: Boolean,
    lists: Array
}

const workSpaceModel = mongoose.model('spaces', workSpaceSchema);
exports.workSpaceModel = workSpaceModel;