<script setup>
    import { computed,toRaw} from 'vue'
    import { useStore } from 'vuex'
    const props = defineProps({
        state: String,
        cord: Object,
        piece: Object,
        propiety: String
    })
    const store = useStore()
    const pieceSpread = computed(()=>{
        return toRaw(props.piece)
    })
    const color = computed(() => {
        if(props.state==='neutral'){
            if(props.cord.x % 2 !== 0){
                if(props.cord.y === 0||props.cord.y === 2||props.cord.y === 4||props.cord.y === 6){
                    return 'black'
                }else{
                    return 'white'
                }
            }else{
                if(props.cord.y === 0||props.cord.y === 2||props.cord.y === 4||props.cord.y === 6){
                    return 'white'
                }else{
                    return 'black'
                }
            }
        }else if(props.state==='selected'){
            return 'selected'
        }else if(props.state==='movement'){
            return 'movement'
        }else{
            return 'enemy'
        }
    })
    function handleClick(){
        if(store.state.yourTurn){
            if(pieceSpread.value.name!=='' && props.propiety==='mine'){
                if(props.state==='neutral'){
                    store.commit('selectPiece',props.cord)
                    store.commit('removeMovements')
                    store.commit('showMovements',pieceSpread.value.name)
                }else if(props.state==='selected'){
                    store.commit('removeMovements')
                    store.commit('unselectPiece',props.cord)
                }else{
                    if(store.state.board[store.state.selected.x][store.state.selected.y].piece.name==='king' && !store.state.jaque){
                        store.commit('toggleTurn')   
                        store.commit('doCastling',props.cord)
                        store.dispatch('sendCastling',store.state.castlingMovements)
                        if(store.state.doingJaque){
                                store.dispatch('inJaque')
                                store.commit('unsetJaque')
                        }else{
                                store.dispatch('checkDraw')
                        }
                        store.commit('removeEnemyMovements')
                        store.commit('removeMovements')
                        store.commit('unsetCastling','all')   
                    }     
                }
            }else{
                    if(props.state==='movement'){
                        if(store.state.board[store.state.selected.x][store.state.selected.y].piece.name==='pawn'&&store.state.selected.x===6&&props.cord.x===4){
                            if(props.cord.y<7&&(store.state.board[props.cord.x][(props.cord.y)+1].piece.name==='pawn'&&store.state.board[props.cord.x][props.cord.y+1].propiety==='other')){
                                store.dispatch('enPassant',props.cord)
                            }
                            if(props.cord.y>0&&(store.state.board[props.cord.x][props.cord.y-1].piece.name==='pawn'&&store.state.board[props.cord.x][props.cord.y-1].propiety==='other')){
                                store.dispatch('enPassant',props.cord)
                            }   
                        } 
                        if(store.state.board[store.state.selected.x][store.state.selected.y].piece.name==='king'){
                            store.commit('unsetCastling','all')
                        }
                        if(store.state.board[store.state.selected.x][store.state.selected.y].piece.name==='tower'&&store.state.selected.y===0&&store.state.selected.x===7){
                            store.commit('unsetCastling','left')
                        }
                        if(store.state.board[store.state.selected.x][store.state.selected.y].piece.name==='tower'&&store.state.selected.y===7&&store.state.selected.x===7){
                            store.commit('unsetCastling','right')
                        }
                        if(store.state.board[store.state.selected.x][store.state.selected.y].piece.name==='pawn'&&props.cord.x===0) {
                            store.commit('setCoronation',props.cord)
                            if(store.getters.piecesCount === 2){
                                store.dispatch('acceptDraw')
                            }
                        }else{
                            store.commit('toggleTurn')   
                            store.dispatch('sendMovement',props.cord)
                            store.commit('doMovement',props.cord)
                            if(store.state.passant.x > 0){
                                store.dispatch('killPassant',store.state.passant)
                                store.commit('unsetPassant') 
                            }
                            console.log(store.state.doingJaque)
                            if(store.state.doingJaque){
                                store.dispatch('inJaque')
                                store.commit('unsetJaque')
                            }else{
                                store.dispatch('checkDraw')
                            }
                            store.commit('removeEnemyMovements')
                            store.commit('removeMovements') 
                            console.log(store.getters.piecesCount)
                            if(store.getters.piecesCount === 2){
                                store.dispatch('acceptDraw')
                            }
                        }          
                    }
                }
            }
    }
</script>
<template>
    <div @click="handleClick" :class="color">
        <img :src="pieceSpread.url"/>
    </div>
</template>
<style scoped>
    div{
        width:100%;
        height:100%;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    .white{
        background-color: rgb(255, 255, 255);
    }
    .black{
        background-color: #5173c3;
    }
    .selected{
        background-color: rgb(8, 8, 236);
        border: solid 1px white;
    }
    .movement{
        background-color: rgb(74, 225, 74);
        border: solid 1px white;
    }
    .enemy{
        background-color: yellow;
        border: solid 1px white;
    }
</style>