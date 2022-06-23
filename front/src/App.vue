<script setup>
  import Header from './components/Header.vue'
  import { useStore } from 'vuex'
  import {socket} from './socket.io'
  const store = useStore()
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
  socket.on('sendMessage',(message)=>{
      store.commit('newMessage',message)
  })
</script>
<template>  
  <Header v-if="!store.state.inGame"></Header>
  <router-view/>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1E212D;
}
.view{
  width: 100%;
  height: 94%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>