const mongoose = require('mongoose')



  
const Chatschema = new mongoose.Schema({
    ten: { type: String, required: true },
    noidung: { type: String, required: true },
    thoigian: { type: Date, required: true, default: Date.now}
  
})


  
module.exports = {Chatschema}