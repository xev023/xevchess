<script setup>
    import {useStore} from 'vuex'
    const store = useStore()
</script>
<template>
    <div class="tag">
        <div class="imgWrapper">
            <img :src="store.state.avatar" alt="User avatar">
        </div>
        <p>{{store.state.username}}</p>
    </div>
</template>
<style scoped>
    .tag{
        display: flex;
        gap:1rem;
        height: 100%;
        align-items: center;
    }
    .imgWrapper{
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;

    }
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    p{
        font-size: 1rem;
        color: #ffffff;
    }
</style>