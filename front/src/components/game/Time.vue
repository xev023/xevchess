<script setup>
const props = defineProps({
    time: Number
})
console.log(props.time)
</script>
<template>
<p>{{props.time}}</p>
</template>
<style scoped>
    p{
        font-size: 10rem;
    }
</style>