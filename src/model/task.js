const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
name: String,
mail: String,
phone:String,
message:String
})

 module.exports= mongoose.model('tasks',TaskSchema);