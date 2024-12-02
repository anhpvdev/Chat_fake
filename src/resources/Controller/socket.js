module.exports = (io) => {
    io.on('connection',(socket)=>{
        socket.on('on-chat',data=>{
            io.emit('user-chat',data)
        })
    })
  };