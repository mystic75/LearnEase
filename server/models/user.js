const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name:String,
    Email:{
        type:String,
        unique:true
},
password:String
})

const UserModel = mongoose.model('user',userSchema);
module.exports = UserModel;