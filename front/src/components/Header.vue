<script setup>
    import {useRouter} from 'vue-router'
    import { useStore } from 'vuex'
    import {ref} from 'vue'
    const router = useRouter()
    const store = useStore()
    const options = ref(false)
    const queue = ref(false)
    function initGame(time){
        store.commit('setTime',time)
        router.push({path:'/game'})      
        console.log(store.state.time) 
    }
    function cancelQueue(){
        router.push({path:'/'}) 
        store.dispatch('notInQueue')
    }
</script>
<template>
    <header>      
        <Transition name="slide-up">
            <button v-if="!options" @click="()=>options=true" class="playButton">Play as a guest</button>
            <button v-else-if="queue" @click="()=>{options=false,queue=false,cancelQueue()}" class="playButton">Cancel queue</button>
            <div class="buttonWrapper" v-else>
                <button @click="()=>{initGame(30),queue = true}">30 min</button>  
                <button  @click="()=>{initGame(10),queue = true}">10 min</button>  
                <button  @click="()=>{initGame(5),queue = true}">5 min</button>  
                <button  @click="()=>{initGame(3),queue = true}">3 min</button>  
            </div>
        </Transition>
    </header>
</template>
<style scoped>
header{
  width: 100%;
  height: 6%;
  background-color: #222831;
  display: flex;
  justify-content: center;
  align-items: center;
}
button{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border:0;
    background-color: #5173c3;
    font-size: 0.8rem;
    cursor: pointer;
}
.buttonWrapper{
    position: absolute;
    display: flex;
    gap:2rem;
}
.playButton{
    width: 10rem;
    border-radius: 5px;
    border: 0;
    position: absolute;
    font-size: 1rem;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>