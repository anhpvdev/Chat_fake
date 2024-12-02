const express = require("express");
const router = express.Router();
const path = require('path')
const ChatModel = require("../Model/chat")


const userRoutes = (app) => {
  router.get('/',ChatModel.home)
  router.post('/add',ChatModel.add)



  // router.get('/404',ChatModel.error)

  
  return app.use("/", router)
}
module.exports = userRoutes

