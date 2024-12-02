const PORT = 8080
const express = require('express')
const app = express()

const http = require('http')

const sever = http.createServer(app)
const {Server} = require('socket.io')
const cors = require('cors');

app.use(cors())

const io = new Server(sever,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
      }
})


const config = require("./config/config")
config(app)

// routes
const ChatRoutes = require("./resources/Controller/chat")
ChatRoutes(app)

const SocketRouters = require("./resources/Controller/socket")
SocketRouters(io)



sever.listen(PORT, () => console.log(`server is running on port http://localhost:${PORT}`))
