<script setup>
import Header from './components/Header.vue'
import { useStore } from 'vuex'
const store = useStore()
</script>
<template>  
  <Header v-if="!store.state.inGame"></Header>
  <router-view/>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1E212D;
}
.view{
  width: 100%;
  height: 94%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>