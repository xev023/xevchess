const express = require('express');
const app = express();
const http = require('http')
const cors = require('cors')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
})
const path = require('path')
const port = process.env.PORT || 3300
const classic = []
const rapid = []
const hand = []
const blitz = []
io.on("connection", (socket) => {
    console.log(socket.rooms)
    socket.on('queue',(username,time)=>{ 
        console.log(username)
        console.log(time)  
        let colour = ['white','black']
        switch(time){
            case 30:
                if(classic.length===0){
                    let me = {
                        id:socket.id,
                        username:username,
                        colour:colour[Math.floor((Math.random() * 2))]
                    }
                    classic.push(me)
                }else{
                    let spliced = classic.splice(0, 1)
                    let you = spliced[0]
                    let me = {
                        id:socket.id,
                        username:username,
                        colour:you.colour==='white'?'black':'white'
                    }
                    let room = `${me.id}-${you.id}`
                    let game = {
                        me:me,
                        you:you,
                        room:room
                    }
                    socket.to(you.id).emit('joinMe',game)
                    socket.join(game.room)
                }
            break
            case 10:
                if(rapid.length===0){
                    let me = {
                        id:socket.id,
                        username:username,
                        colour:colour[Math.floor((Math.random() * 2))]
                    }
                    rapid.push(me)
                }else{
                    let spliced = rapid.splice(0, 1)
                    let you = spliced[0]
                    let me = {
                        id:socket.id,
                        username:username,
                        colour:you.colour==='white'?'black':'white'
                    }
                    let room = `${me.id}-${you.id}`
                    let game = {
                        me:me,
                        you:you,
                        room:room
                    }
                    socket.to(you.id).emit('joinMe',game)
                    socket.join(game.room)
                } 
            break
            case 5: 
                if(hand.length===0){
                    let me = {
                        id:socket.id,
                        username:username,
                        colour:colour[Math.floor((Math.random() * 2))]
                    }
                    hand.push(me)
                }else{
                    let spliced = hand.splice(0, 1)
                    let you = spliced[0]
                    let me = {
                        id:socket.id,
                        username:username,
                        colour:you.colour==='white'?'black':'white'
                    }
                    let room = `${me.id}-${you.id}`
                    let game = {
                        me:me,
                        you:you,
                        room:room
                    }
                    socket.to(you.id).emit('joinMe',game)
                    socket.join(game.room)
                }
            break
            case 3:
                if(blitz.length===0){
                    let me = {
                        id:socket.id,
                        username:username,
                        colour:colour[Math.floor((Math.random() * 2))]
                    }
                    blitz.push(me)
                }else{
                    let spliced = blitz.splice(0, 1)
                    let you = spliced[0]
                    let me = {
                        id:socket.id,
                        username:username,
                        colour:you.colour==='white'?'black':'white'
                    }
                    let room = `${me.id}-${you.id}`
                    let game = {
                        me:me,
                        you:you,
                        room:room
                    }
                    socket.to(you.id).emit('joinMe',game)
                    socket.join(game.room)
                }
            break
        }
    })
    socket.on('joined',(game)=>{     
        socket.join(game.room)
        socket.to(game.room).emit('joined',game)
    }) 
    socket.on('allReady',(game)=>{
        io.sockets.in(game.room).emit('gameStart')
    }) 
    socket.on('movement',(movement)=>{
        const [, second] = socket.rooms;
        socket.to(second).emit('movement',movement)
    })
    socket.on('enPassant',(cord)=>{
        const [, second] = socket.rooms;
        socket.to(second).emit('enPassant',cord)
    })
    socket.on('killPassant',(cord)=>{
        const [, second] = socket.rooms;
        socket.to(second).emit('killPassant',cord)
    })
    socket.on('sendCastling',(movements)=>{
        const [, second] = socket.rooms;
        socket.to(second).emit('enemyCastling',movements)
    })
    socket.on('coronation',(coronationInfo)=>{
        const [, second] = socket.rooms;
        socket.to(second).emit('coronation',coronationInfo)
    })
    socket.on('inJaque',()=>{
        const [, second] = socket.rooms;
        socket.to(second).emit('inJaque')
        console.log('in jaque')
    })
    socket.on('checkDraw',()=>{
        const [, second] = socket.rooms;
        socket.to(second).emit('checkDraw')
    })
    socket.on('youWon',()=>{
        const [, second] = socket.rooms;
        socket.to(second).emit('youWon')
    })
    socket.on('draw',()=>{
        const [, second] = socket.rooms;
        socket.to(second).emit('draw')
    })
    socket.on('notInQueue',(time)=>{
            console.log(time)  
            switch(time){
                case 30:
                    classic.forEach((element,i)=>{
                        if(element.id===socket.id){
                            classic.splice(i,1)
                        }
                    })
                break
                case 10:
                    rapid.forEach((element,i)=>{
                        if(element.id===socket.id){
                            rapid.splice(i,1)
                        }
                    })
                break
                case 5: 
                    hand.forEach((element,i)=>{
                        if(element.id===socket.id){
                            hand.splice(i,1)
                        }
                    })
                break
                case 3:
                    blitz.forEach((element,i)=>{
                        if(element.id===socket.id){
                            blitz.splice(i,1)
                        }
                    })
                break
            }
    })
    socket.on('sendMessage',(message)=>{
        const [, second] = socket.rooms;
        socket.to(second).emit('sendMessage',message)
    })
})
// app.use(express.static('./dist'))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'))
// }) 
app.use(cors())
server.listen(port, () => {
    console.log('listening on *:3300');
});