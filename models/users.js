const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:String,
    password:String,
    likeProducts:Array,
    role:String,
},{
    collection:"userData"
})

module.exports = mongoose.model('User', userSchema);