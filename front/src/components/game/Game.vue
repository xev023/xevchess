<script setup>
import Board from './Board.vue'
import Preloader from './Preloader.vue'
import Coronation from './Coronation.vue'
import PostGame from './PostGame.vue'
// import Time from './Time.vue'
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
    <div v-if="!store.state.queue" class="gameWrapper">
        <!-- <div  class="otherChrono">
            <Time :time="store.state.time"></Time>
        </div> -->
        <div class="board">
            <Board></Board>
        </div>
        <!-- <div class="myChrono">
            <Time :time="store.state.otherTime"></Time>
        </div> -->
    </div>
    <Preloader v-else color="#00ADB5" scale="0.6"/>
    <Coronation v-if="store.state.coronation"></Coronation>
    <PostGame v-if="store.state.lose||store.state.win||store.state.draw"></PostGame>
</div>
</template>
<style scoped>
    .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .board{
        width: 700px;
        height: 700px;
    }
</style>