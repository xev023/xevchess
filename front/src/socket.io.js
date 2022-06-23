import {io} from 'socket.io-client' 
const socket = io('http://localhost:3300')
// const socket = io()
export {socket}