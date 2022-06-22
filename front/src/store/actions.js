import store from "."
import { useSocketIO } from "../socket.io" 
const socket = useSocketIO().socket
socket.on('joinMe',(game)=>{
    let colour = game.me.colour==='white'?'black':'white'
    store.commit('setPlayerColour',colour)
    if(colour==='white'){
        store.commit('toggleTurn')
    }
    store.commit('setGameInfo',game)
    let aux = game.you
    game.you=game.me
    game.me=aux
    socket.emit('joined',game)
})
socket.on('joined',(game)=>{
    let colour = game.me.colour==='white'?'black':'white'
    store.commit('setPlayerColour',colour)
    if(colour==='white'){
        store.commit('toggleTurn')
    }
    store.commit('setGameInfo',game)
    socket.emit('allReady',game)
})
socket.on('gameStart',()=>{
    store.commit('stopQueue')
})
socket.on('movement',(movement)=>{
    store.commit('toggleTurn')
    store.commit('enemyMovement',movement)
})
socket.on('enPassant',(cord)=>{
    store.commit('setPassant',cord)
})
socket.on('killPassant',(cord)=>{
    store.commit('killPassant',cord)
})
socket.on('enemyCastling',(movements)=>{
    store.commit('toggleTurn')
    store.commit('enemyCastling',movements)
})
socket.on('coronation',(coronationInfo)=>{
    store.commit('enemyCoronation',coronationInfo)
})
socket.on('inJaque',()=>{
    store.commit('setInJaque')
    store.commit('checkLose')
    if(store.state.lose){
        socket.emit('youWon')
    }
})
socket.on('youWon',()=>{
    store.commit('setWin')
})
socket.on('checkDraw',()=>{
    store.commit('unsetInJaque')
    store.commit('checkLose')
    if(store.state.draw){
        socket.emit('draw')
    }
})
socket.on('draw',()=>{
    store.commit('setDraw')
})
export const queue = () => {
    socket.emit('queue',store.state.username,store.state.time)
}
export const notInQueue = () => {
    socket.emit('notInQueue',store.state.time)
}
export const sendMovement = (store,cord) =>{
    let movement = {
        init:store.state.selected,
        final:cord
    }
    socket.emit('movement',movement)
}
export const enPassant = (store,cord) =>{
    socket.emit('enPassant',cord)
}
export const killPassant = (store,cord) =>{
    socket.emit('killPassant',cord)
}
export const sendCastling = (store,movements) =>{
    socket.emit('sendCastling',movements)
}
export const sendCoronation = (state,piece) =>{
    let coronationInfo = {
        'piece':piece,
        'cord':store.state.coronationPosition,
        'init':store.state.coronationInit
    }
    socket.emit('coronation',coronationInfo)
    if(store.state.doingJaque){
        socket.emit('inJaque')
    }
}
export const inJaque = () =>{
    console.log('sending jaque',store.state.doingJaque)
    socket.emit('inJaque')
}
export const checkDraw = () =>{
    console.log('sending draw',store.state.doingJaque)
    socket.emit('checkDraw')
}