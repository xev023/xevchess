<script setup>
import { computed, ref } from '@vue/reactivity'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps({
    time: Number,
    mine: Boolean
})
const sec = ref(0)
const min = ref(0)
onMounted(()=>{
    min.value = props.time
})
const secParse = computed(()=>{
    return sec.value<10?`0${sec.value}`:sec.value
})
const minParse = computed(()=>{
    return min.value<10?`0${min.value}`:min.value
})
const interval = setInterval(()=>{
    if(props.mine && store.state.yourTurn){
        if(sec.value===0){
            if(min.value===0){
                store.dispatch('timeOut')
                clearInterval(interval)
            }else{
                min.value --
                sec.value = 59 
            }
        }else{
            sec.value --
        }
    }else if(!props.mine && !store.state.yourTurn){
        if(sec.value===0){
            if(min.value===0){
                clearInterval(interval)
            }else{
                min.value --
                sec.value = 59 
            }     
        }else{
            sec.value --
        }
    }
}, 1000)
</script>
<template>
<p>{{`${minParse}:${secParse}`}}</p>
</template>
<style scoped>
    p{
        font-size: 3rem;
        color: white;
    }
</style>