const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    progress:{
        type:String,
        required:true
    },
    userId: {
        type: String,
        required: true
    },
})

const tasks = mongoose.model("tasks", taskSchema)
module.exports = tasks