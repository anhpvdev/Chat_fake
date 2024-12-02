const path = require('path')
const mongoose = require('../../config/connect_db')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');


const schema = require('../../config/schema')




const ChatServices = {

    home: async (req, res) => {
        
        const  listchat = mongoose.model('noidungs', schema.Chatschema)
            listchat.find({})
            .sort({ thoigian: -1 }) // Sắp xếp theo trường `thoigian` giảm dần
            .limit(5)
            .then((dataa)=>{
            
               return res.json({
                status: 'success',
                data:dataa.reverse()
               })
               
            })
    },

    

    add: async (req, res) => {

      var {name,content} = req.body
        console.log(name,content)
      
        
        const  addchat = mongoose.model('noidungs', schema.Chatschema)

        var newChat = new addchat({
          ten: name,
          noidung: content,
        });
      
        newChat.save()
        .then((dataa)=>{
            console.log(dataa)
            return res.json({
            status: 'success',
            data:dataa
          })
            
        })

    },

   
    

}

module.exports = ChatServices