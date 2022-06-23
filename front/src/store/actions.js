import { socket } from "../socket.io"
//socket io synchronous actions
export const queue = (store) => {
    socket.emit('queue',store.state.username,store.state.time)
}
export const notInQueue = (store) => {
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
export const sendCoronation = (store,piece) =>{
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
    socket.emit('inJaque')
}
export const checkDraw = () =>{
    socket.emit('checkDraw')
}
export const timeOut = (store)=>{
    socket.emit('youWon')
    store.commit('setLose')
}
export const sendMessage = (state,message) => {
    socket.emit('sendMessage',message)
}
export const acceptDraw = (store) =>{
    store.commit('setDraw')
    socket.emit('draw')
}
//asynchronous actions