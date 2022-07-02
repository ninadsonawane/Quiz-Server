const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
    username:String,
    password:String,
    score:Number
})

module.exports = Owner = mongoose.model('owner', OwnerSchema);