const mongoose = require('mongoose')


var __uri = "mongodb+srv://maviess10:8hUqo37WMHcOxm21@cluster0.ca8sz.mongodb.net/Chat"



mongoose.connect(__uri)

module.exports = mongoose

