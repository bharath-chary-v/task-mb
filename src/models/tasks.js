const mongoose = require("mongoose")


const taskSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String},
    Priority: {type:String},
    Status: {type:String},
    // createdAt:{type}
})


module.exports = mongoose.model("Task",taskSchema)
