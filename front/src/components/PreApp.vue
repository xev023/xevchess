<script setup>
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import { ref } from 'vue'
    const user = {
      username: "",
      password: ""
    }
    const newUser = {
      username: "",
      password: "",
      passwordConfirmation:""
    }
    function handleRegister(event){
        event.preventDefault()
        (user)
        router.push({ path: '/' })
    }
    const login = ref(true)
    const store = useStore()
    const router = useRouter()
    function handleLogin(event){
        event.preventDefault()
        //post api action  
        store.commit('loggedIn')
        store.commit('setUsername',user.username)
        router.push({ path: '/dashboard' })
    }
</script>
<template>
    <div class="view">
        <!-- <div class=""></div> -->
        <h1>A simple chess game<br>to play with your friends :)</h1>
        <div>
            <section class="titleSection">
            <div class="imgWrapper">
                <img src="/assets/board.png" alt="board of the game">
            </div>
        </section>
        <section>
            <Transition name="slide-right">
                <form v-if="login">
                    <h2>Login</h2>
                    <input v-model="user.username" placeholder="Username" type="text">
                    <input v-model="user.password" placeholder="Password" type="password">
                    <button @click="handleLogin">Get in</button>
                    <a  href="#" @click="login=!login">Don't have an account yet? Sign up</a>
                </form>
                <form v-else>
                    <h2>Register</h2>
                    <input v-model="newUser.username" placeholder="Username" type="text">
                    <input v-model="newUser.password" placeholder="Password" type="password">
                    <input v-model="newUser.passwordConfirmation" placeholder="Password repeat" type="password">
                    <button @click="handleRegister">Post</button>
                    <a href="#" @click="login=!login">Do you already have an account?</a>
                </form>
            </Transition>   
        </section>
        </div>
        
    </div>
</template>
<style scoped>
    .view > div{
        display: flex;
        width: 100%;
    }
    section{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        color: white;
        font-size: 3rem;
    }
    form{
        display: flex;
        flex-direction: column;
        height: 20rem;
        width: 20rem;
        background-color: #222831;
        border-radius: 10px;
        justify-content: center;
        gap: 1rem;
        align-items: center;
    }
    input{
        height: 2rem;
        width: 80%;
        border-radius: 5px;
        border: 0;
        padding-left: 5px;
    }
    h2{
        color: #EEEEEE;
    }
    button{
        width: 30%;
        height: 2rem;
        background-color: #5173c3;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
    }
    form a{
        color: #5173c3;
        
    }
    form a:hover{
        color: #EEEEEE;
    }
    .imgWrapper{
        width: 20rem;
        height: 20rem;
    }
    .imgWrapper > img{
        width:100%;
        height:100%;
    }
    .slide-right-enter-active,
    .slide-right-leave-active {
    transition: all 0.12s ease-out;
    }
    .slide-right-enter-from {
    opacity: 0;
    transform: translateX(240px);
    }
    .slide-right-leave-to {
    opacity: 0;
    transform: translateX(-200px);
    }
</style>