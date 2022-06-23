<script setup>
import Board from './Board.vue'
import Preloader from './Preloader.vue'
import Coronation from './Coronation.vue'
import PostGame from './PostGame.vue'
import Timer from './Timer.vue'
import PlayerTag from './PlayerTag.vue'
import Chat from './Chat.vue'
import History from './History.vue'
import {onMounted} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
onMounted(()=>{
    store.state.queue = true
    store.dispatch('queue')
})  
</script>
<template>
<div class="container">
    <History v-if="!store.state.queue"></History>
    <div v-if="!store.state.queue" class="gameWrapper">
        <div class="infoWrapper">        
            <Timer :mine=false :time="store.state.otherTime"></Timer>
            <PlayerTag></PlayerTag>
        </div>
        <Board></Board>
        <div class="infoWrapper">
            <PlayerTag></PlayerTag>
            <Timer :mine=true :time="store.state.time"></Timer>
        </div>
    </div>
    <Preloader v-else color="#5173c3" scale="0.6"/>
    <Coronation v-if="store.state.coronation"></Coronation>
    <PostGame v-if="store.state.lose||store.state.win||store.state.draw"></PostGame>
    <Chat v-if="!store.state.queue" :messages="store.state.messages"></Chat>
</div>
</template>
<style scoped>
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .gameWrapper{
        width: 700px;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .infoWrapper{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
</style>