<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore()
const router = useRouter()
const text = computed(()=>{
    if(store.state.win){
        return 'You have won!'
    }else if(store.state.draw){
        return 'It was a tie!'
    }else{
        return 'You have lost!'
    }
})
function rematch(){
    store.dispatch('rematch')
}
</script>
<template>
    <div class="postGame">
        <h1>{{text}}</h1>
        <div class="buttonWrapper">
            <button @click="()=>{router.push('/dashboard'),store.commit('unsetGame'),store.commit('resetStore')}">Back to menu</button>
        </div>
    </div>
</template>
<style scoped>
    .postGame{
        width: 700px;
        height: 700px;
        position: absolute;
        opacity: 0.7;
        background-color: black;
        display: flex;
        align-items: center; 
        justify-content: space-around;
        flex-direction: column;
    }
    .buttonWrapper{
        display: flex;
        gap:4rem;
    }
    button{
        height: 6rem;
        width: 12rem;
        font-size: 1.5rem;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
    }
    h1{
        color: white;
    }
</style>