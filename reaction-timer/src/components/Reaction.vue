<template>
    <p @click="propchange">Reaction Time: {{ reactionTime }} ms</p>
</template>
<script>
export default{
    props: ['reactionTime']
}
</script>
<style scoped>

</style> 