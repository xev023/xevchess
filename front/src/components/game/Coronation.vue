<script setup>
    import { useStore } from 'vuex'
    import { computed } from 'vue'
    const store = useStore()
    const queen = computed(()=>{
        return store.state.playerColour==='white'?'/assets/white_queen.png':'/assets/black_queen.png'
    })
    const tower = computed(()=>{
        return store.state.playerColour==='white'?'/assets/white_tower.png':'/assets/black_tower.png'
    })
    const horse = computed(()=>{
        return store.state.playerColour==='white'?'/assets/white_horse.png':'/assets/black_horse.png'
    })
    const bishop = computed(()=>{
        return store.state.playerColour==='white'?'/assets/white_bishop.png':'/assets/black_bishop.png'
    })
    function coronation(string){
        store.commit('doCoronation',string)
        store.dispatch('sendCoronation',string)
         if(store.state.doingJaque){
            store.dispatch('inJaque')
            store.commit('unsetJaque')
        }else{
            store.dispatch('checkDraw')
        }
    }
</script>
<template>
<div class="coronation">
    <div @click="coronation('queen')">
        <img :src="queen" alt="queen" >
    </div>
    <div @click="coronation('tower')">
        <img :src="tower" alt="tower">
    </div>
    <div @click="coronation('bishop')">
        <img :src="bishop" alt="bishop">
    </div>
    <div @click="coronation('horse')">
        <img :src="horse" alt="horse">
    </div>
</div>
</template>
<style scoped>
    .coronation{
        width: 700px;
        height: 700px;
        position: absolute;
        opacity: 0.7;
        background-color: black;
        display: flex;
        align-items: center; 
        justify-content: space-around;
    }
    .coronation>div{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lawngreen;
        cursor: pointer;
    }
       .coronation>div:hover{
        background-color: rgb(89, 165, 12);
    }
</style>