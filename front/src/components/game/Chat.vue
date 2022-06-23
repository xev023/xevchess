<script setup>
import {useStore} from 'vuex'
import { ref, watch } from 'vue'
const store = useStore()
const message = ref("")
const container = ref(null)
const props = defineProps({
    messages:Array
})
function sendMessage(){
    if(message.value !== ''){
        store.commit('newMessage',{text:message.value,type:'myMessage'})
        store.dispatch('sendMessage',{text:message.value,type:'otherMessage'})
        message.value = ""
    }
}
function draw(){
    store.commit('newMessage',{text:'The draw request has been sent to the opponent',type:'info'})
    store.dispatch('sendMessage',{text:'Your opponent wants a draw',type:'draw'})
}
function rejectDraw(index){
    store.commit('newMessage',{text:'The draw request has been rejected',type:'info'})
    store.dispatch('sendMessage',{text:'Your opponent has rejected the draw',type:'info'})
    props.messages.splice(index,1)
}
watch(props.messages,()=>{
    container.value.scrollTop = container.value.scrollHeight
})
</script>
<template>
    <div class="chatWrapper">
        <div ref="container" class="messageContainer">
            <p v-for="(msn,index) in props.messages" :class="msn.type">
                {{msn.text}}
                <div class="drawIcons" v-if="msn.type==='draw'">
                    <i @click="()=>store.dispatch('acceptDraw')" class="fa-solid fa-circle-check"></i>
                    <i @click="rejectDraw(index)"  class="fa-solid fa-ban"></i>
                </div>            
            </p>
        </div>
        <div class="controllersWrapper">
            <div class="inputWrapper">
                <i @click="sendMessage" class="fa-solid fa-paper-plane"></i>
                <input @keyup.enter="sendMessage" v-model="message" type="text" placeholder="Send a message">
            </div>
            <div class="alertsWrapper">
                <p @click="draw()">Draw <i class="fa-solid fa-handshake-simple"></i></p> 
                <p class="surrender" @click="()=>store.dispatch('timeOut')">Surrender <i class="fa-solid fa-flag"></i></p>
            </div>
        </div>     
    </div>
</template>
<style scoped>
    .chatWrapper{
        width: 300px;
        border-radius: 5px;
        height: 700px;
        background-color: #222831;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .controllersWrapper{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    .messageContainer{
        height: 100%;
        background-color: #5173c3;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    .inputWrapper,.alertsWrapper{
        display: flex;
        width: 100%;
    }
    .alertsWrapper{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #222831;
        display: flex;
        justify-content: space-between;
    }
    input{
        height: 40px;
        width: 270px;
        border: 0;
        padding-left: 5px;
    }
    input:focus, textarea {
        outline: none;
    }
    .inputWrapper>i{
        background-color: white;
    }
    i{
        width: 30px;
        height: 40px;
        justify-content: center;
        align-items: center;
        display: flex;
        cursor: pointer;
    }
    .inputWrapper>i:hover{
        color: #5173c3;
        cursor: pointer;
    }
    .alertsWrapper>p{
        color: white;
        cursor: pointer; 
        display: flex;
        align-items: center;
        padding: 0 5px;
    }
    .alertsWrapper>p:hover{
        color: #5173c3;
        cursor: pointer;
    }
    .myMessage,.otherMessage,.draw,.info{
        margin: 10px;
        margin-bottom: 0;
        padding: 5px;
        border-radius: 3px;
        max-width:270px;
        word-wrap: break-word;
        text-align: center;
    }
    .myMessage{
        background-color: white;
        align-self: flex-start;
    }
    .otherMessage{
        background-color: #222831;
        color: white;
        align-self: flex-end;
    }
    .draw{
        background-color: yellow;
        align-self: center;
    }
    .drawIcons{
        display: flex;
        justify-content: space-around;
    }
    .drawIcons>i{
        font-size: 1.5rem;
    }
    .drawIcons > i:hover{
        color: red;
    }
    .info{
        align-self: center;
        background-color: lightcoral;
    }
</style>