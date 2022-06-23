<script setup>
    import Square from './Square.vue'
    import { onMounted, computed} from 'vue'
    import { useStore } from 'vuex'
    const store = useStore()
    onMounted(()=>{
        store.commit('resetBoard')
        store.commit('initBoard')
    })
    function radius (x,y){
        if(x===0&&y===0){
            return 'border-top-left-radius:5px;'
        }else if(x===7&&y===0){
            return 'border-bottom-left-radius:5px;'
        }else if(x===0&&y===7){
            return 'border-top-right-radius:5px;'
        }else if(x===7&&y===7){
          return 'border-bottom-right-radius:5px;'
        }
    }
</script>
<template>
    <div class="board">
        <div v-for="(x,xIndex) in store.state.board" class="boardX">
            <Square v-for="(y,yIndex) in x" :style="radius(xIndex,yIndex)" class="boardY" :propiety="y.propiety" :state="y.state" :piece="y.piece" :cord="{x:xIndex,y:yIndex}"/> 
        </div>
    </div>
</template>
<style scoped>
    .board{
        width: 700px;
        height: 700px;
    }
    .boardX{
        display: flex;
        height: 12.5%;
    }
    .boardY{
        width: 12.5%;
    } 
</style>